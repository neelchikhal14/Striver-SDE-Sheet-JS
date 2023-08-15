// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0,
    min = prices[0];
  const pricesLen = prices.length;

  for (let i = 0; i < pricesLen; i++) {
    currentProfit = prices[i] - min;
    if (currentProfit > maxProfit) maxProfit = currentProfit;

    if (prices[i] < min) min = prices[i];
  }

  return maxProfit;
};
