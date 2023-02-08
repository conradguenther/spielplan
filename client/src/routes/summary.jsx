import Grid from "@mui/material/Grid"
import Sport from "../components/sport"

import Axios from 'axios'
import { useState, useEffect } from "react"

export default function Summary() {
  const [teams, setTeams] = useState([])

  //Hol Teams einmalig
  useEffect(() => {
    Axios.get('http://localhost:3001/getTeams').then((responce) => {
      setTeams(responce.data.rows)
    })
  }, [])


  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Sport sport='Fußball' />
        </Grid>
        <Grid item xs={4}>
          <Sport sport='Volleyball' />
        </Grid>
        <Grid item xs={4}>
          <Sport sport='Unihockey' />
        </Grid>
      </Grid>
    </>
  );
}