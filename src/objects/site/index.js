import {abstract_object} from "../abstract_object";

//create an object of default values
let site_defaults = {
    id: null,
    name:null,
    config:{},
};
//override defaults from $site (if defined)
if( typeof $site === "object" ) site_defaults = {...site_defaults, ...$site};

/**
 *
 * Provides you with easy access to information about the current website (for multi-tenant applications)
 *
 * @type {{setName: (function(*): site), getConfigItem: (function(*): null), getName: (function(): *), populate: (function(*): site), setConfigItem: (function(*, *): site), name: null, setId: (function(*): site), getId: (function(): *), id: null, config: (site_defaults.config|{}), getConfig: (function(): *), setConfig: (function(*): site)}}
 */
export const site = {...abstract_object, ...{
    keys: ['id', 'name', 'config'],

    getId: function(){
        return this.id;
    },
    setId: function(id){
        this.id = id;
        return this;
    },

    //gets the website's name
    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
        return this;
    },

    //returns all config data
    getConfig: function(){
        return this.config;
    },
    //sets all config data using the provided object
    setConfig: function(config){
        this.config = config;
        return this;
    },

    //returns an individual config value or null if it's not defined
    getConfigItem: function(key){
        return typeof this.config[key] === "undefined" ? null : this.config[key];
    },
    //adds or updates a value in the config object
    setConfigItem: function(key, val){
        this.config.key = val;
        return this;
    }
}}.populate(site_defaults);