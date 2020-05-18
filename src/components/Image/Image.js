import React from 'react';
import './Image.css';

function Image(props) {
  return (
    <div>
      <div className="row">
        <div className="column">
          <p>{props.title}</p>      
        </div>
      </div>
    </div>
  )
}

export default Image;
