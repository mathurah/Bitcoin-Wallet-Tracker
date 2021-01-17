export default async (address) => {
    let wallets = [];
    let res;
    let url = "api/wallets/remove/" + address
    try {
      res = await fetch(url, {method: 'DELETE'});
      wallets = await res.json();
    } catch (e) {
      return console.log(e);
    }
    console.log(wallets)
    return wallets;
    // try {
    //     fetch(url, {  
    //         method: 'DELETE',  
    //     })
    //     .then(function (data) {  
    //         console.log(data)
    //         wallets = data;
    //         console.log(wallets)
    //     })  
    //     .catch(function (error) {  
    //       console.log('Request failure: ', error);  
    //     });
    // } catch (e) {
    //   return console.log(e);
    // }
    // console.log(wallets)
    // return wallets;
  };
  
  