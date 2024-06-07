import Conversation from './Conversation';
import User from './User';

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

  get reciver(): User {
    return super.get('reciver');
  }
  set reciver(value: User) {
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