import React from "react";

const ImageCard = props => {
    const { view, image } = props;


    const showView = () => {
    view(image.id)
    }

    return (
    <div className="ui column">
        <div
        className="ui card"
        key={image.id}
        >
        <div className="image">
            <img alt="sjp image!" src={image.image_url} />
        </div>
        </div>
    </div>
    );

};

export default ImageCard;
