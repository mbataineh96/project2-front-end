import React from 'react';

export function Tile(props) {
    const image = props.image;
    const tileBack = "https://user-images.githubusercontent.com/56237004/82177777-2cadd300-98a0-11ea-8700-0de4628283a0.jpg";
    /*<img src={image.url} alt={image.name} id={image.name} className="tile-image" />*/

    return (
        <div id={image.id} className="tile" onClick={() => {
            
        }}>
            <div className="tile-inner">
                <div className="tile-back">
                    <img src={tileBack} alt={image.name} className="tile-image" />
                </div>
                <div className="tile-front">
                <img src={image.url} alt={image.name} className="tile-image" />
                </div>
            </div>
        </div>
    )
}