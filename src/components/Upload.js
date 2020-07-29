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



import API from '../API';

function Copyright() {
    return (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
        Let Me Go!
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}

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

    export default function Upload( { addImageToImageCollection } ) {
        const classes = useStyles();

        const [imageFile, setImageFile] = useState(null)
        const [image_url, setImage_url] = useState(null)
        const [photoshoot_id, setPhotoshoot_id] = useState("")
        const [photoshoot, setPhotoshoot] = useState([])
        const [loading, setLoading] = useState(false)

        let history = useHistory();

        useEffect(()=>{
            API.getAllPhotoshoot().then(res => setPhotoshoot(res))
        },[])
        

        const handleCreateItem = (e) => {
            e.preventDefault();
            const itemData = { image_url, photoshoot_id }
            console.log(itemData)
            history.push('/portfolio')
            API.postImage(itemData).then(resp => addImageToImageCollection(resp))
            clearForm();
        };

        const clearForm = () => {
        setImage_url("")
        setPhotoshoot_id("")
        }


        const updateImageFile = async e => {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append("upload_preset", "csifxpdf")
            setImageFile(data)
        }

        const uploadImage = () => {
            setLoading(true)
            fetch("https://api.cloudinary.com/v1_1/sjpcreative/image/upload",{
            method: "POST",
            body: imageFile, 
            })
            .then( r => r.json() )
            .then( file => {
            setImage_url(file.secure_url)
            setLoading(false)
            })
        }
        const photoshootOptions = () => {
            // debugger
            return photoshoot.map(res => <option key={res.id} value={res.id}>{res.name}</option>) 
        }

        return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <CloudUploadIcon  />
            </Avatar>
            <Typography component="h1" variant="h5">
                Upload Image!
            </Typography>
            <form className={classes.form} noValidate onSubmit={ handleCreateItem }>
                <Grid item xs={12}>
                    <FormControl variant="outlined" className={classes.form}>
                    <Input type="file" 
                    fullWidth
                    margin="dense"
                    disableUnderline
                    name="file" 
                    placeholder="Upload a image"
                    onChange={ updateImageFile }
                    />
                    <Button onClick={ uploadImage }
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        >
                        Confirm Upload Image File...
                    </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl variant="outlined" className={classes.form}>
                        <InputLabel htmlFor="outlined-category-native-simple">Photoshoot*</InputLabel>
                        <Select
                        native
                        onChange={ (e) => setPhotoshoot_id(e.target.value) }            
                        label="Category"
                        inputProps={{
                            name: 'category',
                            id: 'outlined-category-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        { photoshootOptions() }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    {loading? (
                        <h3>Loading...</h3>
                        ):(
                        <img src={image_url} style={{width: '250px'}} alt=""/>
                        )}
                </Grid>

                { image_url ? 
                
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Upload Image
            </Button>  

                : null}
                
                <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/portfolio" variant="body2">
                    Back to Portfolio
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>

            <Box mt={5}>
            <Copyright />
            </Box>
        </Container>
        );
    }