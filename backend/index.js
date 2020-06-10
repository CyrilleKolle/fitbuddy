const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()
const path = require('path')
const cors = require('cors')
const { uuid } = require('uuidv4')



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

app.get('/loadProfile/:username', (request, response) => {
    database.all('SELECT * FROM users WHERE username=?', [request.params.username]).then(result => {
        response.send(result)
    })
})

app.put('/updateProfile', (request, response) => {
    database
        .all('SELECT 1 FROM users WHERE username=?', [request.body.username])
        .then((rows) => {
            if (rows.length === 1) {
                // Correct user name and password
                database
                    .run('UPDATE users SET email=?,phone=?, gender=?,city=? WHERE username=?', [
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