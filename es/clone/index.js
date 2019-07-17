/**
 *
 * @param val
 */
function getValueOrClone(val){
    //if not defined or null, return right away
    if( typeof val === "undefined" || val === null ) return null;

    //if object (and already ruled out null)
    if( typeof val === 'object' ){
        return {...val};
    }
    //if array
    if( Array.isArray(val) ){
        return [...val];
    }
    //if function
    if( typeof val === "function" ){
        //as far as I can tell, reassigning the variable that stored the function doesn't change anything and a function can't be modified, right?
        //so I think we're ok returning the reference to the original and foregoing any cloning in here
    }

    //otherwise it's a value that's passed by value (string, int, bool, number, etc)
    return val;
}

export const clone = {getValueOrClone};