import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

function ProductMiniMenu() {
  return (
    <div className='py-[120px]'>
        <div>
          <img src="" alt="" />
            <h1>HEADPHONES</h1>
            <Link className='flex items-center gap-3'>
            <span>Shop</span>
            <FaChevronRight className='text-sepia'/>
            </Link>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default ProductMiniMenu