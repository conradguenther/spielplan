import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';

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

    const volleyList = [0, 18, 9, 27, 13, 4, 31, 22, 8, 26, 35, 17]
    const footList = [6, 24, 15, 33, 1, 28, 19, 10, 5, 23, 32, 14]
    const völkerList = [12, 30, 3, 21, 25, 16, 7, 34, 2, 20, 29, 11]

    useEffect(() => {
        Axios.get('http://localhost:3001/getTeams').then((responce) => {
            setResults(responce.data.rows.map((team) => {
                return ({
                    teamName: team.teamname,
                    points: 0,
                    wins: 0,
                    loose: 0,
                    equal: 0,
                    volleyDone: 0,
                    volleyGot: 0,
                    footDone: 0,
                    footGot: 0,
                    völkerDone: 0,
                    völkerGot: 0
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
                let game = ""
                if (völkerList.includes(index)) game = "völker"
                if (volleyList.includes(index)) game = "volley"
                if (footList.includes(index)) game = "foot"

                if (match.points1 > match.points2) {
                    copyResults = results.map((result) => {
                        if (result.teamName == match.team1) {
                            if (game == 'völker') {
                                result.völkerDone = result.völkerDone + match.points1
                                result.völkerGot = result.völkerDone + match.points2
                            }
                            if (game == 'volley') {
                                result.volleyDone = result.volleyDone + match.points1
                                result.volleyGot = result.volleyGot + match.points2
                            }
                            if (game == 'foot') {
                                result.footDone = result.footDone + match.points1
                                result.footGot = result.footGot + match.points2
                            }
                            result.points = result.points + 3
                            result.wins = result.wins + 1
                            console.log(result)
                            return (result)
                        }
                        if (result.teamName == match.team2) {
                            if (game == 'völker') {
                                result.völkerDone = result.völkerDone + match.points2
                                result.völkerGot = result.völkerDone + match.points1
                            }
                            if (game == 'volley') {
                                result.volleyDone = result.volleyDone + match.points2
                                result.volleyGot = result.volleyGot + match.points1
                            }
                            if (game == 'foot') {
                                result.footDone = result.footDone + match.points2
                                result.footGot = result.footGot + match.points1
                            }
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
                            if (game == 'völker') {
                                result.völkerDone = result.völkerDone + match.points2
                                result.völkerGot = result.völkerDone + match.points1
                            }
                            if (game == 'volley') {
                                result.volleyDone = result.volleyDone + match.points2
                                result.volleyGot = result.volleyGot + match.points1
                            }
                            if (game == 'foot') {
                                result.footDone = result.footDone + match.points2
                                result.footGot = result.footGot + match.points1
                            }
                            result.points = result.points + 3
                            result.wins = result.wins + 1
                            return (result)
                        }
                        if (result.teamName == match.team1) {
                            if (game == 'völker') {
                                result.völkerDone = result.völkerDone + match.points1
                                result.völkerGot = result.völkerDone + match.points2
                            }
                            if (game == 'volley') {
                                result.volleyDone = result.volleyDone + match.points1
                                result.volleyGot = result.volleyGot + match.points2
                            }
                            if (game == 'foot') {
                                result.footDone = result.footDone + match.points1
                                result.footGot = result.footGot + match.points2
                            }
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
                            if (game == 'völker') {
                                result.völkerDone = result.völkerDone + match.points1
                                result.völkerGot = result.völkerDone + match.points2
                            }
                            if (game == 'volley') {
                                result.volleyDone = result.volleyDone + match.points1
                                result.volleyGot = result.volleyGot + match.points2
                            }
                            if (game == 'foot') {
                                result.footDone = result.footDone + match.points1
                                result.footGot = result.footGot + match.points2
                            }
                            result.points = result.points + 1
                            result.equal = result.equal + 1
                            return (result)
                        }
                        if (result.teamName == match.team2) {
                            if (game == 'völker') {
                                result.völkerDone = result.völkerDone + match.points2
                                result.völkerGot = result.völkerDone + match.points1
                            }
                            if (game == 'volley') {
                                result.volleyDone = result.volleyDone + match.points2
                                result.volleyGot = result.volleyGot + match.points1
                            }
                            if (game == 'foot') {
                                result.footDone = result.footDone + match.points2
                                result.footGot = result.footGot + match.points1
                            }
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
                            <StyledTableCell align="right">Volleyball</StyledTableCell>
                            <StyledTableCell align="right">Fußball</StyledTableCell>
                            <StyledTableCell align="right">Völkerball</StyledTableCell>
                            <StyledTableCell align="right">Niederlagen</StyledTableCell>
                            <StyledTableCell align="right">Unentschieden</StyledTableCell>
                            <StyledTableCell align="right">Siege</StyledTableCell>
                            <StyledTableCell align="right">Punkte</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {results.sort((a, b) => b.points - a.points).map((row, index) => (
                            <StyledTableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <StyledTableCell component="th" scope="row">
                                    {row.teamName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.volleyDone} : {row.volleyGot}</StyledTableCell>
                                <StyledTableCell align="right">{row.footDone} : {row.footGot}</StyledTableCell>
                                <StyledTableCell align="right">{row.völkerDone} : {row.völkerGot}</StyledTableCell>
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
            {/* <Snackbar
                open={true}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Versuch"
            /> */}
        </>
    );
}