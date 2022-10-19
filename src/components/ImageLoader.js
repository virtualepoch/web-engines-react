import React, { Component } from "react";
import moon from "../images/moon.jpg"

class ImageLoader extends Component {
    state = {
        src : {moon}
    }

    render() {
        const {src} = this.state;

        return (
            <div className="image-loader-container">
                <img src={src} />
                <div className="image-loader-container-overlay"></div>
            </div>
        )
    }
}

export default ImageLoader;