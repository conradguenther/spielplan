const express = require("express")
const app = express()

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
  console.log("erster erfolg")
})

//Insert Teams
app.post('/addTeam', (req, res) => {
    const id = req.body.id
    const teamname = req.body.teamname
    const player1 = req.body.player1
    const player2 = req.body.player2
    const player3 = req.body.player3
    const player4 = req.body.player4
    const player5 = req.body.player5
    const player6 = req.body.player6
    const player7 = req.body.player7
    const player8 = req.body.player8

    
    pool.query("insert into Teams (id, teamname, player1, player2, player3, player4, player5, player6, player7, player8) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
    [id, teamname, player1, player2, player3, player4, player5, player6, player7, player8],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
        res.send('Team gespeichert')
        }
    })
})

//Delete a Team
app.delete('/deleteTeam/:id', (req, res) => {
  const id = req.params.id
  pool.query("DELETE FROM Teams WHERE id = $1",
  [id],
  (err, result) => {
      if (err) {
          console.log(err)
      } else {
      res.send('Team gelöscht')
      }
  })
})

//Get the Teams
app.get('/getTeams', (req, res) => {
    pool.query('SELECT * FROM teams ORDER BY "id"', (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//Insert Matches
app.post('/addMatch', (req, res) => {
    const id = req.body.id
    const team1 = req.body.team1
    const team2 = req.body.team2
    const points1 = req.body.points1
    const points2 = req.body.points2
    
    pool.query("insert into Matches (id, team1, team2, points1, points2) values ($1, $2, $3, $4, $5)",
    [id, team1, team2, points1, points2],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
        res.send('Matche gespeichert')
        }
    })
})

//Delete all Matches
app.delete('/deleteMatches', (req, res) => {
    pool.query("DELETE FROM Matches",
    [],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
        res.send('alle Matches gelöscht')
        }
    })
  })

//Update Matches
app.put('/updateMatch/:id', (req, res) => {
    const id = req.params.id
    const points1 = req.body.points1
    const points2 = req.body.points2

    pool.query("UPDATE Matches SET points1 = $1, points2 = $2 WHERE id = $3",
    [points1, points2, id],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
        res.send('Team gelöscht')
        }
    })
  })

//Get the Matches
app.get('/getMatches', (req, res) => {
    pool.query('SELECT * FROM matches ORDER BY id', (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Server running on Port 3001")
})