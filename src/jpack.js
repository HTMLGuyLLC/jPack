import {dom} from "../es/dom";
import {events} from "../es/events";
import {XHRForm, FormFromURL} from "../es/forms";
import {navigation} from "../es/navigation";
import {request} from "../es/request";
import {Site} from "../es/site";
import {strings} from "../es/strings";
import {type_checks} from "../es/type_checks";
import {User} from "../es/user";
import {ToggleOnMobile} from "../es/toggle/ToggleOnMobile";
import {clone} from "../es/clone";

//create a key:val object of all components
const components = {
    dom:dom,
    events:events,
    XHRForm:XHRForm,
    FormFromURL:FormFromURL,
    navigation:navigation,
    request:request,
    Site:Site,
    strings:strings,
    type_checks:type_checks,
    User:User,
    ToggleOnMobile:ToggleOnMobile,
    clone: clone,
};

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

    //for each function within events
    for (const key in components) {
        //set them on window so they're available globally
        if( namespace ){
            if( typeof window[namespace] === "undefined" ){ window[namespace] = {}; }
            window[namespace][key] = components[key];
        }else{
            window[key] = components[key];
        }
    }
};

//extend components to include the setGlobal method
export const jpack = {...components, ...{setGlobal: setGlobal}};

//set jpack globally so that it can be used anywhere
global.jpack = jpack;