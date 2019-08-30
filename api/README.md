# ENDPOINTS

With interest in time, all endpoints were designed to work in the browser

* http://localhost:8000/api/lakes/ - GET all lakes
* http://localhost:8000/api/lakes/all/ - GET all lakes and extra data
* http://localhost:8000/api/lakes/:name/bottle/ - GET random bottle message (:name === lake.name)
* http://localhost:8000/api/bottles/ - GET all bottles
* http://localhost:8000/api/bottles/delete/:id/ - GET delete a bottle (:id === bottle.id)
* http://localhost:8000/api/bottles/add/ - GET add a new bottle - querystrings required eg.
    http://localhost:8000/api/bottles/add/?id=1&message=any message you want&lake_id=2
