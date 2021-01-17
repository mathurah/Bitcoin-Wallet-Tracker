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

## Future
If there was more time, I would also consider isolating my functions and props into a `Context Provider` to avoid prop drilling and have a seamless transition between parent and child components.
