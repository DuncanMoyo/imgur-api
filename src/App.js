import React, { Component } from "react";
import Image from '../src/components/Image/Image';

const url = "https://api.imgur.com/3/gallery/hot/viral/1?showViral=true";
const clientId = "130410711";

class App extends Component {

  state = {
    images: []
  }

  componentDidMount() {
    this.imgurData();
  }

  imgurData = async () => {
    const apiResponse = await fetch(url, {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Client-ID ${clientId}`,
      },
    }).then((response) => response.json());
    console.log(apiResponse);
    this.setState({images: apiResponse.data})
  };

  render() {

    const images = this.state.images.map(image => {
      return <Image title={image.title} key={image.id} />
    })

    return (
      <div className="App">
        {images}
      </div>
    );
  }
}

export default App;
