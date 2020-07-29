import React, { Component } from 'react'
import ImageCard from './ImageCard'
import Upload from './Upload'
import CreatePhotoshoot from './CreatePhotoshoot'
import { Grid } from '@material-ui/core'

export default class Portfolio extends Component {
    state = { 
        showForm: false,
        showPhotoshootForm: false
    }

    render() {
        // const images = this.props.imageCollection.map((image, index) => 
        //         <ImageCard key={index} image={image} /> 
        // )

        const renderImages = () => this.props.imageCollection.map(image => {
            return(
                <Grid key={image.id} item xs={12} sm={6} md={4} >
                    <ImageCard key={image.id} image={image}/>
                </Grid>   
            )
        })



        const toggleStateImage = () => {
            this.setState({
                showForm: !this.state.showForm,
            })
        }
        const toggleStatePhotoShoot = () => {
            this.setState({
                showPhotoshootForm: !this.state.showPhotoshootForm
            })
        }
        return (
            <div className="ui three column grid" style={{backgroundColor: "gray"}}>
                <div className="row">
                    {
                        this.props.username &&
                        <>
                            <button 
                            style={{marginLeft: "30px"}}
                            onClick={() => toggleStateImage()} >
                                Add 
                            </button>
                            <button onClick={() => toggleStatePhotoShoot()} >
                                CreatePhotoshoot
                            </button>
                        </>
                    }
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    {this.state.showForm ? <Upload
                    addImageToImageCollection={this.props.addImageToImageCollection}
                    /> : null}
                    {this.state.showPhotoshootForm ?  <CreatePhotoshoot/> : null}

                    <Grid 
                    container spacing={1} 
                    justify="center"
                    // className={classes.gridContainer}>
                    >
                        { renderImages() }
                    </Grid>

                    {/* {images} */}
                </div>
            </div>
        )
    }
}
