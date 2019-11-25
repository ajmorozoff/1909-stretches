/* eslint-disable no-extend-native */
// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):
Array.prototype.nextClbk = () => {
    let i = 0;
    return function() {
        console.log(this[i]);
        i++;
    }
}

Array.prototype.next = Array.prototype.nextClbk();
// no export statement required
