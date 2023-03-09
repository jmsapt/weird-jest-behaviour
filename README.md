# Weird Jest Behaviour

`node import.js` recognizes there error
`npm test` does not recognize the error, but runs 'correctly'

This code has a mistake in line 1 of `import.js` (it is importing from `./export`, when it should be `./export.js`.

This code does not run with node (nor should it), as `./export` does not exist. But when I run jest (that calls the function that should break), it works as if I `./export` (that doesn't exist is  `./export.js`.
