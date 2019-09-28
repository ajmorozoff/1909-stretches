function isEqual(obj1, obj2) {
  let answer = true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    answer = false;
    return answer;
  }
  Object.keys(obj1).forEach(key => {
    if (obj1[key] !== obj2[key]) {
      answer = false;
    }
  })

  return answer;

}

module.exports = { isEqual };
