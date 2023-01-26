import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Typography } from '@mui/material'

export default function Teamcard(props) {

    function deleteTeam() {
        props.setTeams(
            props.teams.filter((team) => team.id !== props.team.id)
        )
    }

    return (
        <>
            <Card sx = {{backgroundColor: '#B3C2C585'}}>
                <CardContent>
                    <Stack direction="column" rowGap={1}>
                        <Typography
                            sx={{ padding: '4px' }}
                            variant="overline"
                            display="block"
                        >
                            {props.team.teamName !== '' ? props.team.teamName : 'Teamname ???'}
                        </Typography>
                        <Divider />
                        <Stack direction="row" columnGap={1}>
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 1"
                                value={props.team.player1 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 2"
                                value={props.team.player2 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Stack>
                        <Stack direction="row" columnGap={1}>
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 3"
                                value={props.team.player3 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 4"
                                value={props.team.player4 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Stack>
                        <Stack direction="row" columnGap={1}>
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 5"
                                value={props.team.player5 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 6"
                                value={props.team.player6 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Stack>
                        <Stack direction="row" columnGap={1}>
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 7"
                                value={props.team.player7 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                fullWidth={true}
                                size="small"
                                label="Spieler 8"
                                value={props.team.player8 ?? ''}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Stack>
                    </Stack>
                </CardContent>
                <Divider />
                <CardActions>
                    <Button size="small" onClick={deleteTeam}>Löschen</Button>
                </CardActions>
            </Card>
        </>
    );
}