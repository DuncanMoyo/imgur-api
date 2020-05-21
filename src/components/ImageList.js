import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import Image from './Image';

class ImageList extends Component {
  render() {
    return (
      <Grid>
        <Image />
      </Grid>
    )
  }
}

export default ImageList;
