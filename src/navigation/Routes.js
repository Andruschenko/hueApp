import CameraComp from '../components/CameraComp';
import Notes from '../components/Notes';
import App from '../containers/App';
import Home from '../components/Home';

import RouteId from './RouteId';


const routes = {
  [RouteId.CameraComp]: {
    component: CameraComp,
  },
  [RouteId.Notes]: {
    component: Notes,
  },
  [RouteId.Counter]: {
  	component: App,
  },
  [RouteId.Home]: {
    component: Home,
  }
};

export default routes;
