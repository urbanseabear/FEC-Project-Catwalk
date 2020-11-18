// rating bar
const ratingBar = (ratingCount, dataLength) => {
  return (ratingCount / dataLength).toString().slice(0, 3);
};

// recommend percentage
const recommended = (recommendCount, dataLength) => {
  return ((recommendCount / dataLength) * 100).toFixed(0);
};

// char rating
const charRating = (key) => {
  let charObj = {
    L: null,
    M: null,
    R: null,
  };

  if (key === 'Size') {
    charObj.L = 'Too small';
    charObj.M = 'Perfect';
    charObj.R = 'Too wide';
  }
  if (key === 'Width') {
    charObj.L = 'Too narrow';
    charObj.M = 'Perfect';
    charObj.R = 'Too wide';
  }
  if (key === 'Comfort') {
    charObj.L = 'Uncomfortable';
    charObj.M = 'Ok';
    charObj.R = 'Perfect';
  }
  if (key === 'Quality') {
    charObj.L = 'Poor';
    charObj.M = 'What I expected';
    charObj.R = 'Perfect';
  }
  if (key === 'Length') {
    charObj.L = 'Runs Short';
    charObj.M = 'Perfect';
    charObj.R = 'Runs long';
  }
  if (key === 'Fit') {
    charObj.L = 'Runs tight';
    charObj.M = 'Perfect';
    charObj.R = 'Runs long';
  }

  return charObj;
};

module.exports = {
  ratingBar,
  recommended,
  charRating,
};
