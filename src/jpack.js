import * as components from './components';
import * as objects from './objects';
import * as plugin_wrappers from './plugin_wrappers';
import * as utilities from './utilities';

export const jpack = {components, objects, plugin_wrappers, utilities};

//set it for the world to use
global.jpack = jpack;