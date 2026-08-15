import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router';

    function Navbar() {
        return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                    gap: 1,
                }}
                >
                    <LocalLaundryServiceIcon/>

                    <Typography
                        variant="h6"
                        component="div"
                    >
                         Salavai Studio 
                    </Typography>
                </Box>

                <Box>
                    <Button color="inherit" component={NavLink} to="/"
                     sx={{
                        "&.active":{fontWeight:700,textDecoration:"underline",},
                        }}>Home</Button>
                    <Button color="inherit" component={NavLink} to="/services" 
                    sx={{
                        "&.active":{fontWeight:700,textDecoration:"underline",},
                        }}>Services</Button>
                    <Button color="inherit" component={NavLink} to="/pricing"
                    sx={{
                        "&.active":{fontWeight:700,textDecoration:"underline",},
                        }}>Pricing</Button>
                    <Button color="inherit" component={NavLink} to="/booking"
                    sx={{
                        "&.active":{fontWeight:700,textDecoration:"underline",},
                        }}>How it works</Button>
                    <Button color="inherit" component={NavLink} to="/contact"
                    sx={{
                        "&.active":{fontWeight:700,textDecoration:"underline",},
                        }}>Login</Button>
                    
                     <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
    )
    }
export default Navbar;