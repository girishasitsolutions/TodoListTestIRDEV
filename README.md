Front-End Developer Exercise BY IRDEV
=======================================
Scope: Need to developer a SPA for users can signup and signin with local storage.
Once user register and login to account, he can manage (CURD) todo items with title and description. filters with drug/drop should be there!

Current State: 
1. Sign-up, login and logout flow that asks for a username and password is completed, validation for unique email applied on new user register.
2. Login
3. Add & delete Todo items
4. Application UI are build on Bootstrap UI, User information store in redux store then apply persist for browser session, Users todo items store in redux store. 

Pending: 
1. Shorting, filters, drug-drop filter not completed due to short of time.

Work flow:

1. Inital System Requirment to install application
Node -v = 16.14.0
NPM -v = 8.3.1

2. Create App & Install dependency
npx create-react-app todo
npm install --save react-router-dom redux react-redux redux-persist
npm start 

3. Create folder structure (components, containers, actions, reducers) & components files (Login, Signup, Home, Logout)

4. Setup routes in App.js and link all components in proper way to navigate then apply Bootstrap UX on all then pages. Copy js & css bootstrap files in public/index.html
Copy bootstrap form element from offical website in signup, login page and create a view on Home page. Then replace tags according JSX syntax ex. class to className, <a> to <Link>. It took approx 3 hrs to create layouts

5. Now we have a working copy of website without user events so now we will decide for all possible actions so that we can build our application state management system. 

6. Create redux all required files in actions, containers, reducers folder then
create actions
Write Reducers
Link react and redux via containers
Apply store on APP/Main component using provider wrapper
Apply Persist Storage wrapper so that state can reload on page refersh.

7. Create forms using useForm hook for that "Install npm i react-hook-form --save" and install uuidv4 for unique ID

8. Signin users information manage via localStorage (variable name is token)

9. User information will store using userOperation reducers and todo list will manage by todoOperation. We assign userID in todo list to identify users todo list stored via todoOperation actions.

10. Project has been uploaded to a publicly accessible Github repo.
https://github.com/girishasitsolutions/TodoListTestIRDEV.git

11. To run build on server use "npm install -g serve" && "serve -s build". It will open development server and build project for testing.

Note: This application is build on window, on github node_modules & dependencies are not uploaded so please run "npm install" on root folder by downloading application. 