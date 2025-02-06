import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MdCardTravel, MdOutlineTravelExplore } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";



import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='bg-zinc-800 border-b-2 border-zinc-400'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, n: 2 }}>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: "center" }}>
                            <Link className='mr-8 text-3xl' to={"/"}>Google</Link>
                            <Link className='border-2 border-zinc-600 rounded-full px-5 py-2 text-base flex justify-center items-center gap-2' to={"/"}>
                                <MdCardTravel />Travel

                            </Link>
                            <Link className='border-2 border-zinc-600 rounded-full px-5 py-2 text-base flex justify-center items-center gap-2' to={"/"}><MdOutlineTravelExplore />
                            Explore
                            </Link>
                            <Link className='border-2 border-zinc-600 rounded-full px-5 py-2 text-base flex justify-center items-center gap-2' to={"/"}><PiAirplaneTiltFill />
                            Flights</Link>
                            <Link className='border-2 border-zinc-600 rounded-full px-5 py-2 text-base flex justify-center items-center gap-2' to={"/"}><LiaHotelSolid />
                            Hotels</Link>
                        </Box>
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
