import './App.css';
import { RouterProcessor } from './components/RouterProcessor';
import { appRouteMap } from './pages/RouteMap';

export const App = () => <RouterProcessor routeMap={appRouteMap}/>