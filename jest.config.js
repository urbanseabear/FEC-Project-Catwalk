let path = require('path');
let TEST_DIR = path.join(__dirname, '/Tests/setup.js');
let MOCK_DIR = path.join(__dirname, '/__mocks__/fileMock.js');

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': MOCK_DIR,
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [TEST_DIR],
};
