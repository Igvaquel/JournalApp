/* eslint-disable react/prop-types */
import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";
import { Toolbar } from "@mui/material";
import { SideBar } from "../components/Sidebar";

const drawerWidth = 340;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        
        <NavBar drawerWidth={ drawerWidth }/>

        <SideBar drawerWiht={ drawerWidth }/>
        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>

            { children }

        </Box>

    </Box>
  )
}
