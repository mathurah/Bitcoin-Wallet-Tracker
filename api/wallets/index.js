const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Wallet Routes");

router.get("/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];

  try {
    wallets = await app.getWallets();
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});

router.delete("/remove/:id/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];
  console.log(req)
  try {
    wallets = await app.removeWallet(req.params.id);
    console.log(wallets)
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});

router.post("/add/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];
  console.log(req)
  try {
    wallets = await app.addWallet(req.body);

  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  console.log(wallets)
  res.json(wallets);
});

router.put("/edit/", async (req, res) => {
  const app = req.app.get("app");
  let wallets = [];
  try {
    wallets = await app.editWallet(req.body);
    console.log(wallets)
  } catch (e) {
    logger.error(e);
    return res.status(500).send();
  }
  res.json(wallets);
});


module.exports = router;