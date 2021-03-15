import { User } from "oidc-client";

export class Register {
  Role: string;
  FullName: string;
  Password: string;
  Email: string;
  Phone: string;
  Address: string;
  Status: string;
  user: User;
  Message: string;
}
