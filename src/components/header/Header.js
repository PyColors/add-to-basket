import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";

class Header extends Component {
  render() {
    return (
      <Appbar className="app-bar">
        <header className="mui-appbar mui--z1">
          <div className="mui-container">
            <table>
             <tbody>
              <tr className="mui--appbar-height">
                <td className="mui--text-title">
                  <a href="https://www.notonthehighstreet.com" target="_blank">
                    <img
                      className="app-bar__brand-logo"
                      src="images/notonthehighstreet-logo.png"
                      alt="Not On The High Street"
                    />
                  </a>
                </td>
                <td className="mui--text-right">
                  <ul className="mui-list--inline mui--text-body2">
                    <li>
                      <a
                        className="app-bar__link"
                        href="https://github.com/PyColors/add-to-basket"
                        target="_blank"
                      >
                        Project on GitHub
                      </a>
                    </li>
                    <li>
                      <img
                        className="app-bar__img-build-travis"
                        src="https://travis-ci.org/PyColors/add-to-basket.svg?branch=master"
                        alt="Build Status"
                      />
                    </li>
                  </ul>
                </td>
              </tr>
               </tbody>
            </table>
          </div>
        </header>
      </Appbar>
    );
  }
}

export default Header;
