function isEqual(obj1, obj2) {
<<<<<<< HEAD
  let answer = true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  Object.keys(obj1).forEach(key => {
    if (obj1[key] !== obj2[key]) {
      answer = false;
    }
  })

  return answer;

=======
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
}

module.exports = { isEqual };
