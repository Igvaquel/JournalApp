/* eslint-disable react/prop-types */
import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";


export const SideBar = ({ drawerWidth }) => {

  const { displayName } = useSelector( state => state.auth );


  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >   
        <Drawer
            variant="permanent"
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                {
                    ['Title 1', 'Title 2', 'Title 3'].map( text =>(
                        <ListItem key={text} disablePadding>

                            <ListItemButton>

                                <ListItemIcon>
                                    <TurnedInNot sx={{ fontSize: '30px' }} />
                                </ListItemIcon>

                                <Grid container sx={{ display: 'flex'}}>
                                    <ListItemText primary={ text } sx={{ width: '100%'}} />

                                    <ListItemText secondary={ 'Subtitle' }/>
                                </Grid>

                            </ListItemButton>
                            
                        </ListItem>
                    ))
                }
            </List>
            

        </Drawer>        
    </Box>
  )
}
