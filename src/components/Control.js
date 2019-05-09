import React, { Component } from 'react';

class Control extends Component {

    getButton() {
        var _buttons = null;

        if(this.props.selectedContentId>0) {
            _buttons = <div>
                <li><a href="/update" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><input onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)} 
                type="button" value="delete"></input></li>
            </div>;
        }

        return _buttons;
    }

  render() {
    console.log();
    return (
        <ul>
            <li><a href="/create" onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('create');
            }.bind(this)}>create</a></li>

            {this.getButton()}
        </ul>
    );
  }
}

export default Control;