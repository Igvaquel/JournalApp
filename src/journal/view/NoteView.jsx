/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from "../../hooks/useForm"
import { ImageGallery } from "../components/ImageGallery"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal'


export const NoteView = () => {

    const dispatch = useDispatch();

    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState,} = useForm( note )

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    },[date])

    const fileInputRef =  useRef();

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [ formState ]);

    useEffect(() => {
      if( messageSaved.length > 0 ) {
        Swal.fire('Updated note', messageSaved, 'success');
      }
    }, [messageSaved])
    

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }

    const onFileInputChange = ({ target }) => {
        if( target.files === 0 ) return;

        dispatch( startUploadingFiles( target.files ));

    }

    const onDelete = () => {
        dispatch( startDeletingNote() );
    }
    

  return (
    <Grid 
        container 
        direction='row'
        justifyContent='space-between' 
        sx={{ mb: 1 }}
        className="animate__animated animate__fadeIn"
    >
        <Grid item>
            <Typography fontSize={ 30 } fontWeight='light' > { dateString } </Typography>
        </Grid>  

        <Grid item>

            <input 
                multiple
                type='file'
                ref={ fileInputRef }
                onChange={ onFileInputChange }
                style={{ display: "none" }}
            />
            <IconButton
                color='primary'
                disabled={ isSaving }
                onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined/>
            </IconButton>



            <Button 
                color="primary" 
                sx={{ padding: 2 }}
                onClick={ onSaveNote }
                disabled={ isSaving }
            >
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                fullWidth
                variant="filled" 
                placeholder="enter a title"
                label='Title'
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={ title }
                onChange={ onInputChange }
            />

            <TextField
                type="text"
                variant="filled"
                multiline
                fullWidth
                placeholder="What happened today?"
                sx={{ border: 'none', mb: 1 }}
                minRows={5}
                name='body'
                value={ body }
                onChange={ onInputChange }
            />
        </Grid>

        <Grid container justifyContent='end'>
            <Button
                onClick={ onDelete }
                sx={{ mt: 2 }}
                color='error'
            >
                <DeleteOutline/>
                Delete
            </Button>

        </Grid>

        <ImageGallery images={ note.imageUrls }/>


    </Grid>
  )
}
