# SWAPI-CLIENT

## scope

- 'wiki' on characters, planets, and star ships using The Star Wars API (https://swapi.dev/) in a SPA with a favourites list feature.
- React with some state management library
- Each character should have a 'Favourite' button which allows the user to save this character as a favourite. Displaying these favourites somehow and the ability to remove them again from the list (and from the character page) should be implemented.
- Storing this data in memory (via some state management) or local storage is fine. It only needs to persist for the current session.

- The homepage should include a list of characters (the first page of characters in the `/people/` response from the API is sufficient).
- Each character should then have their profile page where you can see their bio and links to their home planet and star ships pages.
- Linked planets and star ships should also have a 'bio' page.
- You should be able to search for characters, plants, and star ships.
- Implement client-side caching (LRU) of requests so you are not making API calls you have previously made
- Loading states should be taken into account.
- Handling errors with correct messages when/if the API call fails.

---

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
