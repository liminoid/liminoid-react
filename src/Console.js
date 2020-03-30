import React from 'react';

export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  render() {
    return (
      <pre className="console" id={this.id} style={this.props.style}></pre>
    );
  }
}
