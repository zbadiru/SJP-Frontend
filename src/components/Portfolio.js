import React, { Component } from 'react'
import ImageCollection from '../containers/ImageCollection'
import ImageCard from './ImageCard'
import Upload from './Upload'
import CreatePhotoshoot from './CreatePhotoshoot'

export default class Portfolio extends Component {
    state = { 
        showForm: false,
        showPhotoshootForm: false
    }

    render() {
        const images = this.props.imageCollection.map((image, index) => {
            return <div className="container"><ImageCard key={index} image={image} /></div>
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
            <div className="ui three column grid">
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
                    {images}
                </div>
            </div>
        )
    }
}
