import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Grid from "@mui/material/Grid"

import Axios from 'axios'
import { useState } from "react"

import Teamcard from '../components/teamcard'
import { Typography } from '@mui/material'


export default function Overview() {
  const [teams, setTeams] = useState([])
  const [newTeam, setNewTeam] = useState({
    id: 1,
    teamName: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
    player6: '',
    player7: '',
    player8: '',
    points: 0,
  })
  const [numberOfTeams, setNumberOfTeams] = useState(1)

  const addTeam = () => {
    setTeams([...teams, newTeam])
    setNumberOfTeams(numberOfTeams + 1)

    Axios.post('http://localhost:3001/addTeam', {
      teamName: newTeam.teamName,
      player1: newTeam.player1,
      player2: newTeam.player2,
      player3: newTeam.player3,
      player4: newTeam.player4,
      player5: newTeam.player5,
      player6: newTeam.player6,
      player7: newTeam.player7,
      player8: newTeam.player8
    }).then(() => {
      console.log("Team gespeichert")
    })

    setNewTeam({
      id: numberOfTeams + 1,
      teamName: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      player7: '',
      player8: '',
      points: 0,
    })
  }

  const saveTeams = () => {

  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Card sx={{ backgroundColor: '#E0E3DDbb' }}>
            <CardContent>
              <Stack direction="column" rowGap={1}>
                <TextField
                  fullWidth={true}
                  size="small"
                  label="Neues Team"
                  onChange={(event) =>
                    setNewTeam((newTeam) => ({
                      ...newTeam,
                      teamName: event.target.value,
                    }))
                  }
                  value={newTeam.teamName ?? ''}
                />
                <Divider />
                <Stack direction="row" columnGap={1}>
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 1"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player1: event.target.value,
                      }))
                    }
                    value={newTeam.player1 ?? ''}
                  />
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 2"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player2: event.target.value,
                      }))
                    }
                    value={newTeam.player2 ?? ''}
                  />
                </Stack>
                <Stack direction="row" columnGap={1}>
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 3"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player3: event.target.value,
                      }))
                    }
                    value={newTeam.player3 ?? ''}
                  />
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 4"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player4: event.target.value,
                      }))
                    }
                    value={newTeam.player4 ?? ''}
                  />
                </Stack>
                <Stack direction="row" columnGap={1}>
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 5"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player5: event.target.value,
                      }))
                    }
                    value={newTeam.player5 ?? ''}
                  />
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 6"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player6: event.target.value,
                      }))
                    }
                    value={newTeam.player6 ?? ''}
                  />
                </Stack>
                <Stack direction="row" columnGap={1}>
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 7"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player7: event.target.value,
                      }))
                    }
                    value={newTeam.player7 ?? ''}
                  />
                  <TextField
                    fullWidth={true}
                    size="small"
                    label="Spieler 8"
                    onChange={(event) =>
                      setNewTeam((newTeam) => ({
                        ...newTeam,
                        player8: event.target.value,
                      }))
                    }
                    value={newTeam.player8 ?? ''}
                  />
                </Stack>
              </Stack>
            </CardContent>
            <Divider />
            <CardActions>
              <Stack direction="row" columnGap={1}>
                <Button
                  size="small"
                  onClick={() => { addTeam() }}
                  disabled={teams.length >= 12}
                >
                  Hinzufügen
                </Button>
                <Typography
                  variant="overline"
                  display="block"
                  sx={{ color: 'red' }}
                >
                  {teams.length >= 12 ?
                    <Button
                      size="small"
                      onClick={() => { saveTeams() }}
                      disabled={teams.length != 12}
                      sx={{ color: "green" }}
                    >
                      Speicher
                    </Button>
                    : ''}
                </Typography>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        {teams.map((team) => {
          return (
            <Grid
              item xs={3}
              key={team.id}
            >
              <Teamcard
                team={team}
                teams={teams}
                setTeams={setTeams}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}