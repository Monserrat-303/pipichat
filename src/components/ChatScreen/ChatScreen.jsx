import React from 'react';
import './ChatScreen.css';
import UserCard from './UserCard.jsx';


const ChatScreen = props => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-3">
          <div className="row">
            <div className="col-12 p-0 userCardContainer">
              <UserCard />
            </div>
          </div>
          <div className="row h-100">
            <div className="col-12 h-100 chatListContainer">
              <p>chatList</p>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-12 chatHeaderContainer">
              <p>chatHeader</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 chatContentContainer">
              <p>chatContent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChatScreen.propTypes = {

};

export default ChatScreen;