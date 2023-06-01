import React, { Component } from 'react'
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/authPages/NewPassword.scss';

import logo from '../../assets/Vector-i.svg';

export default class NewPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main className='new_password'>
          <h1>Create New Password</h1>
          <p>Create New Password for company user email <span>Drenaan.Racoonlaboratories@RA_System</span></p>
          
          <h2>Type your new password</h2>
          <div className="input_box">
            <input type="password" placeholder='Password' />
            <span className='input_label'>Password</span>
          </div>
          <button>Reset Password</button>
        </main>
        
      </React.Fragment>
    )
  }
}
