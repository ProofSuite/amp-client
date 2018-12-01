import React from 'react';
import Iframe from 'react-iframe'

class LandingPage extends React.PureComponent {

  // iframe = () => {
  //   return {
  //     __html: '<iframe style="position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:10000000; background-color:#000; frameBorder="0"; src="https://www.proofsuite.com/ampmarket" ></iframe>'
  //   }
  // }

  render() {
    return (
        <Iframe
          url="https://www.proofsuite.com/ampmarket"
          position="fixed"
          width="100%"
          height="100%"
          top="0px"
          left="0px"
          z-index="10000000"
          allowFullScreen
          styles={{backgroundColor: "#000"}}
       />
    );
  }
}

export default LandingPage;
