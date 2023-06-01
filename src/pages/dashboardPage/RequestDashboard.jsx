import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import RightSideBar from '../../components/RightSideBar.jsx';

import "../../styles/RequestDashboard.scss";

import downArrowIcon from "../../assets/downArrowIcon.svg";
import leftArrowIcon from "../../assets/leftArrowIcon.svg";
import rightArrowIcon from "../../assets/rightArrowIcon.svg";
import filterIcon from "../../assets/filterIcon.svg";
import arrowIcon from '../../assets/arrowIcon.svg';
import removeButton from '../../assets/removeButton.svg';
import redEclipse from '../../assets/redEclipse.svg';
import yellowEclipse from '../../assets/yellowEclipse.svg';
import blackEclipse from '../../assets/blackEclipse.svg';
import AsianManAvatar from '../../assets/AsianManAvatar(1).png';
import AsianManAvatarII from '../../assets/AsianManAvatar(2).png';
import AsianManAvatarIII from '../../assets/AsianManAvatar(3).png';
import chatIcon from '../../assets/Chat.svg';
import greenEclipse from '../../assets/GreenEllipse.svg';
import calendarIcon from '../../assets/Calendar.svg';
import searchIcon from '../../assets/searchIcon.png';


export default class RequestDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all: false,
            pending: false,
            approved: false,
            declined: false
        }
    }
  render() {
    return (
      <React.Fragment>
         <main className="request_dashboard">
            <ProfileSideDashboard />

            <section className="hero">
               <div className="main_content">
                    <h1 className="main_content_header">Requests</h1>
                    <hr />
                    <div className="filter_section">
                        <span>Filter</span>
                        <img src={filterIcon} className="filter" alt="" />
                        <img src={downArrowIcon} alt="" />
                    </div>

                    <div className='block_wrapper'>
                            <div className="block">
                                <p onClick={() => {
                                    this.setState({
                                        all: !this.state.all
                                    })
                                }}>All <i className={this.state.all ? 'blockUpArrow' : 'blockRightArrow'}></i></p>
                                <div className={this.state.all ? 'card_wrapper active': 'card_wrapper'}>
                                    <div className="search_container">
                                        <input type="text" placeholder='Search'/>
                                        <img src={searchIcon} alt="" />
                                    </div>
                                    <div className="card">
                                        <div className="top_container">
                                            <div className='left_div'>
                                                <img src={AsianManAvatar} alt="" />
                                                <span>Workstation Transfer</span>
                                            </div>
                                            <div className='right_div'>
                                                <img src={yellowEclipse} alt="" />
                                                <span>Pending</span>
                                            </div>
                                        </div>
                                        <div className="bottom_container">
                                            <div className="left_div">
                                                <img src={chatIcon} alt="" />
                                                <span>DracoMango</span>
                                            </div>
                                            <div className="right_div">
                                                <img src={calendarIcon} alt="" />
                                                <span>Proposed Date <i>15th June, 2023</i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="top_container">
                                            <div className='left_div'>
                                                <img src={AsianManAvatarII} alt="" />
                                                <span>Maternity Leave</span>
                                            </div>
                                            <div className='right_div'>
                                                <img src={greenEclipse} alt="" />
                                                <span>Approved</span>
                                            </div>
                                        </div>
                                        <div className="bottom_container">
                                            <div className="left_div">
                                                <img src={chatIcon} alt="" />
                                                <span>IngaV</span>
                                            </div>
                                            <div className="right_div">
                                                <img src={calendarIcon} alt="" />
                                                <span>Proposed Date <i>25th May, 2023</i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="top_container">
                                            <div className='left_div'>
                                                <img src={AsianManAvatarIII} alt="" />
                                                <span>Travel Leave</span>
                                            </div>
                                            <div className='right_div'>
                                                <img src={redEclipse} alt="" />
                                                <span>Declined</span>
                                            </div>
                                        </div>
                                        <div className="bottom_container">
                                            <div className="left_div">
                                                <img src={chatIcon} alt="" />
                                                <span>RinaMenol</span>
                                            </div>
                                            <div className="right_div">
                                                <img src={calendarIcon} alt="" />
                                                <span>Proposed Date <i>10th May, 2023</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                        
                            <div className="block">
                                <p onClick={() => {
                                    this.setState({
                                        pending: !this.state.pending
                                    })
                                }}>Pending <i className={this.state.pending ? 'blockUpArrow' : 'blockRightArrow'}></i></p>
                                <div className={this.state.pending ? 'card_wrapper active' : 'card_wrapper'}>
                                    <div className="search_container">
                                        <input type="text" placeholder='Search'/>
                                        <img src={searchIcon} alt="" />
                                    </div>
                                    <div className="card">
                                        <div className="top_container">
                                            <div className='left_div'>
                                                <img src={AsianManAvatar} alt="" />
                                                <span>Workstation Transfer</span>
                                            </div>
                                            <div className='right_div'>
                                                <img src={yellowEclipse} alt="" />
                                                <span>Pending</span>
                                            </div>
                                        </div>
                                        <div className="bottom_container">
                                            <div className="left_div">
                                                <img src={chatIcon} alt="" />
                                                <span>DracoMango</span>
                                            </div>
                                            <div className="right_div">
                                                <img src={calendarIcon} alt="" />
                                                <span>Proposed Date <i>15th June, 2023</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="block">
                                <p onClick={() => {
                                    this.setState({
                                        declined: !this.state.declined
                                    })
                                }}>Declined <i className={this.state.declined ? 'blockUpArrow' : 'blockRightArrow'}></i></p>
                                <div className={this.state.declined ? 'card_wrapper active' : 'card_wrapper'}>
                                    <div className="search_container">
                                        <input type="text" placeholder='Search'/>
                                        <img src={searchIcon} alt="" />
                                    </div>
                                    <div className="card">
                                        <div className="top_container">
                                            <div className='left_div'>
                                                <img src={AsianManAvatarIII} alt="" />
                                                <span>Travel Leave</span>
                                            </div>
                                            <div className='right_div'>
                                                <img src={redEclipse} alt="" />
                                                <span>Declined</span>
                                            </div>
                                        </div>
                                        <div className="bottom_container">
                                            <div className="left_div">
                                                <img src={chatIcon} alt="" />
                                                <span>RinaMenol</span>
                                            </div>
                                            <div className="right_div">
                                                <img src={calendarIcon} alt="" />
                                                <span>Proposed Date <i>10th May, 2023</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block">
                                <p onClick={() => {
                                    this.setState({
                                        approved: !this.state.approved
                                    })
                                }}>Approved <i className={this.state.approved ? 'blockUpArrow' : 'blockRightArrow'}></i></p>
                                <div className={this.state.approved ? 'card_wrapper active' : 'card_wrapper'}>
                                    <div className="search_container">
                                        <input type="text" placeholder='Search'/>
                                        <img src={searchIcon} alt="" />
                                    </div>
                                    <div className="card">
                                        <div className="top_container">
                                            <div className='left_div'>
                                                <img src={AsianManAvatarII} alt="" />
                                                <span>Maternity Leave</span>
                                            </div>
                                            <div className='right_div'>
                                                <img src={greenEclipse} alt="" />
                                                <span>Approved</span>
                                            </div>
                                        </div>
                                        <div className="bottom_container">
                                            <div className="left_div">
                                                <img src={chatIcon} alt="" />
                                                <span>IngaV</span>
                                            </div>
                                            <div className="right_div">
                                                <img src={calendarIcon} alt="" />
                                                <span>Proposed Date <i>25th May, 2023</i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="new_request">
                                <span>+ New Request</span>
                            </div>
                            
                    </div>
               </div>
            </section>

            <RightSideBar />
        </main>
      </React.Fragment>
    )
  }
}

