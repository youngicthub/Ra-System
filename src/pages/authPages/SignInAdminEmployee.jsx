import React, { Component } from 'react'
import AuthHeader from '../../layout/AuthHeader';
import '../../styles/authPages/SignInAdminEmployee.scss';

import logo from '../../assets/Vector-i.svg';
import hero_img from '../../assets/HeroRectangleImage.svg';
import google from '../../assets/google-svgrepo-com 1.svg';

export default class SignInAdminEmployee extends Component {
  render() {
    return (
      <React.Fragment>
        <AuthHeader />
        <main className='SignAdminEmployee'>
            <div className="left_content">
                <img src={hero_img} alt="hero_illustration" />
            </div>
            <div className="right_content">
                <div className="header_wrapper">
                    <img src={logo} className="header_logo" alt="logo" />
                    <h1>RA_SYS</h1>
                </div>
                <h4>The paperless organisation</h4>

                <form action="#">
                    <h6>Continue as</h6>
                    <div className="button_box">
                        <button>Employee</button>
                        <button className="admin">Admin</button>
                    </div>
                    
                </form>
            </div>
        </main>
        
      </React.Fragment>
    )
  }
}
