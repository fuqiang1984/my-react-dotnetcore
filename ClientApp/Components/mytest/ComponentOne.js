import wrapWithLoadData from './HighOrder'
import React,{Component} from 'react';
class InputWithUserName extends Component {
  render () {
    return <input value={this.props.data} />
  }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
export default InputWithUserName