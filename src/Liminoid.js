import React from 'react';

import Editor from 'react-simple-code-editor'; // eslint-disable-line no-unused-vars

import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-python';
import './prism.css';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';

import Button from './Button'; // eslint-disable-line no-unused-vars
import Console from './Console'; // eslint-disable-line no-unused-vars

export default class Liminoid extends React.Component {
  static #SCOPE;
  static #count = 0;
  static #shared = new Set();

  // private instance fields
  #id;
  #tippy;
  #repl;
  #style = {
    fontFamily: 'Lucida Console, Courier, monospace',
    background: '#2d2d2d',
    color: '#ccc'
  };

  // public instance fields
  state = {
    code: `'🐍 Edit and run me 🐍'`,
    initialized: false,
    showConsole: false,
    running: false
  };

  padding = 10;
  packages;
  console;
  edit;
  callback;
  scope;

  constructor(props) {
    super(props);

    // update class state shared between editors
    Liminoid.#count += 1;
    this.#id = Liminoid.#count;

    // set initial default code if component is empty
    if (props.children && typeof props.children === 'string') {
      this.state.code = props.children;
    }

    // only set pacakges if passed prop is an Array
    this.packages = Array.isArray(props.packages) ? props.packages : [];

    // console defaults to true
    if (props.console === false) {
      this.console = false;
    } else {
      this.console = true;
    }

    // edit defaults to true
    if (props.edit === false) {
      this.edit = false;
    } else {
      this.edit = true;
    }

    // check if onResult is actually a function
    if (props.onResult && typeof props.onResult === 'function') {
      this.callback = props.onResult;
    }

    // scope defaults to false
    if (props.scope === true) {
      this.scope = true;
    } else {
      this.scope = false;
    }
  }

  // eslint-disable-next-line no-undef
  #initRepl(Repl) {
    if (this.scope) {
      this.#repl = new Repl();
    } else {
      // do we need to initialize a global Repl()?
      Liminoid.#SCOPE = Liminoid.#SCOPE || new Repl();
      this.#repl = Liminoid.#SCOPE;
      Liminoid.#shared.add(this.#id);
    }

    // async method, we don't want to block
    // or throw a breaking error so we update
    // component state when/if promise resolves...
    this.#repl
      .init()
      .then(res => res.load(this.packages))
      .then(res => {
        if (res === this.#repl) {
          this.setState({ initialized: true });
        }
      })
      .catch(res => {
        console.log(res);
      });
  }

  // eslint-disable-next-line no-unused-vars
  #run = e => {
    let stdout;
    if (this.console && window) {
      this.setState({ showConsole: true });
      stdout = document.getElementById(`console-${this.#id}`);
      stdout.innerText = 'Running...';
    }

    this.#repl
      .run(this.state.code)
      .then(res => {
        const { value } = res;

        if (this.callback) {
          this.callback(value);
        }

        if (stdout) {
          stdout.innerText = value;
        }
      })
      .catch(err => {
        if (this.callback) {
          this.callback(null, err);
        }

        if (stdout) {
          stdout.innerText = err;
        }
      });
  };

  // eslint-disable-next-line no-unused-vars
  #copy = e => {
    // copy editor contents to clipboard
    if (!navigator.clipboard) {
      console.log('Clipboard copy not supported in this browser');
      return;
    }
    navigator.clipboard
      .writeText(this.state.code)
      .then(() => {
        // show copy tooltip
        this.#tippy.show();
        setTimeout(() => {
          this.#tippy.hide();
        }, 500);
      })
      .catch(() => {
        console.log('Clipboard copy failed.');
      });
  };

  // eslint-disable-next-line no-unused-vars, consistent-return
  #restart = e => {
    if (
      window &&
      !window.confirm(
        'Are you sure you want to restart the Python session? All variables (in all associated editors) will be reset'
      )
    ) {
      return false;
    }

    this.setState({ initialized: false });

    if (this.console && window) {
      this.setState({ showConsole: true });

      // restart all editors sharing the global Repl
      if (!this.scope) {
        this.#broadcast('Restarting Python session...');
      } else {
        document.getElementById(`console-${this.#id}`).innerText =
          'Restarting Python session...';
      }
    }

    this.#repl
      .restart(this.packages)
      .then(res => {
        if (res === this.#repl) {
          this.setState({ initialized: true });

          if (this.console && window) {
            if (!this.scope) {
              this.#broadcast('Session restarted!');
            } else {
              document.getElementById(`console-${this.#id}`).innerText =
                'Session restarted!';
            }
          }
        }
      })
      .catch(err => err);
  };

  // eslint-disable-next-line no-undef
  #broadcast(msg) {
    Liminoid.#shared.forEach(function(id) {
      document.getElementById(`console-${id}`).innerText = msg;
    });
  }

  componentDidMount() {
    // needs to be in browser to attach Repl
    import('liminoid-js').then(({ Repl }) => {
      this.#initRepl(Repl);
    });

    // attach tooltip to copy  button
    this.#tippy = tippy(document.getElementById(`copy-${this.#id}`), {
      content: 'Copied to clipboard!',
      trigger: 'manual',
      theme: 'translucent'
    });

    if (!this.edit && window) {
      // disable the textarea of the child react-simple-code-editor
      document.getElementById(`editor-${this.#id}`).disabled = true;
    }
  }

  render() {
    return (
      <div>
        <div
          className="editor-btns"
          style={{
            background: '#2d2d2d',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <span
            style={{
              color: '#fff',
              backgroundColor: 'rgb(189, 147, 249)',
              padding: '6px 4px 0px 4px',
              marginLeft: '3em',
              marginBottom: '0.5em',
              borderRadius: '0% 0% 20% 20%',
              fontSize: '80%'
            }}
          >
            Python
          </span>
          <div>
            <Button
              id={`play-${this.#id}`}
              icon={faPlay}
              action={this.#run}
              disabled={!this.state.initialized}
              title="Run this code"
            />
            <Button
              id={`copy-${this.#id}`}
              icon={faCopy}
              action={this.#copy}
              disabled={false}
              title="Copy to clipboard"
            />
            <Button
              id={`stop-${this.#id}`}
              icon={faTimes}
              action={this.#restart}
              disabled={!this.state.initialized}
              title="Restart Python session"
            />
          </div>
        </div>

        <Editor
          value={this.state.code}
          onValueChange={code => this.setState({ code })}
          highlight={code => Prism.highlight(code, Prism.languages.py)}
          padding={this.padding}
          style={this.#style}
          tabSize={4}
          textareaId={`editor-${this.#id}`}
        />
        {this.console && (
          <Console
            id={`console-${this.#id}`}
            style={{
              ...this.#style,
              ...{
                marginTop: '1em',
                padding: `${this.padding}px`,
                visibility: this.state.showConsole ? 'visible' : 'hidden'
              }
            }}
          />
        )}
      </div>
    );
  }
}
