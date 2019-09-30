const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let returned = {
    id: 0,
    total: 0
  }
  let obj = {}
  let max = 0;

  sales.forEach(x => {
    if (obj[x.productId]) {
      obj[x.productId] += x.amount;
      if (obj[x.productId] > max) {
        max = obj.productId;
      }
    }
  })
  return obj;

}

module.exports = { bestSales, sales };
