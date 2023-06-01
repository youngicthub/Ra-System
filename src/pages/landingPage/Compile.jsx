import React, { Component } from 'react'

import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import TrustedCompanies from './TrustedCompanies';
import KnowMore from './KnowMore';
import Faq from './Faq';
import BatchManagement from './BatchManagement';
import Management from './Management';
import { TrackingData, BatchData, HealthManagementData } from './data';


export default class Compile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <TrustedCompanies />
        <Management Data={HealthManagementData} />
        <BatchManagement Data={BatchData} />
        <Management Data={TrackingData} />
        <KnowMore />
        <Faq />
        <Footer />
      </>
    )
  }
}
