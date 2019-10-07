/* eslint-disable guard-for-in */

function zip(objs) {
  return objs.reduce((current, sum) => {
    for (const key in current) {
      sum[key] += current[key];
    }
  }, {})
}

module.exports = { zip };
