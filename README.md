### Firebase authentication with React Native scaffold

1. handles loading, loggedIn, loggedOut and error states
2. uses `firebase.auth().createUserWithEmailAndPassword(email, pass)`, `firebase.auth().signInWithEmailAndPassword(email, pass)`,
`firebase.auth().onAuthStateChanged` and `firebase.auth().signOut()` methods.
3. uses controlled input components for setting the state with user input
4. creates reusable generic styled components with children props
