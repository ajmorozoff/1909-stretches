/* eslint-disable guard-for-in */
/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let zipped = {};
  for (let obj in arguments) {
    Object.keys(obj).forEach(key => {
      if (zipped[key]) {
        zipped[key] += obj[key];
      }
      else {
        zipped[key] = obj[key];
      }
    })
  }
  return zipped;
}

module.exports = { zip };
