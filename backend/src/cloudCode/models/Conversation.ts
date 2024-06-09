
export default class Conversation extends Parse.Object {
  constructor() {
    super('Conversation');
  }

  get users(): Parse.User[] {
    return super.get('users');
  }
  set users(value: Parse.User[]) {
    super.set('users', value);
  }
}

Parse.Object.registerSubclass('Conversation', Conversation);
