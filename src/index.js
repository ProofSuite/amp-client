import { bootstrap } from './app';
import { createStore } from './store';
import registerServiceWorker from './registerServiceWorker';
const store = createStore();
const container = document.getElementById('root');

bootstrap(store, container);
registerServiceWorker();
