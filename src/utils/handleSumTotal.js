const handleSumTotal = (cart) => {
  const reducer = (accumulator, item) => accumulator + item.price * item.count;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
