/* eslint-disable no-underscore-dangle */
const CONTRACT = artifacts.require('../contracts/Token.sol');
const fs = require('fs');

module.exports = function(deployer) {
  const name = 'Token';
  const symbol = 'KL';

  deployer.deploy(CONTRACT, name, symbol).then(() => {
    if (CONTRACT._json) {
      fs.writeFile('deployedABI', JSON.stringify(CONTRACT._json.abi), err => {
        if (err) throw err;
        console.log('파일에 ABI 입력 성공');
      });
    }

    fs.writeFile('deployedAddress', CONTRACT.address, err => {
      if (err) throw err;
      console.log('파일에 주소 입력 성공');
    });
  });
};
