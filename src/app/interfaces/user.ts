export interface User {
  email: string;
  name: string;
  country_code: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  verification: {
    complete: boolean;
    hash: string;
    completed_at: string;
  };
}
