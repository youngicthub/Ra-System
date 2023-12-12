import React from 'react'
import '../../styles/Faq.scss'
// import img from '../../assets/Young.png'
// import fagImg from '../../assets/fagimg.png'
import up from '../../assets/UP.png'
const Faq = () => {
  return (
    <div>
      <div className="Faq">
        <div className="imgBx">
          {/* <img src={fagImg} alt="" /> */}
        </div>
        <div className="content">
          <h6>Frequently Asked Questions</h6>
          <div className="details">
            <p>How do i set up my account?</p>
            <p>Who registers the employee?</p>
            <p>Will the organisation have a special URL ?</p>
            <p>How many employee can I onboard?</p>
            <p>Can an admin use one account for different organisation?</p>
          </div>
        </div>

        <img className='img' src={up} alt="" />
      </div>
    </div>
  )
}

export default Faq