import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Axios from 'axios'
import { useState, useEffect } from "react"
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Summary() {
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
                    setResults(copyResults)
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
                    setResults(copyResults)
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
                    setResults(copyResults)
                }
            })
        })
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Team</StyledTableCell>
                            <StyledTableCell align="right">Punkteverhältnis</StyledTableCell>
                            <StyledTableCell align="right">Niederlagen</StyledTableCell>
                            <StyledTableCell align="right">Unentschieden</StyledTableCell>
                            <StyledTableCell align="right">Siege</StyledTableCell>
                            <StyledTableCell align="right">Punkte</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>

                    <TableBody>
                        {results.sort((a, b) => {
                            const comparePoints = b.points - a.points;
                            const hitsA = a.pointsDone - a.pointsGot;
                            const hitsB = b.pointsDone - b.pointsGot;
                            const compareHits = hitsB - hitsA;

                            return comparePoints || compareHits
                        }).map((row, index) => (
                            <StyledTableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.teamName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.pointsDone} : {row.pointsGot}</StyledTableCell>
                                <StyledTableCell align="right">{row.loose}</StyledTableCell>
                                <StyledTableCell align="right">{row.equal}</StyledTableCell>
                                <StyledTableCell align="right">{row.wins}</StyledTableCell>
                                <StyledTableCell align="right">{row.points}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={() => loadResults()} disabled={!loadable}>Ergebnisse Laden</Button>
        </>
    );
}