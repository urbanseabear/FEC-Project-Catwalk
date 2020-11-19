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
    charObj.L = 'Runs short';
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

// max characters
const maxCharLength = (text, max) => {
  let truncated = '';

  if (text.length > max) {
    truncated = `${text.substr(0, max)}...`;
    return truncated;
  } else {
    return text;
  }
};

// modal
const Modal = (key) => {
  let charObj = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
  };

  if (key === 'Size') {
    charObj.one = 'A size too small';
    charObj.two = '½ a size too small';
    charObj.three = 'Perfect';
    charObj.four = '½ a size too big';
    charObj.five = 'A size too wide';
  }
  if (key === 'Width') {
    charObj.one = 'Too narrow';
    charObj.two = 'Slightly narrow';
    charObj.three = 'Perfect';
    charObj.four = 'Slightly wide';
    charObj.five = 'Too wide';
  }
  if (key === 'Comfort') {
    charObj.one = 'Uncomfortable';
    charObj.two = 'Slightly uncomfortable';
    charObj.three = 'Ok';
    charObj.four = 'Comfortable';
    charObj.five = 'Perfect';
  }
  if (key === 'Quality') {
    charObj.one = 'Poor';
    charObj.two = 'Below average';
    charObj.three = 'What I expected';
    charObj.four = 'Pretty great';
    charObj.five = 'Perfect';
  }
  if (key === 'Length') {
    charObj.one = 'Runs short';
    charObj.two = 'Runs slightly short';
    charObj.three = 'Perfect';
    charObj.four = 'Runs slightly long';
    charObj.five = 'Runs long';
  }
  if (key === 'Fit') {
    charObj.one = 'Runs tight';
    charObj.two = 'Runs slightly tight';
    charObj.three = 'Perfect';
    charObj.four = 'Runs slightly long';
    charObj.five = 'Runs long';
  }

  return charObj;
};

module.exports = {
  ratingBar,
  recommended,
  charRating,
  maxCharLength,
  Modal,
};
