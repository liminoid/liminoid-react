import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // eslint-disable-line no-unused-vars

export default class Button extends React.Component {
  style = {
    fontFamily: 'inherit',
    margin: '0.5em',
    overflow: 'visible',
    fontSize: '0.9em',
    textTransform: 'none',
    WebkitAppearance: 'button',
    outline: 'none',
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    padding: 0,
    display: 'inline',
  };

  render() {
    return (
      <button
        onClick={this.props.action}
        id={this.props.id}
        className="liminoid"
        disabled={this.props.disabled}
        style={{
          ...this.style,
          ...{ cursor: this.props.disabled ? 'wait' : 'pointer' },
        }}
        title={this.props.title}
      >
        <FontAwesomeIcon icon={this.props.icon} inverse />
      </button>
    );
  }
}
