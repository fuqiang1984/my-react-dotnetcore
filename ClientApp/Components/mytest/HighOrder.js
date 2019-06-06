import React, {Component} from 'react'
export default (WrappedComponent,name)=>{
   
     class NewComponent extends Component{
        constructor () {
            super()
            this.state = { data: null }
          }
        //render(){
       //   <WrappedComponent />
      //  }
        render () {
            return <WrappedComponent data={this.state.data} />
          }
    }

    return NewComponent;
      
}
