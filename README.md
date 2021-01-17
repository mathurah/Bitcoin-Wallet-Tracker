# Mathurah's section: Solution Explanation

Adding in some of my own documentation since documentation is a very important part of development to explain my thought process for under developers to understand the decisions I made.

First of all, thank you for this challenge! I got involved in the crypto space a few years ago developing a start-up to allow students to trade with virtual dollars. This was a great refresher. My background: I traditionally have more front-end development experience, but this motivated me to learn and apply the full-stack concepts I've been learning.

I also used the new React hooks! 

## Front-end
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/702b6093-af8a-4c6e-9f3d-99980e13f99f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201026T030625Z&X-Amz-Expires=86400&X-Amz-Signature=6fc52f91e9d3ed2176c2311881fc1e1046e49f3805975bee8e253c738503d849&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)
- I used the Material UI Forms to create the front-end and also focused on user experience. I ensured that users can **edit**, **cancel edits**, **add new wallets**, and **delete**. The page reloads automatically when the buttons are clicked to show the changes. 
- I ensured that editing the address is `disabled` when editing an existing wallet. I'm assuming that the address is the element that will always be unique to all addresses that are added, similar to an `id`. This ensures they are editing that same wallet.
- Users cannot add wallets that have the same address as those that already exist
- In the small time frame, I was able to develop a good user experience as well. 
- I ensured good code usability, only changing a few elements based on conditions such as `edit` using the same form as `addWallet` at the top. 

## Back-end
- I commented out this line `fs.writeFile("config/wallets.json", JSON.stringify(newData), function(){console.log('done')})` however can be used if we wanted to write directly to the JSON file in the future

## Testing
- I did not need to test any additional cases since I ensured to account for them in the front-end such as the editing with the same Id, and the remove button only renders on the cards on top of the list of wallets that already exist, so that does not need to be accounted for. I was able to think of the edgecases already in my front-end however if there was more time, I would be able to think of additional cases. 

## The future
Due to the time consraint, I was not able to complete the logger task however I'm proud to have implemented the core functionality of the application well in a short amount of time. Thanks so much and would love the opportunity to innovate on the UNICEF team. 

If there was more time, I would also consider isolating my functions and props into a `Context Provider` to avoid prop drilling and have a seamless transition between parent and child components.

--------------------------
It is not required to complete every part of this assessment. Go as far as you can in the allotted time.

1. Fork the repository
2. Clone your forked repository
3. `npm install && cd client; npm install`
4. Create a new branch `unicef-assesment`
5. To start the server: `node index.js`
6. To start the client: `cd client; npm run start`

## Front End

1. Create a new Molecule - WalletCard.jsx
2. Add your WalletCard component to the Wallets template
3. Add one WalletCard for each wallet of the ‘wallets’ prop.
4. Display all of the wallet properties on your WalletCard
   1. Use react material components or existing atoms/molecules.
   2. Properly format amounts for ETH/BTC.
   3. Display & format USD amounts using the `rate` prop.
5. Filter the wallets array on the Wallets page to display only the Ethereum wallets on the Ethereum tab and Bitcoin on the Bitcoin tab.
6. Create a form to add/edit wallets.
7. Add an ‘Add New Wallet’ button to the Wallets Template
8. Create three new actions:
   1. addWallet.js
      Using fetch, POST the new data to the backend
   2. editWallet.js
      Using fetch, PUT the updated data to the backend
   3. removeWallet.js
      Using fetch, DELETE wallet data from the backend
9. Add ‘Edit Wallet’ & ‘Remove Wallet’ buttons to your WalletCard
10. Wire up your new actions.

### Expected Results:

1. WalletCards are displayed on page when the app opens
2. Add/Remove/Edit Wallets
3. WalletCards update as the Wallet details change on the backend.

## Back End

1. Complete the `logRequest` middleware to log each request path and the user’s ip address.
   1. Use the existing Logger library
   2. Create a new logger object named ‘logReqest’
   3. Log to the `info` transport
2. Add new endpoints to the `/wallets` route for POST, PUT and DELETE
3. Create three new application methods:
   1. addWallet
   2. updateWallet
   3. deleteWallet
4. Wire up your endpoints to the application.
5. Make the unit tests pass when you run `npm run test`
6. Add additional unit tests for the edge cases in your new code.

## Submission

Once you complete the assignment, please make your repository private and invite `mehranhydary` and `tenthirtyone` to the repository so that your solution can be reviewed by UNICEF.
