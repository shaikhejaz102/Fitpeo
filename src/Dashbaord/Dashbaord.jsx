import React from 'react'
import "./Dashbaord.scss"
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Navbar/Navbar';
import Value from '../Values/Value';

const Dashbaord = () => {
  return (
    <div className="dashboard">
    <Header />
    <div className="main-content">
      <Sidebar />
      <div className="content">
        <div>
          <Value />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashbaord