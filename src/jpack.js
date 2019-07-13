import * as components from './components';
import * as objects from './objects';
import * as plugin_wrappers from './plugin_wrappers';
import * as utilities from './utilities';

/**
 * Not recommended, but makes things simple. Every component in jpack is set on window and readily available globally
 *
 * This means instead of calling jpack.objects.user.getId(), you can just call user.getId()
 */
const goGlobal = function(){
    //loop through components, objects, plugin_wrappers, and utilities
    [components,objects,plugin_wrappers,utilities].forEach(function(object){
        //for each component within those
        for (var property in object) {
            //get actual properties
            if (object.hasOwnProperty(property)) {
                //set them on window so they're available globally
                //example: objects.user becomes window.user
                //usage after running this: user.getId()
                window[property] = object.property;
            }
        }
    });
};

export const jpack = {components, objects, plugin_wrappers, utilities};

//set jpack for the world to use and add the goGlobal method
global.jpack = {...jpack, ...{goGlobal: goGlobal}};