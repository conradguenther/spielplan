import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Grid from "@mui/material/Grid";
import { useState } from "react";


export default function Overview() {
  const [teams, setTeams] = useState([])

  const addTeam = (number, name) => {
    console.log("klick")
    setTeams([...teams, {
      number: number,
      name: name
    }])
    console.log(teams)
  }

  return (
    <>
      <h1>
        Das ist die Übersichtsseite
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              Card
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => { addTeam(1, 'Team1') }}>Hinzufügen</Button>
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