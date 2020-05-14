import React, { Component } from "react";
import "./Image.css";

const url = "https://api.imgur.com/3/gallery/hot/viral/1?showViral=true";
const clientId = "130410711";

class Image extends Component {

  componentDidMount() {
    this.doStuff()
  }

  doStuff = async () => {
    const apiResponse = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Client-ID ${clientId} `,
      },
    }).then((response) => response.json());
    console.log(apiResponse);
  };

  render() {
    return (
      <div className="Image">
        <p>Image</p>
      </div>
    );
  }
}

export default Image;
