import React from 'react'
import ImageCard from '../components/ImageCard'


const ImageCollection = ({ imageCollection }) => {
    // const [images2, setImages2] = useState(imageCollection)

    const images = imageCollection.map((image, index) => {
        return <div className="ui column"><ImageCard key={index} image={image} /></div>
    })
    return (
        <div className="ui three column grid">
            <div className="row">
                {/* {images} */}
            </div>
        </div>
    )
}

export default ImageCollection