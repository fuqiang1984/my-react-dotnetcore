import React, {Component} from 'react';


export default class DeleteButton extends Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.team);
  }

  render() {
    return (
      <a onClick={this.handleClick} type="button" class="btn btn-primary">Delete</a>
     
    );
  }
}