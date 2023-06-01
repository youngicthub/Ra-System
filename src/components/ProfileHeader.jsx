import React, { Component } from 'react'

import '../styles/component/ProfileHeader.scss';

import lightIcon from '../assets/lightIcon.svg';
import bellIcon from '../assets/bell_icon.svg';
import bottomArrowIcon from '../assets/bottomArrowIcon.svg';
import profileImage from '../assets/profileImage.svg';


export default class ProfileHeader extends Component {
  render() {
    return (
      <>
        <div className="profile_header">
            <img src={lightIcon} alt="" />
            <img src={bellIcon} alt="" />
            <div className="profile_detail_wrapper">
            <img src={profileImage} className="profileImage" alt="" />
            <p>Welcome back, <span>Drennan</span></p>
            <img src={bottomArrowIcon} alt="" />
            </div>
        </div>
      </>
    )
  }
}
