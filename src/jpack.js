import {dom} from "../es/dom";
import {events} from "../es/events";
import {XHRForm, FormFromURL} from "../es/forms";
import {navigation} from "../es/navigation";
import {request} from "../es/request";
import {Site} from "../es/site";
import {strings} from "../es/strings";
import {type_checks} from "../es/type_checks";
import {User} from "../es/user";

/**
 * Call this function to tie all jpack components directly to the window for global use
 *
 * This means instead of calling jpack.strings.ucfirst(), you can just call strings.ucfirst()
 *
 * This is not recommended because jpack's names may be too generic and conflict.
 *
 * If you want to set a different namespace than jpack, that's fine, but not using a namespace at all can be risky
 *
 * For example:
 *
 * setGlobal("$") - then you can call: $.strings.ucfirst()
 * setGlobal("_") - then you can call: _.strings.ucfirst()
 * setGlobal("PeasAreGross") - then you can call: PeasAreGross.strings.ucfirst()
 *
 */
const setGlobal = function(namespace){
    namespace = typeof namespace === 'string' ? namespace : null;

    //loop through components, objects, plugin_wrappers, and utilities
    [components,objects,plugin_wrappers,utilities].forEach(function(object){
        //for each component within those
        for (var property in object) {
            //get actual properties
            if (object.hasOwnProperty(property)) {
                //set them on window so they're available globally
                //set them on window so they're available globally
                if( namespace ){
                    if( typeof window[namespace] === "undefined" ){ window[namespace] = {}; }
                    window[namespace][property] = self[property];
                }else{
                    window[property] = self[property];
                }
            }
        }
    });
};

export const jpack = {dom, events, XHRForm, FormFromURL, navigation, request, Site, strings, type_checks, User, setGlobal: setGlobal};

//set jpack globally so that it can be used anywhere
global.jpack = jpack;