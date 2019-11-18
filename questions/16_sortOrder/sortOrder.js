/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sortKey, returnKey) {
    let sorted = [];
    arr.sort((a, b) => {return a[sortKey] < b[sortKey] ? -1 : 1});
    arr.forEach(obj => sorted.push(obj[returnKey]));
    return sorted;
}

module.exports = { sortOrder };
