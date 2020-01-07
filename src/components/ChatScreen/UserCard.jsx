import React, { Component } from 'react'
import './UserCard.css'
import userImg from '../../assets/user_logo.png'

export default class UserCard extends Component {
  render() {
    return (
      <div className="row cardContainer">
        <img src={userImg} alt="Logo" className="col-3 userImg" />
        <div className="col-6 py-2 px-0 dataContainer">
          <div className="nameContainer">
            <h5 className="nameData">El Pipi</h5>
          </div>
          <div className="stateContainer">
            <h6 className="stateData">Available</h6>
          </div>
        </div>
      </div>
    )
  }
}
