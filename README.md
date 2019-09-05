# Bottle Messages

* First run command 'npm install'
* Then run command 'npm start'
* Access API at http://localhost:8000/

# ENDPOINTS

With interest in time, all endpoints were designed to work in the browser, and wishfully there would be lots of api tests

* http://localhost:8000/api/lakes/ - GET all lakes
* http://localhost:8000/api/lakes/all/ - GET all lakes and extra data
* http://localhost:8000/api/lakes/:name/bottle/ - GET random bottle message (param :name === lake.name)
* http://localhost:8000/api/bottles/ - GET all bottles
* http://localhost:8000/api/bottles/delete/:id/ - GET delete a bottle (param :id === bottle.id)
* http://localhost:8000/api/bottles/add/ - GET add a new bottle - querystrings required eg.
    http://localhost:8000/api/bottles/add/?message=any message you want&lake_id=2

---

<!-- ## Setup
#### Installation
Clone the repo and run `yarn`
#### Starting the server
Run `yarn start`
#### Running the test(s)
Run `yarn test`

## Tasks
Use sqlite for storage, the package comes with an in-memory database and schema. You can find the schema in `db.js`. Create the following endpoints:

1. Get a random bottle message for a given lake (e.g. `GET /lakes/victoria/bottle` => `"Every never is now"`)
2. Create a new bottle message for a given lake
3. Remove a bottle
4. List lakes with their names, statistics and their bottles. The statistics should include the bottle count and average message length

A testing framework is included and an example. Use tests where you deem them appropriate. The descriptions are purposely vague, use your best judgment.

--- -->
