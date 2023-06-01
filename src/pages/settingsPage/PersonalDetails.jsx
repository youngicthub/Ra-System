import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import SettingsNavBar from '../../components/SettingsNavBar.jsx';
import SettingsHeader from '../../components/SettingsHeader.jsx';

import "../../styles/settingsPage/PersonalDetails.scss";


export default class PersonalDetails extends Component {
  render() {
    return (
      <>
        <main className="personal_details">
           <ProfileSideDashboard />
           <section className="hero">
              <SettingsNavBar />
            
              <section className='content_container'>
                <SettingsHeader />
                
                <div className="content_details">
                  <div className="header_wrapper">
                    <h2>Personal Details</h2>
                    <span>Update your personal details here</span>
                  </div>
                  
                  <div className="details_edit_field">
                     <div className="input_div_wrapper">
                          <div className="input_div">
                              <span>First Name</span>
                              <input type="text" placeholder='Example' />
                          </div>
                          
                          <div className="input_div">
                              <span>Last Name</span>
                              <input type="text" placeholder='Example' />
                          </div>
                      </div>
                      
                      <div className="input_div_wrapper">
                          <div className="input_div">
                              <span>Username</span>
                              <input className='username_input' type="text" placeholder='@example' />
                          </div>

                       </div>
                       
                       <div className="input_div_wrapper">
                          <div className="input_div">
                              <span>Email</span>
                              <input className='email_input' type="email" placeholder='example@gmail.com' />
                          </div>

                       </div>
                       
                    
                        <div className="input_div_wrapper">
                            <div className="input_div">
                                <span>Bio<span>(Write a short introduction about yourself)</span></span>
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>
                        </div>
                        
                        <div className="button_container">
                            <button className='save'>Save Changes</button>
                            <button className='cancel'>Cancel</button>
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
