# Todo PERN App

Created the very common Todo App using PERN (PostgreSQL, Express, React, Node.js) stack.

---

## Run locally

In order to run locally, have the following installed:

- Node
- PostgreSQL

Create a .env file in the server folder that has the following:

```
PGUSER=
PGPASSWORD=
```

Run `npm install` in both the client and server folders

In PostgreSQL, use the commands in server/database.sql to create the **todopern** database and the **todos** table.

In separate terminals, run `npm start` in the server and then the client folders.

Navigate to http://localhost:3000 on the browser to view the application.
