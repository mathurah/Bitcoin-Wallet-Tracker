import React, { useState } from 'react';
import { Card, Button, CardContent, CardActions } from '@material-ui/core';
import addWallet from '../../../actions/addWallet'
import editWallet from '../../../actions/editWallet'
import removeWallet from '../../../actions/removeWallet'
import WalletForm from '../Form/WalletForm'

export default function WalletCard({ wallet, rate, wallets }) {
    const [edit, setEdit] = useState(false)
    const editForm = () => {
        return (
            <>
            <CardContent>
                <WalletForm wallet  = {wallet} edit = {true} submit = {editWallet} wallets = {wallets}></WalletForm>
            </CardContent>
            <CardActions>
            <Button color="secondary" onClick={() => setEdit(false)} variant="contained">Cancel Edit</Button>
            </CardActions>
            </>
        );
    }

    
      
    const cardContent = () => {
        return (
            <>
                <CardContent>
                    <h1><strong>{wallet.name}</strong></h1>
                    <p><strong>Address: {wallet.address}</strong></p>
                    <p><strong>Currency: {wallet.currency} </strong></p>
                    <p><strong>Balance:  {wallet.balance}</strong> </p>
                    <p><strong>USD: {(wallet.balance * rate).toFixed(2)}</strong></p>
                </CardContent>
                <CardActions>
                    <Button onClick={() => setEdit(true)} variant="contained">Edit Wallet</Button>
                    <Button color="secondary" onClick={() => {removeWallet(wallet.address);window.location.reload(false)}} variant="contained">Remove Wallet</Button>
                </CardActions>
            </> 
        );
    };

    return (
        <Card>
            {!edit ? cardContent() : editForm()}
        </Card>
    );
}


