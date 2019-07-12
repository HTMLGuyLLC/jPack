import {type_checks, strings} from "../utilities";

export const abstract_object = {
    //keys this object contains (used to automatically populate it when you run populate(data);
    //overwrite this in each extending class!
    keys: [],

    /**
     * populates the user object with the provided data
     *
     * @param data
     */
    populate: function(data){
        //validate the incoming data object and make sure it only contains these keys
        !type_checks.isDataObject(data, this.keys, false, true, true);

        //for each key that is set in the data object, set the value on this
        this.keys.forEach(function(key){
            if( typeof data[key] !== undefined ) this[strings.setter(key)](data[key]);
        });

        return this;
    }
};