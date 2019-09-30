module.exports = function multiply(first, second) {
  let res = BigInt(first) * BigInt(second);
  return(res.toString());
}
