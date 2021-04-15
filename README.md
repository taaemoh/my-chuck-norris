# Frontmen coding challenge

This test was built using Typescript + React + Redux stack with react hooks

Project was setup manually without any use of any boilerplate, this includes setting up the following:  webpack, babel, typescript, react, redux, redux thunk, dev server, Jest, Enzyme, react router, es lint



The project is divided into 4 main folders: `app`, `components`,`test` and `typescript`
- The `app` folder contains the app setup
- The `components` folder is the folder that contains the different components (functionalities) of the project.
- The `test` folder contains the tests.
- The `typescript` folder includes all the type defeinitions

# commands
to run the project please clone it and then install the dependencies using
```
npm install

```

to run the project
```
npm start

```

to run the tests
```
npm run test

```


After running `npm start` you can navigate to http://localhost:5000 to browse the application

  
# Architecture and design patterns
- Redux library was used for global state management.
- Redux Store caching (persistance) is implemented, and favorite jokes are preserved across page refreshes.
- React hooks were used instead of class components as this is the officially recommended approach to build new React components. 
- The application is 100% responsive and supports both desktop and mobile devices.
- Global application error handling is provided by implementing a `ReactBoundary`. This component will catch unexpected errors and display a user friendly error screen. In a real production system this class can be used to log errors, or trigger incident management systems so that the tech team can be notified immediately about any unexpected errors.
- A 404 error page was introduced as a fallback inside the react router, so if the user tries to access any urls that are not valid, this 404 page will be displayed.
- Component composition was used mainly inside `JokeListItem` to break the inner parts of it into separate re-arrangable components, This pattern allows the component user to control the layout of the joke list item. This will allow us to build items with different layouts without changing the `JokeListItem` or introducing new props. For example, a good use case for this pattern would be to design a list item with a different layout than the rest of the items and then using it as a featured joke in the list.
- A new API endpoint `http://localhost:3000/myapi/myjokes` was added in the API gateway project, this endpoint, fetches jokes from Chuck norris API and sends it back to the user. This endpoint accepts a querystring `?count=` parameter to specify the number of jokes that the client wants to fetch, so we can use the same endpoint to fetch 10 jokes, and to fetch 1 solo joke, no parameter validation was implemented in the backend just for the sake of this assignment, but of course for real production systems, a proper validation should be implemented in the backend.
- Redux tyle guide was followed as much as possible https://redux.js.org/style-guide/style-guide
- Some fancy SVG icons were downloaded from https://www.flaticon.com/


# Screenshots
- ![GitHub Logo](/resources/readme-photos/desktop.png)
- ![GitHub Logo](/resources/readme-photos/mobile-404.png)
- ![GitHub Logo](/resources/readme-photos/mobile.png)
- ![GitHub Logo](/resources/readme-photos/tablet.png)
- ![GitHub Logo](/resources/readme-photos/error.png)