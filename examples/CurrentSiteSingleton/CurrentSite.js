import {Site} from "@htmlguyllc/jpack/es/objects/site";

//grab $user data set in HTML using variables from your server
const site_data = typeof $site !== "undefined" ? $site : {};

//instantiate and export the User class as CurUser
export const CurSite = new Site(site_data);