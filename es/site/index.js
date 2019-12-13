import {type_checks} from "../type_checks";
import {AbstractClass} from "../AbstractClass";
import {clone} from "../clone";

//create an object of default values
const site_defaults = {
    id: null,
    name:null,
    config:{},
};

/**
 *
 * Site (for multi-tenant applications)
 *
 * Class for storing and interacting with the current website's id, name, and config options
 *
 */
export class Site extends AbstractClass {
    constructor(data = {}){
        super();

        this._keys = ['id', 'name', 'config'];

        //extend user_defaults with incoming data
        data = {...site_defaults, ...data};

        this.populate(data);
    }

    getId() {
        return this._id;
    }

    setId(id) {
        if( typeof id !== 'number' && id !== null ) throw `${id} must be a number or null`;
        this._id = id;
        return this;
    }

    //gets the website's name
    getName() {
        return this._name;
    }

    setName(name) {
        if( typeof name !== 'string' && name !== null ) throw `${name} must be a string or null`;
        this._name = name;
        return this;
    }

    //returns all config data
    getConfig() {
        return clone.getValueOrClone(this._config);
    }

    //sets all config data using the provided object
    setConfig(config = {}) {
        //must be a data object, even if it's empty
        type_checks.isDataObject(config, null, false, false, true);
        this._config = clone.getValueOrClone(config);
        return this;
    }

    //returns an individual config value or null if it's not defined
    getConfigItem(key) {
        return typeof this._config[key] === "undefined" ? null : clone.getValueOrClone(this._config[key]);
    }

    //adds or updates a value in the config object
    setConfigItem(key, val) {
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        this._config[key] = clone.getValueOrClone(val);
        return this;
    }
}