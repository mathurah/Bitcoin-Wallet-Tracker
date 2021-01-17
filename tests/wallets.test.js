const App = require("../");
const expect = require("chai").expect;

describe("App", async (accounts) => {
  let app;

  beforeEach(async () => {
    app = new App();
  });

  describe("getWallets", () => {
    it("has two default wallets", async () => {
      const wallets = await app.getWallets();

      expect(wallets.length).to.be.equal(2);
    });
  });

  describe("addWallet", () => {
    it("creates a new wallet", async () => {
      await app.addWallet({name: "Chamod", address: "0x00000000000000011",currency: "Bitcoin",balance: 100000000})
      const wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(3);
    });
  });

  describe("editWallet", () => {
    
    const newName = "New Wallet Name";
    it("edits a wallet", async () => { 
      let wallet = (await app.getWallets())[0]
      console.log(wallet)
      await app.editWallet({name: newName, address: wallet.address, currency: wallet.currency, balance: wallet.balance})
      expect((await app.getWallets())[0].name).to.be.equal(newName);
    });
  });

  describe("deleteWallet", () => {
    it("deletes a wallet", async () => {
      let wallets = await app.getWallets();
      await app.removeWallet(wallets[0].address)
      wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(2);
    });
  });
});