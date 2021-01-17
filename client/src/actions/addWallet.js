export default async (walletName, walletAddress, currency, balance) => {
  console.log('add')
    let wallets = [];
    let url = "api/wallets/add"
    let wallet = {
      name: walletName, address: walletAddress, currency, balance
    }
    console.log(wallet)
    try {
        fetch(url, {  
            method: 'POST',  
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(wallet)
        })
        .then(function (data) {  
          console.log(data)
            wallets = data;
        })  
        .catch(function (error) {  
          console.log('Request failure: ', error);  
        });
    } catch (e) {
      return console.log(e);
    }
    
    return wallets;
  };
  
  