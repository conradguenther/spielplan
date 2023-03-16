import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from "@mui/material/Grid"

import Axios from 'axios'
import { useState, useEffect } from "react"

export default function Final() {

    const [results, setResults] = useState([{
        teamName: "",
        points: 0,
    },
    {
        teamName: "",
        points: 0,
    },
    {
        teamName: "",
        points: 0,
    },
    {
        teamName: "",
        points: 0,
    },
    {
        teamName: "",
        points: 0,
    },
    {
        teamName: "",
        points: 0,
    }])
    const [loadable, setLoadable] = useState(true)

    useEffect(() => {
        Axios.get('http://localhost:3001/getTeams').then((responce) => {
            setResults(responce.data.rows.map((team) => {
                return ({
                    teamName: team.teamname,
                    points: 0,
                })
            })
            )
        }) 
    }, [])

    const loadResults = () => {
        setLoadable(false)

        Axios.get('http://localhost:3001/getMatches').then((responce) => {
            responce.data.rows.map((match) => {
                let copyResults = results

                if (match.points1 > match.points2) {
                    copyResults = results.map((result) => {
                        if (result.teamName == match.team1) {
                            result.points = result.points + 3
                            console.log(result)
                            return (result)
                        }
                        return (result)
                    })
                    setResults(copyResults.sort((a, b) => b.points - a.points))
                }

                if (match.points1 < match.points2) {
                    copyResults = copyResults.map((result) => {
                        if (result.teamName == match.team2) {
                            result.points = result.points + 3
                            return (result)
                        }
                        return (result)
                    })
                    setResults(copyResults.sort((a, b) => b.points - a.points))
                }

                if (match.points1 == match.points2) {
                    copyResults = copyResults.map((result) => {
                        if (result.teamName == match.team1) {
                            result.points = result.points + 1
                            return (result)
                        }
                        if (result.teamName == match.team2) {
                            result.points = result.points + 1
                            return (result)
                        }
                        return (result)
                    })
                    setResults(copyResults.sort((a, b) => b.points - a.points))
                }
            })
        })
        
    }

    return (
        <>
       
        <div style={{width: "100%", height: "70px"}}></div>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Card sx={{ height: 600 }}>
                        <CardHeader
                            title="Spiel um Platz 1"
                            sx={{backgroundColor:"silver"}}
                        />
                        <CardMedia
                            component="img"
                            height="280"
                            image="https://bilder.fernsehserien.de/sendung/hr/v19883.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Spiel um Platz 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {results[0].teamName} vs. {results[1].teamName}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 600 }}>
                        <CardHeader
                            title="Spiel um Platz 2"
                            sx={{backgroundColor:"silver"}}
                        />
                        <CardMedia
                            component="img"
                            height="280"
                            image="data:image/jpeg;base64,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"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {results[2].teamName} vs. {results[3].teamName}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card sx={{ height: 600 }}>
                        <CardHeader
                            title="Spiel um Platz 3"
                            sx={{backgroundColor:"silver"}}
                        />
                        <CardMedia
                            component="img"
                            height="280"
                            image="https://de.web.img2.acsta.net/pictures/23/02/20/08/52/5451043.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {results[4].teamName} vs. {results[5].teamName}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Button onClick={() => loadResults()} disabled={!loadable}>Finals Laden</Button>
        </>
    );
}