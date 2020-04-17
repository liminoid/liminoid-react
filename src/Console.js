import React from 'react';

export default class Console extends React.Component {
  render() {
    return (
      <pre
        className="console"
        id={this.props.id}
        style={this.props.style}
      ></pre>
    );
  }
}
