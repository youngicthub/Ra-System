import React, { Component } from 'react'
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/authPages/PasswordReset.scss';

import logo from '../../assets/Vector-i.svg';

export default class PasswordReset extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main className='password_reset'>
          <h1>Reset Password</h1>
          <p>Please enter your email address. You will receive a link to create a new password by mail</p>
          <div className="input_box">
            <input type="email" placeholder='example@gmail.com' />
            <span className='input_label'>Email</span>
          </div>
          <button>continue</button>
        </main>
        
      </React.Fragment>
    )
  }
}
