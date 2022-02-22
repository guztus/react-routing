import { Route, Switch } from "react-router-dom";

import ExperimentsPage from "./pages/Experiments";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/experiments">
          <ExperimentsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
