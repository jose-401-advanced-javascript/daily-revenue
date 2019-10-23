const dailyRevenue = (arr) => {
  const obj = {};
  arr.forEach(transaction => {
    const formattedTime = new Date (transaction.timestamp);
    const dateString = formattedTime.toUTCString().slice(0, -13);
    transaction.timestamp = new Date(dateString).toDateString();

    !obj[transaction.timestamp] ? obj[transaction.timestamp] = transaction.price : obj[transaction.timestamp] += transaction.price;
  });
  return obj;
};

module.exports = { dailyRevenue };