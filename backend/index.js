const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
const path = require('path')
const cors = require('cors')


let database
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.json())
app.use(cors())

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', '')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})


app.post('/signUp', (request, response) => {
    database.all('SELECT * FROM users where username=?', [request.body.username])
    .then((rows) => {
        if (rows.length === 0) {
            database.run('INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [request.body.username, request.body.password, request.body.firstname, request.body.lastname, null, null, request.body.birthyear, null, null]).then(() => {
            response.status(201).send('LYCKAT!')
                 
        })
        } else {
            response.status(401).send("Användare finns redan")
        }
    })
})

    


app.post('/login', (request, response) => {
    database.all('SELECT * FROM users WHERE username=? AND password=?', [request.body.username, request.body.password]).then(rows => {
        if (rows.length === 1) {
            console.log('yes')
            response.status(201).send()
        } else {
            console.log('no')
            response.status(401).send()
        }

    })
})

app.get('/posts', (request, response) => {
    database.all('SELECT * FROM posts').then(posts => {
        response.send(posts)
    })
})


sqlite.open({ driver: sqlite3.Database, filename: 'fitbuddy.sqlite' })
    .then((database_) => {
        database = database_
    })

app.listen(3000, () => {
    console.log('Server running on port 3000')
})