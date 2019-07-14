/**
 * Methods for performing common string manipulations
 *
 */
export const strings = {
    /**
     * Creates a getter method name from a string
     *
     * Example: strings.getter('name') returns 'getName'
     *
     * @param string
     * @returns {string}
     */
    getter: function(string){
        return 'get'+this.ucfirst(string);
    },

    /**
     * Creates a setter method name from a string
     *
     * Example: strings.setter('name') returns 'setName'
     *
     * @param string
     * @returns {string}
     */
    setter: function(string){
        return 'set'+this.ucfirst(string);
    },

    /**
     * Adds ucfirst() functionality to JS (like PHP)
     *
     * @param string
     * @returns {*|string}
     */
    ucfirst: function(string){
        return string && string[0].toUpperCase()+string.slice(1);
    }
};