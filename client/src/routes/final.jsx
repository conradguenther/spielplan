import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from "@mui/material/Grid"

import finale1 from '../../pic/finale1.png'
import finale2 from '../../pic/finale2.jfif'
import finale3 from '../../pic/finale3.jpg'
import flammen from '../../pic/flammen.jpg'

import Axios from 'axios'
import { useState, useEffect } from "react"

export default function Final() {

    const [results, setResults] = useState([])
    const [loadable, setLoadable] = useState(true)

    useEffect(() => {
        Axios.get('http://localhost:3001/getTeams').then((responce) => {
            setResults(responce.data.rows.map((team) => {
                return ({
                    teamName: team.teamname,
                    points: 0,
                    wins: 0,
                    loose: 0,
                    equal: 0,
                    pointsDone: 0,
                    pointsGot: 0,
                })
            })
            )
        })
    }, [])

    const loadResults = () => {
        setLoadable(false)
        Axios.get('http://localhost:3001/getMatches').then((responce) => {
            responce.data.rows.map((match, index) => {
                let copyResults = results

                if (match.points1 > match.points2) {
                    copyResults = results.map((result) => {
                        if (result.teamName == match.team1) {
                            result.pointsDone = result.pointsDone + match.points1
                            result.pointsGot = result.pointsGot + match.points2

                            result.points = result.points + 3
                            result.wins = result.wins + 1
                            console.log(result)
                            return (result)
                        }
                        if (result.teamName == match.team2) {
                            result.pointsDone = result.pointsDone + match.points2
                            result.pointsGot = result.pointsGot + match.points1

                            result.loose = result.loose + 1
                            return (result)
                        }
                        return (result)
                    })
                    setResults(copyResults.sort((a, b) => {
                        const comparePoints = b.points - a.points;
                        const hitsA = a.pointsDone - a.pointsGot;
                        const hitsB = b.pointsDone - b.pointsGot;
                        const compareHits = hitsB - hitsA;

                        return comparePoints || compareHits
                    }))
                }

                if (match.points1 < match.points2) {
                    copyResults = copyResults.map((result) => {
                        if (result.teamName == match.team2) {
                            result.pointsDone = result.pointsDone + match.points2
                            result.pointsGot = result.pointsGot + match.points1

                            result.points = result.points + 3
                            result.wins = result.wins + 1
                            return (result)
                        }
                        if (result.teamName == match.team1) {
                            result.pointsDone = result.pointsDone + match.points1
                            result.pointsGot = result.pointsGot + match.points2

                            result.loose = result.loose + 1
                            return (result)
                        }
                        return (result)
                    })
                    setResults(copyResults.sort((a, b) => {
                        const comparePoints = b.points - a.points;
                        const hitsA = a.pointsDone - a.pointsGot;
                        const hitsB = b.pointsDone - b.pointsGot;
                        const compareHits = hitsB - hitsA;

                        return comparePoints || compareHits
                    }))
                }

                if (match.points1 == match.points2) {
                    copyResults = copyResults.map((result) => {
                        if (result.teamName == match.team1) {
                            result.pointsDone = result.pointsDone + match.points1
                            result.pointsGot = result.pointsGot + match.points2

                            result.points = result.points + 1
                            result.equal = result.equal + 1
                            return (result)
                        }
                        if (result.teamName == match.team2) {
                            result.pointsDone = result.pointsDone + match.points2
                            result.pointsGot = result.pointsGot + match.points1

                            result.points = result.points + 1
                            result.equal = result.equal + 1
                            return (result)
                        }
                        return (result)
                    })
                    setResults(copyResults.sort((a, b) => {
                        const comparePoints = b.points - a.points;
                        const hitsA = a.pointsDone - a.pointsGot;
                        const hitsB = b.pointsDone - b.pointsGot;
                        const compareHits = hitsB - hitsA;

                        return comparePoints || compareHits
                    }))
                }
            })
        })
    }

    return (
        <>

            <div style={{ width: "100%", height: "70px" }}></div>

            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Card>
                        <CardHeader
                            title={"Feld 1"}
                            sx={{ backgroundColor: "silver" }}
                        />
                        <CardMedia
                            component="img"
                            height="280"
                            src={finale1}
                        />
                        {!loadable && <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${flammen})`, height: 300 }}>
                            <Typography gutterBottom variant="h4" sx={{ color: "white" }} align="center">
                                {results[0].teamName}
                            </Typography>
                            <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                vs.
                            </Typography>
                            <Typography gutterBottom variant="h4" sx={{ color: "white" }} align="center">
                                {results[1].teamName}
                            </Typography>
                        </CardContent>}
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardHeader
                            title={"Feld 2"}
                            sx={{ backgroundColor: "silver" }}
                        />
                        <CardMedia
                            component="img"
                            height="280"
                            src={finale2}
                        />
                        {!loadable && <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${flammen})`, height: 300 }}>
                            <Typography gutterBottom variant="h4" sx={{ color: "white" }} align="center">
                                {results[2].teamName}
                            </Typography>
                            <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                vs.
                            </Typography>
                            <Typography gutterBottom variant="h4" sx={{ color: "white" }} align="center">
                                {results[3].teamName}
                            </Typography>
                        </CardContent>}
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardHeader
                            title={"Feld 3"}
                            sx={{ backgroundColor: "silver" }}
                        />
                        <CardMedia
                            component="img"
                            height="280"
                            src={finale3}
                        />
                        {!loadable && <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: `url(${flammen})`, height: 300 }}>
                            <Typography gutterBottom variant="h4" sx={{ color: "white" }} align="center">
                                {results[4].teamName}
                            </Typography>
                            <Typography gutterBottom variant="h5" sx={{ color: "white" }}>
                                vs.
                            </Typography>
                            <Typography gutterBottom variant="h4" sx={{ color: "white" }} align="center">
                                {results[5].teamName}
                            </Typography>
                        </CardContent>}
                    </Card>
                </Grid>
            </Grid>
            <Button onClick={() => {loadResults()}} disabled={!loadable}>Finals Laden</Button>
        </>
    );
}