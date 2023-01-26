import Grid from "@mui/material/Grid"
import Timeline from "../components/timeline"

export default function Summary() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Timeline sport='Fußball' />
        </Grid>
        <Grid item xs={4}>
          <Timeline sport='Volleyball' />
        </Grid>
        <Grid item xs={4}>
          <Timeline sport='Unihockey' />
        </Grid>
      </Grid>
    </>
  );
}