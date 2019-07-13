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
 * @type {{getIsGuest: (function(): *), getPhone: (function(): *), getLname: (function(): *), getName: (function(): string), setIsGuest: (function(*): user), keys: string[], addPermission: (function(*=): user), getId: (function(): *), setAdditionalData: (function(*): user), setPermissions: (function(*): user), getUsername: (function(): *), setFname: (function(*): user), getFname: (function(): *), setId: (function(*): user), setUsername: (function(*): user), setLname: (function(*): user), getAdditionalData: (function(): *), getPermissions: (function(): *), setPhone: (function(*): user), removePermission: (function(*): user), getDataItem(*): null, setIsAdmin: (function(*): user), setDataItem(*, *): *, getIsAdmin: (function(): *), setEmail: (function(*): user), hasPermission: (function(*=): (*|boolean)), getEmail: (function(): *)}}
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
    //returns a single additional data value for this user
    getDataItem(key){
        return typeof this.additionalData[key] === "undefined" ? null : this.additionalData[key];
    },
    //sets a single additional data value for this user
    setDataItem(key, val){
        this.additionalData[key] = val;
        return this;
    }
}}.populate(user_defaults); //immediately populate from user_defaults