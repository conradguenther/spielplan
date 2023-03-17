import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Grid from "@mui/material/Grid"

import { v4 as uuid } from 'uuid'
import Axios from 'axios'
import { useState, useEffect } from "react"

import Teamcard from '../components/teamcard'


export default function Overview() {
  const [teams, setTeams] = useState([])
  const [newTeam, setNewTeam] = useState({
    id: '',
    teamname: '',
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    player5: '',
    player6: '',
    player7: '',
    player8: '',
  })

  //Hol Teams einmalig
  useEffect(() => {
    Axios.get('http://localhost:3001/getTeams').then((responce) => {
      setTeams(responce.data.rows)
    })
  }, [])


  const addTeam = () => {

    setTeams([...teams, newTeam])

    Axios.post('http://localhost:3001/addTeam', newTeam).then(() => {
      console.log("Team gespeichert")
    })

    setNewTeam({
      id: '',
      teamname: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      player7: '',
      player8: '',
    })
  }

  return (
    <>
      <Grid container spacing={1}>
        {teams.length != 13 ?
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
                        teamname: event.target.value,
                        id: uuid().slice(0, 8),
                      }))
                    }
                    value={newTeam.teamname ?? ''}
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
                    onClick={() => {
                      addTeam()
                    }}
                    disabled={teams.length >= 13 || !newTeam.teamname}
                  >
                    Hinzufügen
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          : ''
        }
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