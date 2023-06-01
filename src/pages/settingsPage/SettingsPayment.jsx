import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import SettingsNavBar from '../../components/SettingsNavBar.jsx';
import SettingsHeader from '../../components/SettingsHeader.jsx';

import "../../styles/settingsPage/SettingsPayment.scss";


import mastercard_logo from '../../assets/mastercard_logo.svg';
import filterIcon from "../../assets/filterIcon.svg";
import downArrowIcon from "../../assets/downArrowIcon.svg";
import uploadIcon from '../../assets/uploadIcon.svg';

export default class SettingsPayment extends Component {
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
                    <h2>Payment Method</h2>
                    <span>Update your billing details and address</span>
                  </div>
                  
                  <div className="container">

                        <div className="email_detail_wrapper card_detail_wrapper">
                            <h2>Contact Email</h2>
                            <div className="email_wrapper card_wrapper">
                                
                                <div>
                                    <p>Send to my account email</p>
                                    <span>example@gmail.com</span>
                                    
                                </div>
                                <input type="radio" checked="checked" name="" id="" />
                            </div>
                            
                                    
                            <div className="add_card_button">
                                <button>+ Add another email address</button>
                            </div>
                        </div>
                                
                        <div className="card_detail_wrapper">
                            <h2>Card Details</h2>
                            <div className="card_wrapper">
                                <img src={mastercard_logo} alt="" />
                                <span>Mastercard *****4598</span>
                                <input type="radio" checked="checked" name="" id="" />
                            </div>

                            <div className="add_card_button">
                                <button>+ Add another payment method</button>
                            </div>
                        </div>
                        
                                
                        
                  </div>
                  
                    <div className="history_container">
                        <div className="history_header">
                            <h2>Billing History</h2>
                            <div>
                                <div className="filter_section">
                                    <span>Filter</span>
                                    <img src={filterIcon} className="filter" alt="" />
                                    <img src={downArrowIcon} alt="" />
                                </div>
                                <button>Download all</button>
                            </div>
                        </div>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Invoice</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                            <td>Basic Plan</td>
                                            <td>$0</td>
                                            <td>March 22,2023.</td>
                                            <td className='paid'>Paid</td>
                                            <td><img src={uploadIcon} alt="" /></td>
                                </tr>
                                <tr>
                                            <td>Professional Plan</td>
                                            <td>$20</td>
                                            <td>March 22,2023.</td>
                                            <td className='paid'>Paid</td>
                                            <td><img src={uploadIcon} alt="" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  
                
                </div>
                
                
              </section>
           </section>
        </main>
      </>
    )
  }
}
