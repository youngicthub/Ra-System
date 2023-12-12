import React, { Component } from 'react';

import '../styles/ProfileNavSideBar.scss';

import { Outlet, Link } from "react-router-dom";

export default class ProfileNavSideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav_sidebar">
                            <ul>
                                <Link to="/profile"><li className='active'>Account</li></Link>
                                <Link to="/profile-admin/organization-detail"><li>Administration</li></Link>
                                <Link><li>Security</li></Link>
                                <li>Notification</li>
                                <Link to="/profile-billing/payment-method"><li>Billing</li></Link>
                            </ul>
                        </div>
      </React.Fragment>
    )
  }
}
