import React from 'react';
import { NonIdealState } from '@blueprintjs/core';
import { Footer } from '../../components/Common';

class SettingsPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NonIdealState title="WORK IN PROGRESS" visual="wrench">
          Setting Page
        </NonIdealState>
        <Footer />
      </div>
    );
  }
}

export default SettingsPage;
