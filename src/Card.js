import React from 'react'
import img from './image/1.jfif'
function Card() {
  return (
    <div className='Card'>
        <div className='left-side'>
           <img src={img} alt='a'/>
        </div>
        <div className='right-side'>
            <h3>PARFUM</h3>
            <h2>Gabrielle Essence Eau De Parfum</h2>
            <p>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <div>
                <span>$149.99</span>
                <span>$165.00</span>
            </div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card