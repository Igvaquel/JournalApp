/* eslint-disable react/prop-types */
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { setActiveNote } from "../../store/journal"


export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const newTitle = useMemo( () => {
        return title.length > 25
            ?title.substring(0,25) + '...'
            :title
    },[ title ])

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote( { id, title, body, date, imageUrls, } ))
    };

  return (
    <ListItem disablePadding>

        <ListItemButton
            onClick={ onClickNote }
        >

            <ListItemIcon>
                <TurnedInNot sx={{ fontSize: '30px' }} />
            </ListItemIcon>

            <Grid container sx={{ display: 'flex'}}>
                <ListItemText primary={ newTitle } sx={{ width: '100%'}} />

                <ListItemText secondary={ body }/>
            </Grid>

        </ListItemButton>
                            
    </ListItem>
  )
}
