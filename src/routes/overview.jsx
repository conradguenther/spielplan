import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

import Grid from "@mui/material/Grid"
import { useState } from "react"
import { Divider } from '@mui/material'


export default function Overview() {
  const [teams, setTeams] = useState([])
  const [newTeam, setNewTeam] = useState({
    id: 0,
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
  const [numberOfTeams, setNumberOfTeams] = useState(0)

  const addTeam = () => {
    console.log("klick")
    setTeams([...teams, newTeam])
    console.log(teams)
  }

  return (
    <>
      <h1>
        Das ist die Übersichtsseite
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Stack direction="column" rowGap={1}>
                Neues Team:
                <TextField
                  fullWidth={true}
                  size = "small"
                  label="Teamname"
                  onChange={(event) =>
                    setNewTeam((newTeam) => ({
                      ...newTeam,
                      teamName: event.target.value,
                    }))
                  }
                  value={newTeam.teamName ?? ''}
                />
                <Divider />
                <TextField
                  fullWidth={true}
                  size = "small"
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
                  size = "small"
                  label="Spieler 2"
                  onChange={(event) =>
                    setNewTeam((newTeam) => ({
                      ...newTeam,
                      player2: event.target.value,
                    }))
                  }
                  value={newTeam.player2 ?? ''}
                />
                <TextField
                  fullWidth={true}
                  size = "small"
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
                  size = "small"
                  label="Spieler 4"
                  onChange={(event) =>
                    setNewTeam((newTeam) => ({
                      ...newTeam,
                      player4: event.target.value,
                    }))
                  }
                  value={newTeam.player4 ?? ''}
                />
                <TextField
                  fullWidth={true}
                  size = "small"
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
                  size = "small"
                  label="Spieler 6"
                  onChange={(event) =>
                    setNewTeam((newTeam) => ({
                      ...newTeam,
                      player6: event.target.value,
                    }))
                  }
                  value={newTeam.player6 ?? ''}
                />
                <TextField
                  fullWidth={true}
                  size = "small"
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
                  size = "small"
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
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => { addTeam() }}>Hinzufügen</Button>
            </CardActions>
          </Card>
        </Grid>
        {teams.map((team) => {
          return (
            <Grid item xs={4}>
              {team.name}
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}