const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
const path = require('path')
const cors = require('cors')
const moment = require('moment'),
    ws = require('ws')

const webSocketServer = new ws.Server({ port: 3002 })

const webSockets = []

function getTimeObject() {
    return { time: moment().format('HH:mm:ss') }
}


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

app.get('/posts/:postId', (request, response) => {
    database.all('SELECT * FROM posts WHERE postId=?', [request.params.postId]).then(posts => {
        response.send(posts)
    })
})

app.put('/attends', (request, response) => {
    database.all('UPDATE posts SET counter=? WHERE postId=?', [request.body.counter, request.body.postId
    ]).then(attends => {
        response.send(attends)
    })
})

app.delete('/remove', (request, response) =>{
    database.all('DELETE FROM posts WHERE postId=?', [request.body.postId])
    .then(remove => {
        response.send(remove)
    })
})

app.get('/posts', (request, response) => {
    database.all('SELECT * FROM posts WHERE city=?', [request.params.city]).then(filterCities => {
        response.send(filterCities)
    })
})


sqlite.open({ driver: sqlite3.Database, filename: 'fitbuddy.sqlite' })
    .then((database_) => {
        database = database_
    })

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
// webSocketServer.on('connection', (webSocket) => {
//     console.log('Client connected')

//     webSocket.send(JSON.stringify(getTimeObject()))

//     webSocket.on('message', (data) => {
//         console.log(data)
//     })

//     webSocket.on('close', () => {
//         console.log('Client disconnected')
//         webSockets.splice(webSockets.indexOf(webSocket), 1)
//     })

//     webSockets.push(webSocket)
// })

// setInterval(() => {
//     webSockets.forEach((webSocket) => {
//         webSocket.send(JSON.stringify(getTimeObject()))
//     })
// }, 1000)
