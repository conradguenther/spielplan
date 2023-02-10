import { Button, Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Card from '@mui/material/Card'
import Grid from "@mui/material/Grid"
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'

import { useState } from "react"
import Axios from 'axios'

export default function sport(props) {

    const [current, setCurrent] = useState(0)
    let list = []
    if (props.sport == 'Volleyball') list = [0, 18, 9, 27, 13, 4, 31, 22, 8, 26, 35, 17]
    if (props.sport == 'Fußball') list = [6, 24, 15, 33, 1, 28, 19, 10, 5, 23, 32, 14]
    if (props.sport == 'Unihockey') list = [12, 30, 3, 21, 25, 16, 7, 34, 2, 20, 29, 11]

    const handleNewScore = (currentID, position, newValue) => {
        let newMatches = []
        if (position == 1) {
            newMatches = props.matches.map((match) => {
                if (match.id == currentID) {
                    const updatedMatch = {
                        ...match,
                        points1: newValue,
                    };

                    return updatedMatch;
                }
                return match;
            });
        }
        if (position == 2) {
            newMatches = props.matches.map((match) => {
                if (match.id == currentID) {
                    const updatedMatch = {
                        ...match,
                        points2: newValue,
                    };

                    return updatedMatch;
                }
                return match;
            });
        }

        props.setMatches(newMatches);
    }

    const goOn = () => {
        if(current < 11) setCurrent(current+1)
    }
    const goBack = () => {
        if(current > 0) setCurrent(current-1)
    }

    const safeMatches = (matchID) => {
        const update = props.matches.find(match => match.id == matchID)

        Axios.put('http://localhost:3001/updateMatch/'+matchID, update).then(() => {
            console.log("Match gespeichert")
          })
    }


    return (
        <>
            <Card sx={{ backgroundColor: '#B3C2C585' }}>
                <CardContent>
                    <Typography variant='h3'>
                        {props.sport}
                    </Typography>
                    <Button onClick={() => goOn()}>
                        Nächste Spiel
                    </Button>
                    <Button onClick={() => goBack()}>
                        Zurück
                    </Button>
                    <Timeline
                        sx={{
                            padding: 0,
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}
                    >
                        {props.matches.length == 36 ? (list.map((i, index) => {
                            console.log(index, current)
                            return (
                                <TimelineItem key={props.matches[i].id}>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            variant={current == index ? "filled" : 'outlined'}
                                            color={current == index ? "success" : 'secondary'}
                                        />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent
                                        sx={{ paddingLeft: 0 }}
                                        color={current == index ? "text.primary" : "text.secondary"}
                                    >
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid
                                                item xs={6}
                                                sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                            >
                                                <div>{props.matches[i].team1}</div>
                                                <div style={{ fontWeight: '700' }}>vs.</div>
                                                <div>{props.matches[i].team2}</div>
                                            </Grid>
                                            <Grid item xs={6} sx={{ overflow: 'hidden' }}>
                                                <Stack spacing={1} direction="row">
                                                    <TextField
                                                        type="number"
                                                        size="small"
                                                        sx={{ width: '50%' }}
                                                        onChange={(event) =>
                                                            handleNewScore(props.matches[i].id, 1, event.target.value)
                                                        }
                                                    defaultValue = {props.matches[i].points1}
                                                    />
                                                    <Typography sx={{ paddingTop: 1 }}>:</Typography>
                                                    <TextField
                                                        type="number"
                                                        size="small"
                                                        sx={{ width: '50%' }}
                                                        onChange={(event) =>
                                                            handleNewScore(props.matches[i].id, 2, event.target.value)
                                                        }
                                                        defaultValue = {props.matches[i].points2}
                                                    />
                                                    <IconButton 
                                                        sx={{ paddingLeft: 0, paddingRight: 0 }}
                                                        onClick = {() => {safeMatches(props.matches[i].id, index)}}
                                                        disabled={!(current == index)}
                                                    >
                                                        <CheckIcon/>
                                                    </IconButton>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        })) 
                        : ('')}
                    </Timeline>
                </CardContent>
            </Card>
        </>
    );
}