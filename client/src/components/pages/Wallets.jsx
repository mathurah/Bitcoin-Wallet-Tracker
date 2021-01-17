import React, { useState } from "react";
import PageLayout from "../templates/Page";
import Wallets from "../templates/Wallets";

export default function WalletsPage({ wallets, btcRate, ethRate }) {
  const [tabs] = useState(["Ethereum Wallets", "Bitcoin Wallets"]);

  return (
    <PageLayout tabs={tabs}>
      <Wallets wallets={wallets.filter(wallet => wallet.currency === "Ethereum")} rate={ethRate} />
      <Wallets wallets={wallets.filter(wallet => wallet.currency === "Bitcoin" )} rate={btcRate} />
    </PageLayout>
  );
}
