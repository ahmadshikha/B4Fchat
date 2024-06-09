import Conversation from './Conversation';

export default class Msg extends Parse.Object {
  constructor() {
    super('Msg');
  }

  get text(): string {
    return super.get('text');
  }
  set text(value: string) {
    super.set('text', value);
  }

  get reciver(): Parse.User {
    return super.get('reciver');
  }
  set reciver(value: Parse.User) {
    super.set('reciver', value);
  }

  get conversation(): Conversation {
    return super.get('conversation');
  }
  set conversation(value: Conversation) {
    super.set('conversation', value);
  }
}

Parse.Object.registerSubclass('Msg', Msg);
