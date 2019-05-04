import React from 'react';

class MainLayout extends React.Component {
  

  render() {
    console.log('123');
    const { children } = this.props;
    console.log(children);
    return (
      <main className="cr-app bg-light">
         {children}
      </main>
    );
  }
}

export default MainLayout;
