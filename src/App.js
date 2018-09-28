import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainImage from './assets/main-image.png'
import HeaderLogo from './assets/header-logo.svg'
import Line from './assets/invite-line.svg'
import Icon1 from './assets/icon-1.svg'
import Icon2 from './assets/icon-2.svg'
import AddFriendIcon from './assets/add-friend-icon.svg'
import InviteFriends from './assets/invite-friends-button.svg'
import ButtonArrow from './assets/button-arrow.svg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="wrapper">
          <div class="column left">
            <div class="info">
              <div className="header"><img src={HeaderLogo} alt="" className="logo" />
              </div>
              <img src={MainImage} alt="" className="main-image" />
            </div>
          </div>

          <div class="column right">
            <section className="right-content">
              <span className="invite-friends-tag">INVITE FRIENDS <img src={Line} alt="" className="line" /></span>
              <p>Your experience of Amber Sky is awaiting you, but playing with more friends always adds to the adventure.</p>
              <p>Experience for 2-6 players</p>
              <div className="icon-container">
                <img src={Icon1} alt="" className="icon-1" />
                <img src={Icon2} alt="" className="icon-2" />
                <img src={AddFriendIcon} alt="" className="icon-3" />
              </div>
              <button className="invite-friends-button">
              Invite Friends <img className="button-arrow" src={ButtonArrow} alt=""/>
              </button>
            </section>
            <div class="info">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
