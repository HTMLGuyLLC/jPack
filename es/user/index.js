import {type_checks} from "../type_checks";
import {AbstractClass} from "../AbstractClass";

//create an object of default values
const user_defaults = {
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

/**
 *
 * User
 *
 * Class for storing and interacting with a user and their permissions
 *
 */
export class User extends AbstractClass{
    constructor(data) {
        super();
        
        this._keys = ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData']; 
        
        if( typeof data === "undefined" ) return this;

        //extend user_defaults with incoming data
        data = {...user_defaults, ...data};
        
        this.populate(data);
    }

    setId(id){
        this._id = id;
        return this;
    }
    getId(){
        return this._id;
    }

    setIsGuest(is_guest){
        this._isGuest = is_guest;
        return this;
    }
    getIsGuest(){
        return this._isGuest;
    }

    setIsAdmin(is_admin){
        this._isAdmin = is_admin;
        return this;
    }
    getIsAdmin(){
        return this._isAdmin;
    }

    setUsername(username){
        this._username = username;
        return this;
    }
    getUsername(){
        return this._username;
    }

    getFname(){
        return this._fname;
    }
    setFname(first_name){
        this._fname = first_name;
        return this;
    }

    getLname(){
        return this._lname;
    }
    setLname(last_name){
        this._lname = last_name;
        return this;
    }

    //quick way to get fname and lname
    getName(){
        return `${user.getFname()} ${user.getLname()}`;
    }

    getEmail(){
        return this._email;
    }
    setEmail(email){
        this._email = email;
        return this;
    }

    getPhone(){
        return this._phone;
    }
    setPhone(phone){
        this._phone = phone;
        return this;
    }

    //returns all permissions for this user
    getPermissions(){
        return this._permissions;
    }
    //sets all permissions for this user
    setPermissions(permissions){
        if( !Array.isArray(permissions) ) throw "setPermissions requires an array";

        this._permissions = permissions;
        return this;
    }
    //adds a single permission to this user
    addPermission(permission){
        this._permissions.push(permission);
        return this;
    }
    //Removes a single permission from this user
    removePermission(permission){
        this.setPermissions(this._permissions.filter(function(ele){
            return ele !== permission;
        }));
        return this;
    }
    //returns true if the user has the provided permission
    hasPermission(permission){
        return this.getPermissions().includes(permission);
    }

    //returns all additional data for this user
    getAdditionalData(){
        return this._additionalData;
    }
    //sets all additional data for this user
    setAdditionalData(additional_data){
        //must be a data object, even if it's empty
        type_checks.isDataObject(additional_data, null, false, false, true);

        this._additionalData = additional_data;
        return this;
    }
    //returns a single additional data value for this user
    getDataItem(key){
        return typeof this._additionalData[key] === "undefined" ? null : this._additionalData[key];
    }
    //sets a single additional data value for this user
    setDataItem(key, val){
        this._additionalData[key] = val;
        return this;
    }
}