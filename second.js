/* Please order by Total
Develop a program which produces ordered array of sales. Input: array of objects with the
following structure {amount: 10000, quantity: 10}. Output: new array of ordered sales. Array
element structure should be: {amount: 10000, quantity: 10, Total: 100000}, where Total =
amount * quantity. Please order by Total and note that input array shall remain intact. */

const sales = [
  { amount: 10000, quantity: 10 },
  { amount: 5000, quantity: 5 },
  { amount: 20000, quantity: 7 },
];

// Create a new array of sales objects with total property
const salesWithTotal = sales.map(sale => ({...sale, total: sale.amount * sale.quantity}));

// Sort the sales array by total property in descending order
const orderedSales = salesWithTotal.slice().sort((a, b) => b.total - a.total);

console.log(orderedSales);

console.log(sales);

/* Create a new array of ordered sales
const orderedSales = sales.map(sale => {
  const total = sale.amount * sale.quantity;
  return {
    amount: sale.amount,
    quantity: sale.quantity,
    total: total
  };
}).sort((a, b) => b.total - a.total); */
