import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import RightSideBar from '../../components/RightSideBar.jsx';

import "../../styles/dashboardPage/HistoryDashboard.scss";

import NoHistoryImage from '../../assets/NoHistoryImage.svg';


export default class HistoryDashboard extends Component {
  render() {
    return (
      <React.Fragment>
         <main className="history_dashboard">
            <ProfileSideDashboard />

            <section className="hero">
                {/* <div className="inner_navbar">
                    <span className="nav_header">Work Management</span>
                    <hr />
                    <span>Rename Work space</span>
                    <span>Change Icon</span>
                    <span>Manage Work space</span>
                    <hr />
                    <span>Add new workplace</span>
                    <span>Browse all workplaces</span>
                    <img src={leftArrowIcon} className="close_navbar_icon" alt="" />
                </div> */}
               <div className="main_content">
                <h1 className="main_content_header">History</h1>
                <hr />
             
                <div>
                    <img src={NoHistoryImage} alt="" />
                    <p>No history available yet</p>
                </div>
              
               
              
                
               </div>
            </section>

            <RightSideBar />
        </main>
      </React.Fragment>
    )
  }
}
