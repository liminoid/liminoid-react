import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // eslint-disable-line no-unused-vars

export default class Button extends React.Component {
  #editor;
  action;
  icon;
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
    padding: 0
  };

  constructor(props) {
    super(props);
    this.id = props.id;
    this.action = props.action;
    this.icon = props.icon;
  }

  render() {
    return (
      <button
        onClick={this.action}
        id={this.id}
        className="liminoid"
        disabled={this.props.disabled}
        style={{
          ...this.style,
          ...{ cursor: this.props.disabled ? 'wait' : 'pointer' }
        }}
        title={this.props.title}
      >
        <FontAwesomeIcon icon={this.icon} inverse />
      </button>
    );
  }
}
