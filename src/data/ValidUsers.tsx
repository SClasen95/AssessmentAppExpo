export interface ValidUserType {
  userName: string;
  email: string;
  password: string;
}

export const ValidUsers = [
  {
    userName: "testUser",
    email: "testuser@gmail.com",
    password: "test123",
  },
  {
    userName: "user",
    email: "user@gmail.com",
    password: "user123",
  },
  //You can set up more users to test access
];
