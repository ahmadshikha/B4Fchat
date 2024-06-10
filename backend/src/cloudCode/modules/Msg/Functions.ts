import Conversation from '../../models/Conversation';
import Employee from '../../models/Employee';
import Msg from '../../models/Msg';

Parse.Cloud.beforeSave(
  Msg,
  async req => {
    const object = req.object;
    const user = req.user as Parse.User;
    const sessionToken = req.user?.getSessionToken();

    const usersList = [object.reciver, user];
    console.log(usersList);

    let conversation = await new Parse.Query(Conversation)
      .containedBy('users', usersList)
      .first({ sessionToken: sessionToken });
    console.log(conversation);

    if (!conversation) {
      const newConversation = new Conversation();

      newConversation.users = usersList;

      const conversation_acl = new Parse.ACL();
      conversation_acl.setPublicReadAccess(false);
      conversation_acl.setPublicWriteAccess(false);
      conversation_acl.setReadAccess(user, true);
      conversation_acl.setReadAccess(object.reciver, true);

      newConversation.setACL(conversation_acl);

      conversation = await newConversation.save();
    }

    object.conversation = conversation;

    const acl = new Parse.ACL();
    acl.setPublicReadAccess(false);
    acl.setPublicWriteAccess(false);

    acl.setReadAccess(user, true);
    acl.setWriteAccess(user, true);
    acl.setReadAccess(object.reciver, true);

    object.setACL(acl);
  },
  {
    requireUser: true,
    fields: {
      text: {
        type: String,
        required: true,
        options: (val: string) => {
          if (val.length <= 0) {
            throw 'Invalid MSG';
          }
        },
      },
      reciver: {
        type: Object,
        required: true,
      },
    },
  }
);

Parse.Cloud.define('getConversations', async req => {
  const object = req.params;
  const user = req.user as Parse.User;
  const sessionToken = req.user?.getSessionToken();

  const loggedInUserId = user.id;


  const query = new Parse.Query("Conversation");
  query.include("users");

  const conversations = await query.find({ sessionToken: sessionToken });
  let userArray: any = []
  for (const conversation of conversations) {
    const users = conversation.get("users");

    const updatedUsers = users.filter((u: any) => u.id !== loggedInUserId);

    conversation.set("users", updatedUsers);
    userArray.push({
      id: conversation,
      user: conversation.get("users"),
      message: ""
    })

  }



  const msgsQuery: any = [];
  conversations.forEach((conversation) => {
    msgsQuery.push(
      new Parse.Query(Msg)
        .equalTo('conversation', conversation)
        .descending('createdAt')
        .select('-reciver', "text", '-conversation','-updatedAt')
        .first({ sessionToken: sessionToken })
    );
  });
  let msgs = await Promise.all(msgsQuery);
  msgs.forEach((msg,index) =>{
    userArray[index].message = msg
  })

  return {  userArray };

  // return myMsgs;
});



Parse.Cloud.define('getChat', async req => {
  const { conversation } = req.params;
  const sessionToken = req.user?.getSessionToken();

  const msgs = await new Parse.Query(Msg)
    .equalTo('conversation', { __type: "Pointer", className: "Conversation", objectId: conversation })
    .select('reciver', "text", '-conversation')
    .find({ sessionToken })

  return msgs
})