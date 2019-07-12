import {abstract_object} from "../abstract_object";

//create an object of default values
let user_defaults = {
    id: null,
    isGuest:false,
    isAdmin:false,
    username:null,
    fname:null,
    lname:null,
    email:null,
    phone:null,
    permissions:[],
    additionalData:{},
};
//override defaults from $user (if defined)
if( typeof $user === "object" ) user_defaults = {...user_defaults, ...$user};

/**
 *
 * Provides you with easy access to user information and allows you to perform permission checks
 *
 * @type {{getIsGuest: (function(): *), getPhone: (function(): *), getLname: (function(): *), getName: (function(): string), isGuest: null, setIsGuest: (function(*): user), addPermission: (function(*=): user), getId: (function(): *), setAdditionalData: (function(*): user), setPermissions: (function(*): user), getUsername: (function(): *), lname: null, setFname: (function(*): user), getFname: (function(): *), permissions: Array, setId: (function(*): user), id: null, additionalData: Array, email: (null|*), fname: null, setUsername: (function(*): user), setLname: (function(*): user), getAdditionalData: (function(): *), getPermissions: (function(): *), setPhone: (function(*): user), isAdmin: null, removePermission: (function(*): user), setIsAdmin: (function(*): user), populate: (function(*): user), getIsAdmin: (function(): *), setEmail: (function(*): user), phone: null, hasPermission: (function(*=): boolean), getEmail: (function()), username: null}}
 */
export const user = {...abstract_object, ...{
    //user object keys
    keys: ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData'],

    setId: function(id){
        this.id = id;
        return this;
    },
    getId: function(){
        return this.id;
    },

    setIsGuest: function(is_guest){
        this.isGuest = is_guest;
        return this;
    },
    getIsGuest: function(){
        return this.isGuest;
    },

    setIsAdmin: function(is_admin){
        this.isAdmin = is_admin;
        return this;
    },
    getIsAdmin: function(){
        return this.isAdmin;
    },

    setUsername: function(username){
        this.username = username;
        return this;
    },
    getUsername: function(){
        return this.username;
    },

    getFname: function(){
        return this.fname;
    },
    setFname: function(first_name){
        this.fname = first_name;
        return this;
    },

    getLname: function(){
        return this.lname;
    },
    setLname: function(last_name){
        this.lname = last_name;
        return this;
    },

    //quick way to get fname and lname
    getName: function(){
        return `${user.getFname()} ${user.getLname()}`;
    },

    getEmail: function(){
        return this.email;
    },
    setEmail: function(email){
        this.email = email;
        return this;
    },

    getPhone: function(){
        return this.phone;
    },
    setPhone: function(phone){
        this.phone = phone;
        return this;
    },

    //returns all permissions for this user
    getPermissions: function(){
        return this.permissions;
    },
    //sets all permissions for this user
    setPermissions: function(permissions){
        this.permissions = permissions;
        return this;
    },
    //adds a single permission to this user
    addPermission: function(permission){
        this.permissions.push(permission);
        return this;
    },
    //Removes a single permission from this user
    removePermission: function(permission){
        this.setPermissions(this.permissions.filter(function(ele){
            return ele !== permission;
        }));
        return this;
    },
    //returns true if the user has the provided permission
    hasPermission: function(permission){
        return this.getPermissions().includes(permission);
    },

    //returns all additional data for this user
    getAdditionalData: function(){
        return this.additionalData;
    },
    //sets all additional data for this user
    setAdditionalData: function(additional_data){
        this.additionalData = additional_data;
        return this;
    },
}}.populate(user_defaults); //immediately populate from user_defaults