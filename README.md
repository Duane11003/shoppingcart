# Overview
Create a RESTful shopping-cart API that allows clients to manage end-user shopping experience. Connect a UI to the API to allow users to add items to their shopping carts, display the price and empty the shopping cart.

## Tech Used
1. React
2. Node/Express
3. PostgresSql
4. Webpack
5. HTML/CSS

## How to Use
1. Fork the repo (or download the zip file) and open it with your IDE. 
2. Install all dependencies 
```javascript
npm install
```
3. Open your terminal and run the following command:  
```javascript
npm run dev
```

You will spin up a webpack dev server that's connected to a Node.js backend that queries a Postgres database. The UI consists of 4 fruit buttons (each labeled with a fruit ID) and a clear button to empty the shopping cart. As you click each button, the UI will update with both the individual fruit's price total, and the overall grand total. 
