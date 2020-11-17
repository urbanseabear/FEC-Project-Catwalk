// rating bar
const ratingBar = (ratingCount, dataLength) => {
  return (ratingCount / dataLength).toString().slice(0, 3);
};

// recommend percentage
const recommended = (recommendCount, dataLength) => {
  return ((recommendCount / dataLength) * 100).toFixed(0);
};

module.exports = {
  ratingBar,
  recommended,
};
