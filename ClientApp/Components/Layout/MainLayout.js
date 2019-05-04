import React from 'react';
import { Sidebar } from '../../Components/Layout';

class MainLayout extends React.Component {
  

  render() {
    //console.log('123');
    const { children } = this.props;
    //console.log(children);
    return (<main className="cr-app bg-light"><React.Fragment><Sidebar></Sidebar>{children}</React.Fragment></main>
    );
  }
}

export default MainLayout;
