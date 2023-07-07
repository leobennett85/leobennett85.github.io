import React, { Component } from 'react';
import SvgChild from './SvgChild';

class SvgParent extends Component {
    constructor(props) {
      super(props);
  
      // Initialize the SVG attribute values in the component state
      this.state = {
        fillColor: 'blue',
        strokeWidth: 2,
        // Add more attributes as needed
      };
    }
  
    render() {
      // Render the child component and pass the SVG attribute values as props
      return (
        <div>
          <h1>Parent Component</h1>
          <SvgChild {...this.state} />
        </div>
      );
    }
  }
  
  export default SvgParent;