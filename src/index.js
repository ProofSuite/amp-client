import { bootstrap } from './app';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');

bootstrap(container);
registerServiceWorker();
