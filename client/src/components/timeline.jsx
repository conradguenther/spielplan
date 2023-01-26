import { Typography } from '@mui/material';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Timeline(props) {

    return (
        <>
            <Card sx = {{backgroundColor: '#B3C2C585'}}>
                <CardContent>
                    <Typography variant='h3'>
                        {props.sport}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}