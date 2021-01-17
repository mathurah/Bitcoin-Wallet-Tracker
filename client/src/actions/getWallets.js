export default async () => {
  let res, wallets;
  try {
    res = await fetch("/api/wallets");
    wallets = await res.json();
    console.log(wallets)
  } catch (e) {
    return console.log(e);
  }
  return wallets;
};
