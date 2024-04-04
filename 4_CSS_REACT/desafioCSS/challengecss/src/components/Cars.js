import React from 'react'
// import styles from './Car.modules.css'

const Cars = ({car}) => {


  return (
    <div>
            <div className='styled_cars'>
            <h1>{car.name}</h1>
            <p>{car.km}</p>
            <p>{car.color}</p>

            </div>
        </div>
  )
}

export default Cars