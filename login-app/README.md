# Login Page (React + Express)
This is a simple login app that runs on React as client side and Node/Express on the server that acts as an authentication service.

## Installation

1. Install Node.js (8 or above)
2. run `npm install`
3. In /client, `npm install`
4. In /client, copy `.env.example` to `.env`
5. run `npm run dev` for local development

By default, the client side should run on *http://localhost:5000* meanwhile the server should be running on *http://localhost:5001*.

## Tech
### Frontend `/client`
- Crafted with Create React App
- Reusable mini components (Buttons, InputField)
- CSS modules
- Enzyme + Jest unit tests

### Backend
- Server setup by Express/Node
- Mocked DB
- ES6 enabled

## How to test
To login as existing user to the app, go to db/db.js and get user credentials. Here are the samples:
```
{
  id: 1,
  email: 'ali@hotmail.com',
  password: 1234
},
{
  id: 2,
  email: 'muthu@yahoo.com',
  password: 1234
}
```

#### Unit test
Go to /client and run `npm test`
- components and login page are tested

## Notes
- this is just a programming test :P
- learnt about flow of form validation in React, setting up css modules, React functional components, arranging folder structure, how to concurrently run both React and Express server
- took about half day (12 hours) to complete the task
