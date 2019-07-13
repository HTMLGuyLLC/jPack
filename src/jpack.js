import * as components from '../es/components';
import * as objects from '../es/objects';
import * as plugin_wrappers from '../es/plugin_wrappers';
import * as utilities from '../es/utilities';

/**
 * All jpack components are flattened out of their namespaces and set on window
 *
 * This means instead of calling jpack.objects.user.getId(), you can just call user.getId()
 *
 * Or let's say you pass a namespace like "jp", then you can call: jp.user.getId()
 *
 * Not recommended (atleast not without a namespace)
 *
 */
const goGlobal = function(namespace){
    namespace = typeof namespace === 'string' ? namespace+'.' : null;

    //loop through components, objects, plugin_wrappers, and utilities
    [components,objects,plugin_wrappers,utilities].forEach(function(object){
        //for each component within those
        for (var property in object) {
            //get actual properties
            if (object.hasOwnProperty(property)) {
                //set them on window so they're available globally
                //example: objects.user becomes window.user
                //usage after running this: user.getId()
                window[namespace+property] = object[property];
            }
        }
    });
};

export const jpack = {components, objects, plugin_wrappers, utilities};

//set jpack for the world to use and add the goGlobal method
global.jpack = {...jpack, ...{goGlobal: goGlobal}};