export interface User {
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
}
