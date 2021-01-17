import React, {useState, Fragment} from 'react';
import { MenuItem, InputLabel, Select, FormControl, TextField, Button} from '@material-ui/core';

export default function WalletForm(props) {
    const {edit, wallets, submit, wallet} = props
    const [walletName, setWalletName] = useState(wallet ? wallet.name : '');
    const [walletAddress, setWalletAddress] = useState(wallet ? wallet.address : '');
    const [currency, setCurrency] = useState(wallet ? wallet.currency : "Bitcoin");
    const [balance, setBalance] = useState(wallet ? wallet.balance : 0);

    const handleSubmit = e =>  {
        let taken = 0
        wallets.forEach(wall => {if (wall.address === walletAddress) {taken++}})
        if (taken < 1 || (taken < 2 && edit)) {submit(walletName, walletAddress, currency, balance);}
        taken = 0
        
    };
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <div style = {{display: "flex", flexDirection: "column" , padding: "1em"}}>
        <FormControl required>
           <TextField id="wallet-name" label="Wallet Name" onChange={e => setWalletName(e.target.value)} value = {walletName} required/>
        </FormControl>
        <FormControl required>
           <TextField fullWidth = {true} id="address" label="Wallet Address"onChange={e => setWalletAddress(e.target.value)} value = {walletAddress} disabled = {edit }required/>
           </FormControl>
           <FormControl required>
           <TextField id="select" label="Currency"  select onChange={e => setCurrency(e.target.value)} value = {currency} defaultValue = "Bitcoin">
               <MenuItem value="Bitcoin">Bitcoin</MenuItem>
               <MenuItem value="Ethereum">Ethereum</MenuItem>
           </TextField>
           </FormControl>
           <FormControl required>
           <TextField id="balance" label="balance"onChange={e => setBalance(e.target.value)}  value = {balance} required/>
           </FormControl>
           <Button style={{margin: "1em"}} type="submit"  variant="contained">Add Wallet</Button>
           </div>
    </form>
    </>
    );
}
