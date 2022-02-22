import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../store/favorites-context";
//import WelcomeForm from "../experiments/WelcomeForm";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  //console.log('NAME IS = ' + WelcomeForm.authorName);


  return (
    <header className={classes.header}>
      <div className={classes.logo}>{[] /*WelcomeForm.authorName*/} Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/experiments">Experiments</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>

    
  );
}

export default MainNavigation;
