# Silent Crash with Large JSON POST Request in Express.js

This repository demonstrates a subtle bug in an Express.js application where the server crashes silently when receiving a large JSON payload exceeding the default request body size limit.  The issue is characterized by a lack of error messages and server unresponsiveness.

## Bug Description

A POST request with a JSON body exceeding the default body-parser limit causes the Express.js server to crash without any visible error messages in the console.  This makes debugging difficult as there's no indication of the cause.

## Solution

The solution involves setting the `limit` option in `express.json()` to explicitly define the maximum allowed request body size.  This prevents the silent crash by handling the oversized request appropriately (e.g., returning a 413 error).

## How to Reproduce the Bug

1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Run `node bug.js` to start the server.
4. Send a large JSON POST request to `/user` (use a tool like Postman).  The server will likely crash without logging an error.

## How to Run the Solution

1. Run `node bugSolution.js` to start the server with the request body size limit increased.
2. Repeat step 4 above.  The server should now return a 413 error instead of crashing.