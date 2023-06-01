import React, { Component } from 'react'

import ProfileSideDashboard from '../../components/ProfileSideDashboard.jsx';
import SettingsNavBar from '../../components/SettingsNavBar.jsx';
import SettingsHeader from '../../components/SettingsHeader.jsx';

import "../../styles/settingsPage/UserPermission.scss";


import AvatarEclipse1 from '../../assets/AvatarEllipse1.png';
import AvatarEclipse2 from '../../assets/AvatarEllipse2.png';
import AvatarEclipse3 from '../../assets/AvatarEllipse3.png';
import AvatarEclipse4 from '../../assets/AvatarEllipse4.png';
import AvatarEclipse5 from '../../assets/AvatarEllipse5.png';
import deleteIcon from '../../assets/deleteIcon.svg';
import containerIcon from '../../assets/container.svg';

export default class UserPermission extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
        }
    }
  render() {
    return (
        <>
            <main className="user_permission">
            <ProfileSideDashboard />
            <section className="hero">
                <SettingsNavBar />
                
                <section className='content_container'>
                    <SettingsHeader />
                    
                    <div className="content_details">
                    <div className="header_wrapper">
                        <h2>User Permission</h2>
                        <span>Manage what users can see or do in your project</span>
                    </div>
                    
                    <div className="updates_container">
                        <div className="update_wrapper">
                            <div className='content'>
                                <h3>Notify on updates and activity</h3>
                                <p>You’ll be notified  when anyone shares a report or makes changes on a project</p>
                            </div>
                            
                            <div onClick={() => {
                                this.setState({
                                    toggle: !this.state.toggle
                                })
                            }} className={this.state.toggle ? "toggle_button" : "toggle_button active"}>
                                <div className={this.state.toggle ? "eclipse" : "eclipse active"}></div>
                            </div>
                        </div>
                        
                        <div className="update_wrapper">
                            <div className='content'>
                                <h3>Notify on updates and activity</h3>
                                <p>You’ll be notified  when anyone shares a report or makes changes on a project</p>
                            </div>
                            
                            <div className="toggle_button">
                                <div className="eclipse"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="member_container">
                        <div className="team_header_wrapper">
                            <h2>Team Members</h2>
                            <button>+ Add Members</button>
                        </div>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th className='icon'><img src={containerIcon} alt="" /></th>
                                    <th>Name</th>
                                    <th>Team role</th>
                                    <th>Date added</th>
                                    <th>Status</th>
                                    <th className='delete'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='icon'><img src={containerIcon} alt="" /></td>
                                    <td className='invitee_profile'>
                                        <img src={AvatarEclipse1} alt="image" />
                                        <div className="member_detail">
                                            <p>Jack Micheal</p>
                                            <span>@jack</span>
                                        </div>
                                    </td>
                                    <td>Designer</td>
                                    <td>March 22,2023.</td>

                                    <td className='status_active'>Active</td>

                                    <td><img src={deleteIcon} alt="" /></td>
                                
                                </tr>
                                
                                <tr>
                                    <td className='icon'><img src={containerIcon} alt="" /></td>
                                    <td className='invitee_profile'>
                                        <img src={AvatarEclipse2} alt="image" />
                                        <div className="member_detail">
                                            <p>Cynthia Ayomide</p>
                                            <span>@cynthiaA</span>
                                        </div>
                                    </td>
                                    <td>Developer</td>
                                    <td>March 22,2023.</td>

                                    <td className='status_offline'>Offline</td>

                                    <td><img src={deleteIcon} alt="" /></td>
                                
                                </tr>
                                
                                <tr>
                                    <td className='icon'><img src={containerIcon} alt="" /></td>
                                    <td className='invitee_profile'>
                                        <img src={AvatarEclipse3} alt="image" />
                                        <div className="member_detail">
                                            <p>Gideon Smart</p>
                                            <span>@gISM</span>
                                        </div>
                                    </td>
                                    <td>Admin</td>
                                    <td>March 22,2023.</td>

                                    <td className='status_active'>Active</td>

                                    <td><img src={deleteIcon} alt="" /></td>
                                
                                </tr>
                                
                                <tr>
                                    <td className='icon'><img src={containerIcon} alt="" /></td>
                                    <td className='invitee_profile'>
                                        <img src={AvatarEclipse4} alt="image" />
                                        <div className="member_detail">
                                            <p>Jenny Henry</p>
                                            <span>@jJennyH</span>
                                        </div>
                                    </td>
                                    <td>Project Manager</td>
                                    <td>March 22,2023.</td>

                                    <td className='status_offline'>Offline</td>

                                    <td><img src={deleteIcon} alt="" /></td>
                                
                                </tr>
                                
                                <tr>
                                    <td className='icon'><img src={containerIcon} alt="" /></td>
                                    <td className='invitee_profile'>
                                        <img src={AvatarEclipse5} alt="image" />
                                        <div className="member_detail">
                                            <p>Philip Frank</p>
                                            <span>@philip</span>
                                        </div>
                                    </td>
                                    <td>Designer</td>
                                    <td>March 22,2023.</td>

                                    <td className='status_active'>Active</td>

                                    <td><img src={deleteIcon} alt="" /></td>
                                
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
