import React from 'react';
import { Link } from 'react-router-dom';

export default function CodeCampMenu() {
    
    return (
        <div>
        
        <div>
            <div className="header__open-button-mobile">
                <a href="" className="js-open-main-menu">
                    <i className="fa fa-bars" />
                </a>
            </div>
            <div className="header__user">
                <img
                    src="assets/images/user-icon.png"
                    className="header__user__icon"
                    alt="User Icon"
                />
                <span className="header__user__hello">Hello, john fu!</span>
                <Link to="/login">Login</Link>
            </div>

            <ul className="header__menu-list js-menu">
                <li className="close-button-mobile">
                    <a href="" className="js-close-main-menu">
                        <i className="fa fa-remove" />
                    </a>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/advancedsurvey">Advanced Survey</Link>
                </li>
                <li>
                    <Link to="/surveycreator">Create Survey</Link>
                </li>

               

                <li>
                    <Link to="/teams">Teams</Link>
                </li>
                <li>
                    <Link to="/mytest123">My test</Link>
                </li>

                <li className="social-icon">
                    <a href="">
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                </li>
                <li className="social-icon">
                    <a href="">
                        <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                </li>

                <li className="social-icon">
                    <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>
        <div>
        {/*<ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="#"> <Link to="/teams">Teams</Link></a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
    </ul>*/}
</div>
        </div>
    );
}