import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet servers as a virtual marketplace where buisness and individual showcase their products, interact with customers, and conduct transaction without the need for a physical presence. E-commerce website have gained immense popularity due to their convience accessibility, and the global reach they offer.</p>
        <p>E-commerce website typically display product or services along with detailed description, images, prices and any available variations (e.g., sizes,colors). Each product usually has it's own dedicated with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
