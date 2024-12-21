# Express.js: Handling malformed JSON POST requests

This repository demonstrates a common error in Express.js applications where the server crashes when receiving malformed JSON in a POST request.  The code lacks proper error handling for missing or improperly structured request bodies.

## Bug Description

The provided `bug.js` file contains an Express.js app that handles POST requests to the `/users` endpoint. It expects a JSON payload with a `name` property.  However, if a request is made without a body or with an incorrectly formatted body, the server crashes due to a `TypeError` when attempting to access `user.name`.

## Solution

The `bugSolution.js` file provides a corrected version that includes error handling. It checks if the request body exists and has the necessary property before accessing it.  This prevents crashes and provides a more robust application.

## How to reproduce the bug

1. Run `bug.js` using `node bug.js`.
2. Send a POST request to `http://localhost:3000/users` without a body or with a body that doesn't contain a `name` property using a tool like `curl` or Postman.

## How to run the solution

1. Run `bugSolution.js` using `node bugSolution.js`.
2. Send the same requests as above. The server will now respond with appropriate error messages instead of crashing.