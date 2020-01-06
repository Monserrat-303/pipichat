import React, { Component } from 'react'
import './UserCard.css'
import userImg from '../../assets/user_logo.png'

export default class UserCard extends Component {
  render() {
    return (
      <div className="row cardContainer">
        <img src={userImg} alt="Logo" className="col-2 userImg" />
        <div className="col-9 py-4 dataContainer">
          <div className="nameContainer">
            <h3 className="nameData">El Pipi</h3>
          </div>
          <div className="stateContainer">
            <h3 className="stateData">Available</h3>
          </div>
        </div>
      </div>
    )
  }
}
