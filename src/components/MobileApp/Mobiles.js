import { data } from './data'
import star from '../../assets/star.png'
import bstar from '../../assets/bstar2.png'
import { Link } from 'react-router-dom'
import './phone.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Mobiles = () => {
  const myData = useSelector((state) => state.mobiles)
  const filData = useSelector((state) => state.filter)

  const printStars = (rating) => {
    let st = []
    let rem = 5 - rating
    for (let i = 0; i < rating; i++) {
      st.push(star)
    }
    for (let i = 0; i < rem; i++) {
      st.push(bstar)
    }
    return st
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px',
      }}
    >
      {myData.length === 0 ? (
        <div style={{ paddingTop: '50px' }}>Sorry ! No items Found</div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '20px' }}>
          {myData.map((each) => {
            const { id, pname, pimg, price, colors, rating, memory } = each
            return (
              <div
                key={id}
                style={{
                  display: 'flex',
                  background: '#ffffff',
                  padding: '10px',
                  margin: '15px',
                  borderRadius: '5px',
                  boxShadow: '0px 0px 6px 2px rgb(0,0,0,0.2)',
                  width: '450px',
                }}
              >
                <div>
                  <Link to={`/mobile/${id}`}>
                    <img src={pimg} width='200px' alt='' />
                  </Link>
                </div>
                <div style={{ padding: '10px 0px 10px 20px' }}>
                  <h4>
                    <Link
                      to={`/mobile/${id}`}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {pname}
                    </Link>
                  </h4>
                  <br />
                  {printStars(rating).map((item) => {
                    return <img src={item} width='20px' alt='' />
                  })}
                  <br />
                  <br />
                  <h4>{price} Rs/-</h4>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Mobiles
