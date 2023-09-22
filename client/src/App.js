import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/:id'>
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
          </Route>
          <Redirect to={`f${(+new Date).toString(16)}`}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
