import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PriceInfo from "../molecules/Info/PriceInfo";
import WalletCard from "../molecules/WalletCard/WalletCard";
import WalletForm from "../molecules/Form/WalletForm"
import addWallet from "../../actions/addWallet"
import { Button } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
  },
  button: {
    margin: "2em",
  }
}));

export default function ({ wallets, rate }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid container>
    <Grid item xs={12}>
    <WalletForm edit = {false} submit = {addWallet} wallets={wallets}></WalletForm>
    </Grid>

    </Grid>
      <Grid container>
        <Grid item xs={12}>
          <PriceInfo />
          {wallets.map(wallet => <WalletCard wallets = {wallets} wallet={wallet} rate={rate} />)}
        </Grid>
      </Grid>
    </div>
  );
}
