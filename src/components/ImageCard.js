import React from "react";

const ImageCard = props => {
    const { image } = props;


    // const showView = () => {
    // view(image.id)
    // }

    return (
    <div className="ui column">
        <div
        className="ui card"
        key={image.id}
        >
        <div className="image">
            <img alt="sjp!" src={image.image_url} style={{width: "467px", height: "700px"}}  />
        </div>
        </div>
    </div>
    );

};

export default ImageCard;
