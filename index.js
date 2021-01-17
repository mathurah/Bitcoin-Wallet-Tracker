const express = require("express");
const bodyParser = require("body-parser");
const { Logger } = require("node-core-utils");
const { walletAPI } = require("./api");
const defaultConfig = require("./config");
const walletData = require("./config/wallets");
var fs = require('fs')

class App {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };
    this.logger = new Logger("Intern Assessment");
    this.logger.info(`Starting...`);
    this.walletData = walletData;
    this.init();
  }
  init() {
    this.logger.info("Initializing");
    this.logger.debug(this.config);
    this.environment = this.config.environment;

    this.server = express();
    this.server.set("trust_proxy", this.config.trustProxy);
    this.server.set("json spaces", this.config.jsonSpaces);
    this.server.use(bodyParser.urlencoded(this.config.urlencoded));
    this.server.use(bodyParser.json({ limit: this.config.uploadLimit }));
    this.server.set("app", this);
    this.server.use("/api", this.logRequest);
    this.server.use("/api/wallets", walletAPI);

    this.logger.info(`Initialized`);
  }

  start() {
    this.server.listen(this.config.port, () => {
      this.logger.info(`listening on http://localhost:${this.config.port}`);
    });
    this.logger.info(`started in ${this.environment}.`);
  }

  async exit() {
    this.logger.info(`exiting`);
    process.exit();
  }

  logRequest(req, res, next) {
    next();
  }

  getWallets() {
    this.logger.info(`getting wallets`)
    return new Promise((resolve) => {
      resolve(this.walletData);
    });
  }

  addWallet(wallet) {
    this.logger.info(`adding wallet`)
    let newData = this.walletData
    console.log(wallet)
    
    return new Promise((resolve) => {
      newData.push(wallet)
      console.log(newData)
      // newData = [{"name":"Wallet 1","address":"0x0000000000000000000000000000000000000000","currency":"Ethereum","balance":1e+21}]
      // fs.writeFile("config/wallets.json", JSON.stringify(newData), function(){console.log('done')})
      console.log(JSON.stringify(newData))
      resolve(newData);
    });
    
  }

  editWallet(wallet) {
    this.logger.info(`editing wallet`)
    let newData = this.walletData
    console.log(wallet)
    
    return new Promise((resolve) => {
      this.walletData.forEach((wall, i) => {if (wall.address === wallet.address) {newData[i] = wallet }})
      console.log(newData)
      // fs.writeFile("config/wallets.json", JSON.stringify(newData), function(){console.log('done')})
      console.log(JSON.stringify(newData))
      this.walletData = newData
      resolve(newData);
      
    });
    
  }


  removeWallet(walletAddress) {
    this.logger.info(`removing wallet`)
    let newData = []
    
    
    return new Promise((resolve) => {
      this.walletData.forEach((wall, i) => {if (wall.address !== walletAddress) {newData.push(JSON.parse(JSON.stringify(wall))) }})
      console.log(walletAddress)
      console.log(newData)
      // newData = [{"name":"Wallet 1","address":"0x0000000000000000000000000000000000000000","currency":"Ethereum","balance":1e+21}]
      // fs.writeFile("config/wallets.json", JSON.stringify(newData), function(){console.log('done')})
      this.walletData = newData
      console.log(JSON.stringify(newData))
      console.log(newData)
      resolve(newData);
    });
    
  }

}

if (require.main === module) {
  const app = new App();
  app.start();
} else {
  module.exports = App;
}
