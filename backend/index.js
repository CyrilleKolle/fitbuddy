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

const { uuid } = require('uuidv4')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })



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

app.delete('/logOut', (request, response) => {
    database.run('DELETE FROM tokens WHERE 1').then(() => {
        response.status(200).send()
    })
})

app.get('/', (request, response) => {
    // TODO: Make token extraction nicer (probably use NPM package)
    const token =
        request.get('Cookie') === undefined
            ? null
            : request.get('Cookie').split('=')[1]

    database.all('SELECT * FROM tokens WHERE token=?', [token]).then((rows) => {
        if (rows.length === 1) {
            response.send({ username: rows[0].username })
        } else {
            response.send({ username: null })
        }
    })
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
            const token = uuid()

            database
                .run('INSERT INTO tokens VALUES (?, ?)', [
                    request.body.username,
                    token
                ])
                .then(() => {
                    response.set('Set-Cookie', `token=${token}; Path=/`)
                    response.send('Du har loggat in!')
                    console.log('yes')
                    response.status(201).send()
                })

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

app.get('/loadProfile/:username', (request, response) => {
    database.all('SELECT * FROM users WHERE username=?', [request.params.username]).then(result => {
        response.send(result)
    })
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {

})

app.put('/updateProfile', (request, response) => {
    database
        .all('SELECT 1 FROM users WHERE username=?', [request.body.username])
        .then((rows) => {
            if (rows.length === 1) {
                // Correct user name and password
                database
                    .run('UPDATE users SET email=?,phone=?,gender=?,city=? WHERE username=?', [
                        request.body.email,
                        request.body.phone,
                        request.body.gender,
                        request.body.city,
                        request.body.username
                    ])
                    .then(() => {
                        response.status(201).send('DET FUNKAR GÖTT!')
                        console.log(response);
                    })

            } else {
                response.status(401).send('Tyvärr du är en noob!')
            }
        })

})


sqlite.open({ driver: sqlite3.Database, filename: 'fitbuddy.sqlite' })
    .then((database_) => {
        database = database_

        database.run(
            'CREATE TABLE IF NOT EXISTS tokens (username TEXT, token TEXT)'
        )
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
