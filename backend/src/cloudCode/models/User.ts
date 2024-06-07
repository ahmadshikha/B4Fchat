export default class User extends Parse.User {
  constructor() {
    super();
  }

  get authData(): {
    continueWithMobileAuth: {
      id: string;
      OTP: string;
    };
  } {
    return super.get('authData');
  }
  set authData(value: {
    continueWithMobileAuth: {
      id: string;
      OTP: string;
    };
  }) {
    super.set('authData', value);
  }
  get gender(): 'male' | 'female' {
    return super.get('gender');
  }
  set gender(value: 'male' | 'female') {
    super.set('gender', value);
  }

  get countryName(): string {
    return super.get('countryName');
  }
  set countryName(value: string) {
    super.set('countryName', value);
  }

  get cityName(): string {
    return super.get('cityName');
  }
  set cityName(value: string) {
    super.set('cityName', value);
  }

  get mobileNumber(): string {
    return super.get('mobileNumber');
  }
  set mobileNumber(value: string) {
    super.set('mobileNumber', value);
  }

  get birthdate(): Date {
    return super.get('birthdate');
  }
  set birthdate(value: Date) {
    super.set('birthdate', value);
  }

  get fullName(): string {
    return super.get('fullName');
  }
  set fullName(value: string) {
    super.set('fullName', value);
  }

  get deleted(): boolean {
    return super.get('deleted');
  }
  set deleted(value: boolean) {
    super.set('deleted', value);
  }

  get fcm_token(): string {
    return super.get('fcm_token');
  }
  set fcm_token(value: string) {
    super.set('fcm_token', value);
  }
}

Parse.Object.registerSubclass('_User', User);
