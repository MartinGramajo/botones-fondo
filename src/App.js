import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import NoticiasTodas from './components/NoticiasTodas';
import NoticiaDet from './pages/NoticiaDet';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/noticias">
          <NoticiasTodas />
        </Route>
        <Route path="/noticia/:id">
        <NoticiaDet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
