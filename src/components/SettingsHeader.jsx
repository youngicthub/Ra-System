import React, { Component } from 'react'

import ProfileHeader from './ProfileHeader';

import '../styles/component/SettingsHeader.scss';


export default class SettingsHeader extends Component {
  render() {
    return (
      <>
        <div className='settings_header'>
            <input type="text" placeholder='Type to search' />
            <div>
                <ProfileHeader />
            </div>
        </div>
      </>
    )
  }
}
