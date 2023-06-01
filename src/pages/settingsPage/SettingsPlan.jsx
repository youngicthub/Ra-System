import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import SettingsNavBar from '../../components/SettingsNavBar.jsx';
import SettingsHeader from '../../components/SettingsHeader.jsx';

import "../../styles/settingsPage/SettingsPlan.scss";

export default class SettingsPlan extends Component {
  render() {
    return (
      <>
        <main className="settings_payment">
           <ProfileSideDashboard />
           <section className="hero">
              <SettingsNavBar />
            
              <section className='content_container'>
                <SettingsHeader />
                
                <div className="content_details">
                  <div className="header_wrapper">
                    <h2>Account Plan</h2>
                    <span>Select a plan to enjoy more offers</span>
                  </div>
                  
                  <div className="plan_wrapper">
                    <div className="plan_card">
                        <div>
                            <span className="plan_type">Free Plan</span>
                            <span className="offer">Limited Offer</span>
                            <span className="amount">$0/month</span>
                        </div>

                        <button>Current Plan</button>
                    </div>

                    <div className="plan_card">
                        <div>
                            <span className="plan_type">Professional Plan</span>
                            <span className="offer">Unlimited Offer</span>
                            <span className="amount">$20/month</span>
                        </div>

                        <button className='choose_plan'>Choose Plan</button>
                    </div>
                </div>
                  
                  
                  
                
                </div>
                
                
              </section>
           </section>
        </main>
      </>
    )
  }
}
