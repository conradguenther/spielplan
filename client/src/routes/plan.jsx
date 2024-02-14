import * as React from 'react'
import Grid from "@mui/material/Grid"
import Sport from "../components/sport"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Snackbar from '@mui/material/Snackbar'

import Axios from 'axios'
import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"

export default function Plan() {
  const [full, setFull] = useState(false)
  const [activ, setActiv] = useState(false)
  const [teams, setTeams] = useState([])
  const [matches, setMatches] = useState([])
  const [open, setOpen] = useState(false)
  //Hol Teams einmalig
  useEffect(() => {
    Axios.get('http://localhost:3001/getTeams').then((responce) => {
      setTeams(responce.data.rows)
      if (responce.data.rows.length == 13) setFull(true)
    })
  }, [])

  const createTimeline = () => {
    setActiv(false)

    setMatches([])

    Axios.delete('http://localhost:3001/deleteMatches/').then(() => {
      console.log("Matches gelöscht")
      for (let i = 0; i < 13; i++) {
        for (let j = 1; j < 4; j++) {
          setMatches((matches) => ([...matches, {
            id: (i * 3 + j),
            team1: teams[i].teamname,
            team2: teams[((i + j) % 13)].teamname,
            points1: 0,
            points2: 0,
          }]))

          Axios.post('http://localhost:3001/addMatch', {
            id: (i * 3 + j),
            team1: teams[i].teamname,
            team2: teams[((i + j) % 13)].teamname,
            points1: 0,
            points2: 0,
          }).then(() => {
            console.log("Match gespeichert")
          })
        }
      }
    })
  }

  const loadTimeline = () => {
    Axios.get('http://localhost:3001/getMatches').then((responce) => {
      setMatches(responce.data.rows)
      console.log("Matches geladen")
    })
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Sport sport='Fußball' matches={matches} setMatches={setMatches} setOpen={setOpen} />
        </Grid>

        <Grid item xs={4}>
          <Sport sport='Völkerball' matches={matches} setMatches={setMatches} setOpen={setOpen} />
        </Grid>

        <Grid item xs={4}>
          <Sport sport='Volleyball' matches={matches} setMatches={setMatches} setOpen={setOpen} />
        </Grid>




      </Grid>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => { createTimeline() }}
          disabled={!full || !activ}
        >
          neuen Spielplan erstellen
        </Button>
        <FormControlLabel
          control={<Checkbox
            onChange={(event) =>
              setActiv(event.target.checked)
            }
            checked={activ}
          />}
          label="Sicher? Alter Spielplan geht verloren!"
        />
      </Stack>
      <Button
        onClick={() => { loadTimeline() }}
      >
        existierenden Spielplan laden
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => { setOpen(false) }}
        message="gespeichert"
      />
    </>
  );
}