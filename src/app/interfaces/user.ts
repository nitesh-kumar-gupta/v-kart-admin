import * as moment from 'moment';
export class User {
  email: String;
  name: String;
  country_code: String;
  phone: String;
  role: String;
  createdAt: String;
  updatedAt: String;
  verification: {
    complete: Boolean;
    hash: String;
    completed_at: String;
  };
  constructor(user: User) {
    if (user) {
      this.email = user.email;
      this.name = user.name;
      this.country_code = user.country_code;
      this.phone = user.phone;
      this.role = user.role;
      this.createdAt = moment(user.createdAt.toString()).format('MMMM Do YYYY');
      this.updatedAt = moment(user.updatedAt.toString()).format('MMMM Do YYYY');
      this.verification = {
        complete: user.verification.complete,
        hash: user.verification.hash,
        completed_at: user.verification.completed_at
      };
    }
  }
}
