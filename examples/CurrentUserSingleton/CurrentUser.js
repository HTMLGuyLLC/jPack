import {User} from "@htmlguyllc/jpack/es/objects/user";

//grab $user data set in HTML using variables from your server
const user_data = typeof $user !== "undefined" ? $user : {};

//instantiate and export the User class as CurUser
export const CurUser = new User(user_data);