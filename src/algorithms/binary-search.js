'use strict';

function binarySearch(array,valueToSearchFor) {
    //fail first if any of these conditions are true:
    if (array.length < 1 ||
        valueToSearchFor > array[array.length - 1].id ||
        valueToSearchFor < array[0].id ||
        valueToSearchFor === null ||
        valueToSearchFor === undefined) {
        return -1;
    }
    //now we know the value would fit somewhere inside this array, so start the loop to search for it.
    var start = 0;
    var end = array.length;
    while (start < end) {
        let mid = Math.floor((end + start) / 2);
        if (array[mid].id == valueToSearchFor) return mid;
        else if (array[mid].id < valueToSearchFor) start = mid + 1;
        else end = mid;
    }
    return -1;
}

module.exports = binarySearch;