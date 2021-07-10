import Chime from './Chime';
import Bbt from './Bbt';
import Suntrust from './Suntrust';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nfcu from './Nfcu';
import Bbva from './Bbva';
import Chase from './Chase';
import Citi from './Citi';
import Huntington from './Huntington';
import Pnc from './Pnc';
import Woodforest from './Woodforest';
import Paypal from './Paypal';
import NavyFederal from './NavyFederal';
import Invoice from './Invoice';
import Profile from './Profile';
import Error from './Error';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chime" component={Chime} />
        <Route exact path="/bb&t" component={Bbt} />
        <Route exact path="/suntrust" component={Suntrust} />
        <Route exact path="/nfcu" component={Nfcu} />
        <Route exact path="/bbva" component={Bbva} />
        <Route exact path="/chase" component={Chase} />
        <Route exact path="/citi" component={Citi} />
        <Route exact path="/huntington" component={Huntington} />
        <Route exact path="/pnc" component={Pnc} />
        <Route exact path="/woodforest" component={Woodforest} />
        <Route exact path="/paypal" component={Paypal} />
        <Route exact path="/navyfederal" component={NavyFederal} />
        <Route exact path="/invoice?" component={Invoice} />
        <Route exact path="/invoice" component={Invoice} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/error" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
