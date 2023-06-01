import React, { Component } from 'react'

import '../styles/component/SettingsNavBar.scss';

export default class SettingsNavBar extends Component {
  render() {
    return (
      <>
        <section className="settings_navbar_container">
            <h2>General Settings</h2>
            
            <div className="navbar">
                    <span className="active">Personal Details</span>
                    <span>User Permission</span>
                    <span>Billings</span>
                    <span>Payment</span>
                    <span>Plans</span>
                    <span>Notification</span>
                    <span>Password</span>
                    <span>Languages</span>
            </div>
        </section>
      </>
    )
  }
}
