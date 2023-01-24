import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function Nav() {

    const navElements = [
        {
            text: 'Übersicht',
            href: '/overview',
            icon: <HomeIcon />
        },
        {
            text: 'Zusammenfassung',
            href: '/summary',
            icon: <RotateRightIcon />
        }
    ]

    const drawer = (
        <div>
            <List>
                {navElements.map((navElement) => (
                    <a href={navElement.href} style={{textDecoration: "none", color: "black"}}>
                        <ListItem key={navElement.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {navElement.icon}
                                </ListItemIcon>
                                <ListItemText primary={navElement.text} />
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    )

    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    "& .MuiPaper-root": {
                      width: 250
                    }
                  }}
            >
                {drawer}
            </Drawer>
        </>
    );
}