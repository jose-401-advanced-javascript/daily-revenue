const transactions = require('./data/transactions');

const dailyRevenue = (arr) => {
  const obj = {};
  arr.forEach(transaction => {
    const formattedTime = new Date (transaction.timestamp);
    const dateString = formattedTime.toUTCString();
    transaction.timestamp = dateString.slice(0, -13);

    !obj[transaction.timestamp] ? obj[transaction.timestamp] = transaction.price : obj[transaction.timestamp] += transaction.price;
  });
  return obj;
};

console.log(dailyRevenue(transactions));

module.exports = { dailyRevenue };