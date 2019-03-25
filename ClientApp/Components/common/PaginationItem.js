import React, {Component} from 'react';


export default class PaginationItem extends Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.link);
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        {this.props.link.rel}
      </a>
    );
  }
}