import { configure, addDecorator } from '@storybook/react';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { withStore } from './addon-store';

import '@blueprintjs/core/lib/css/blueprint.css'
// import './../src/styles/reset.css'

const req = require.context('../src/components', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// @storybook/addon-console
setConsoleOptions({
  panelExclude: [],
});

// @storybook/addon-info
setDefaults({
  inline: true,
  styles: {
    infoBody: {
      border: 'none',
      boxShadow: 'none',
    },
    infoStory: {
      textAlign: 'center',
      border: '1px #eee dashed',
      padding: '40px',
      margin: '0 40px',
    },
    header: {
      body: {
        marginBottom: 0,
      },
    },
  },
});

// @storybook/addon-options
setOptions({
  addonPanelInRight: true,
});

// Configure decorator
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// Configure Redux Store
addDecorator(withStore);

// Bootstrap
configure(loadStories, module);
