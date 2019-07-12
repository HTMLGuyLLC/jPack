/**
 * HTML DOM helpers
 *
 * @type {{getDomElements: (function(*=, *=): Array), getDomElement: dom.getDomElement, exists: (function(*=): number), multipleExist: (function(*=): number)}}
 */
export const dom = {
    /**
     * Converts a provided string, jQuery dom object, etc into a single native DOM object
     *
     * @param el
     * @param error_on_none - throw an error if none exist
     * @param error_on_multiple - throw an error if more than 1 exists
     * @returns Element|HTMLDocument|null
     */
    getDomElement: function(el, error_on_none, error_on_multiple){
        el = this.getDomElements(el, error_on_none);

        if( el.length > 1 ){
            if( error_on_multiple ) throw "Too many DOM elements found in getDomElement for "+JSON.stringify(el);
            return null;
        }

        return el[0];
    },

    /**
     * Converts a provided string, jQuery dom object, etc into an array of native DOM elements
     *
     * @param el (string, object, array, jQuery object, etc)
     * @param error_on_none - throw an error if no elements were found, default: false
     * @returns []
     */
    getDomElements: function(el, error_on_none){
        //default to false
        error_on_none = typeof error_on_none === undefined ? false : error_on_none;

        //default to empty
        let el_array = [];

        //if not provided or doesn't exist
        if( typeof el === undefined || !el ){
            //do nothing, default is empty array
        }
        //if a string was provided
        else if (typeof el === 'string') {
            //convert the NodeList returned by querySelectorAll into an array
            el_array = Array.from(document.querySelectorAll(el));
        }
        //if a jquery object was provided
        else if( el instanceof jQuery ){
            //if it contains anything
            if( el.length ){
                //get all the elements in an array
                el_array = el.toArray();
            }
        }
        //if it's an Element or HTMLDocument (a singular DOM element)
        else if( el instanceof Element || el instanceof HTMLDocument ){
            //add to the array
            el_array.push(el);
        }
        //otherwise, what the heck did you pass? Throw error...
        else {
            throw "Invalid value provided to getDomElements: "+JSON.stringify(el);
        }

        if( !el_array.length && error_on_none ){
            throw "Failed to get array of DOM elements for "+JSON.stringify(el);
        }

        //hopefully it's safe to assume the originally provided el is a singular native DOM object
        return el_array;
    },

    /**
     * Returns true if the provided element exists
     *
     * Pass anything you want, it uses getDomElements
     *
     * @param el
     * @returns {number}
     */
    exists: function(el){
        return this.getDomElements(el).length;
    },

    /**
     * Returns true if there are multiple instances of the provided element
     *
     * Pass anything you want, it uses getDomElements
     *
     * @param el
     * @returns {boolean}
     */
    multipleExist: function(el){
        return this.getDomElements(el).length > 1;
    },
};
