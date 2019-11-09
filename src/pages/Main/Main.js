import React, { Component } from "react";
import SectionContact from './Sections/SectionContact';
import SectionFooter from './Sections/SectionFooter';

class Main extends Component {

  render() {
    return (
      <>
        <SectionContact />
        <SectionFooter />
      </>
    );
  }
}

export default Main;