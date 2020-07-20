import React, { Component } from 'react'
import ImageCollection from '../containers/ImageCollection'
import ImageCard from './ImageCard'

export default class Portfolio extends Component {
    render() {
        const images = this.props.imageCollection.map((image, index) => {
            return <div className="ui column"><ImageCard key={index} image={image} /></div>
        })
        return (
            <div className="ui three column grid">
                <div className="row">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {images}
                </div>
            </div>
        )
    }
}
