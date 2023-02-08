import { Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Card from '@mui/material/Card'
import Grid from "@mui/material/Grid"
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'

export default function sport(props) {

    return (
        <>
            <Card sx={{ backgroundColor: '#B3C2C585' }}>
                <CardContent>
                    <Typography variant='h3'>
                        {props.sport}
                    </Typography>
                    <Timeline
                        sx={{
                            padding: 0,
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}
                    >

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ paddingLeft: 0 }} color="text.secondary">
                                <Grid container spacing={1} alignItems="center">
                                    <Grid
                                        item xs={6}
                                        sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                    >
                                        <div>Teamnummer 1</div>
                                        <div style={{ fontWeight: '700' }}>vs.</div>
                                        <div>Ein anderes Team</div>
                                    </Grid>
                                    <Grid item xs={6} sx={{ overflow: 'hidden' }}>
                                        <Stack spacing={1} direction="row">
                                            <TextField
                                                type="number"
                                                size="small"
                                                sx={{ width: '50%' }}
                                            // onChange={(event) =>
                                            //     setNewTeam((newTeam) => ({
                                            //         ...newTeam,
                                            //         teamname: event.target.value,
                                            //         id: uuid().slice(0, 8),
                                            //     }))
                                            // }
                                            // value={newTeam.teamname ?? ''}
                                            />
                                            <Typography sx={{ paddingTop: 1 }}>:</Typography>
                                            <TextField
                                                type="number"
                                                size="small"
                                                sx={{ width: '50%' }}
                                            // onChange={(event) =>
                                            //     setNewTeam((newTeam) => ({
                                            //         ...newTeam,
                                            //         teamname: event.target.value,
                                            //         id: uuid().slice(0, 8),
                                            //     }))
                                            // }
                                            // value={newTeam.teamname ?? ''}
                                            />
                                            <IconButton aria-label="delete" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                                <CheckIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color="success" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ paddingLeft: 0}}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid
                                        item xs={6}
                                        sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                    >
                                        <div>Teamnummer 1</div>
                                        <div style={{ fontWeight: '700' }}>vs.</div>
                                        <div>Ein anderes Team</div>
                                    </Grid>
                                    <Grid item xs={6} sx={{ overflow: 'hidden' }}>
                                        <Stack spacing={1} direction="row">
                                            <TextField
                                                type="number"
                                                size="small"
                                                sx={{ width: '50%' }}
                                            // onChange={(event) =>
                                            //     setNewTeam((newTeam) => ({
                                            //         ...newTeam,
                                            //         teamname: event.target.value,
                                            //         id: uuid().slice(0, 8),
                                            //     }))
                                            // }
                                            // value={newTeam.teamname ?? ''}
                                            />
                                            <Typography sx={{ paddingTop: 1 }}>:</Typography>
                                            <TextField
                                                type="number"
                                                size="small"
                                                sx={{ width: '50%' }}
                                            // onChange={(event) =>
                                            //     setNewTeam((newTeam) => ({
                                            //         ...newTeam,
                                            //         teamname: event.target.value,
                                            //         id: uuid().slice(0, 8),
                                            //     }))
                                            // }
                                            // value={newTeam.teamname ?? ''}
                                            />
                                            <IconButton aria-label="delete" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                                <CheckIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ paddingLeft: 0 }} color="text.secondary">
                                <Grid container spacing={1} alignItems="center">
                                    <Grid
                                        item xs={6}
                                        sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                    >
                                        <div>Teamnummer 1</div>
                                        <div style={{ fontWeight: '700' }}>vs.</div>
                                        <div>Ein anderes Team</div>
                                    </Grid>
                                    <Grid item xs={6} sx={{ overflow: 'hidden' }}>
                                        <Stack spacing={1} direction="row">
                                            <TextField
                                                type="number"
                                                size="small"
                                                sx={{ width: '50%' }}
                                            // onChange={(event) =>
                                            //     setNewTeam((newTeam) => ({
                                            //         ...newTeam,
                                            //         teamname: event.target.value,
                                            //         id: uuid().slice(0, 8),
                                            //     }))
                                            // }
                                            // value={newTeam.teamname ?? ''}
                                            />
                                            <Typography sx={{ paddingTop: 1 }}>:</Typography>
                                            <TextField
                                                type="number"
                                                size="small"
                                                sx={{ width: '50%' }}
                                            // onChange={(event) =>
                                            //     setNewTeam((newTeam) => ({
                                            //         ...newTeam,
                                            //         teamname: event.target.value,
                                            //         id: uuid().slice(0, 8),
                                            //     }))
                                            // }
                                            // value={newTeam.teamname ?? ''}
                                            />
                                            <IconButton aria-label="delete" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                                <CheckIcon />
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </CardContent>
            </Card>
        </>
    );
}