import React from 'react';

export class Tile extends React.Component {

    state = {
        active: false,
        swap: false,
    }

    render() {
        return (
            <div className="tile"
            onClick={() => {
            this.setState({active: !this.state.active});
            setTimeout(() => {
                this.setState({swap: !this.state.swap})
            }, 215);
            }}>

                <div className={this.state.active ? 'tile-inner-flipped' : 'tile-inner'}>
                    <div
                    className={this.state.swap ? 'tile-front' : 'tile-back'}>

                        <img src={this.state.swap ?
                        this.props.image.url :
                        "https://user-images.githubusercontent.com/56237004/82177777-2cadd300-98a0-11ea-8700-0de4628283a0.jpg"}
                        alt={this.props.image.name} className="tile-image" />
                    </div>
                </div>
            </div>
        )
    }
}

/*import React from 'react';

export function Tile(props) {
    const image = props.image;
    const tileBack = "https://user-images.githubusercontent.com/56237004/82177777-2cadd300-98a0-11ea-8700-0de4628283a0.jpg";
    /*<img src={image.url} alt={image.name} id={image.name} className="tile-image" />*//*

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
}*/