import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import API from '../API'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    }));

    export default function CreatePhotoshoot() {
        const classes = useStyles();

        const [name, setName] = useState("")
        let history = useHistory();

        const handleCreateItem = (e) => {
            e.preventDefault();
            const itemData = { name }
            console.log(itemData)
            history.push('/portfolio')
            API.createNewPhotoshoot(itemData)
            clearForm();
        };
        
        const clearForm = () => {
            setName("")
        }

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <CloudUploadIcon  />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Create A Photoshoot!
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={ handleCreateItem }>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField onChange={ (e) => setName(e.target.value) }
                            value={name}
                            autoComplete="name"
                            name="Name"
                            variant="outlined"
                            required
                            fullWidth
                            id="Name"
                            label="Name"
                            autoFocus
                        />
                        <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.form}>
                        <Button onClick={ handleCreateItem }
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                        Create 
                        </Button>
                        </FormControl>
                        </Grid>
                    </Grid>
                    </Grid>
                    </form>
                    </div>
            </Container>
        )
    }