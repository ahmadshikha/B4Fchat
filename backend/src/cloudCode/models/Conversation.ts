import User from './User';

export default class Conversation extends Parse.Object {
  constructor() {
    super('Conversation');
  }

  get users(): User[] {
    return super.get('users');
  }
  set users(value: User[]) {
    super.set('users', value);
  }
}

Parse.Object.registerSubclass('Conversation', Conversation);
