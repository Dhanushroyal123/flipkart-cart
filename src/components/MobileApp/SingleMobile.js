import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { data } from './data'
import { Link } from 'react-router-dom'
import bstar from '../../assets/bstar2.png'
import star from '../../assets/star.png'
import { Button } from 'bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ITEM } from '../../actions/actions'

const SingleMobile = () => {
  const myData = useSelector((state) => state)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [mobile, setMobile] = useState([])

  useEffect(() => {
    const newMobile = data.find((each) => each.id === parseInt(id))
    setMobile([newMobile])
  }, [])
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
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      {mobile.map((each) => {
        const { pname, pimg, price, comp, rating, colors, memory } = each

        return (
          <div style={{ display: 'flex', padding: '0px 150px 0px 150px' }}>
            <div>
              <img src={pimg} width='300px' alt='' />
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <h3 style={{ textTransform: 'capitalize' }}>{pname}</h3>
              <br />
              <span style={{ fontSize: '14px' }}>
                by&nbsp;
                <a href='#' style={{ color: '#087dd5' }}>
                  {comp}
                </a>
              </span>
              <br />
              <br />
              <h3>{price} Rs/-</h3>
              <br />
              {printStars(rating).map((item) => {
                return <img src={item} width='20px' alt='' />
              })}
              <br />
              <br />
              <span style={{ textAlign: 'justify' }}>
                This phone must be purchased with a monthly carrier plan and
                will be locked to the selected carrier.
                <br /> Get up to $75.00 over 24 months added to your Amazon.com
                Gift Card balance ($3.13/month every
                <br /> month you’re subscribed). Limit 1 iPhone and wireless
                plan per account.{' '}
                <span style={{ color: '#087dd5' }}>Learn more</span>
              </span>
              <br />
              <br />
              <Link to='/addcart'>
                <button
                  onClick={() =>
                    dispatch({ type: ADD_ITEM, payLoad: parseInt(id) })
                  }
                  style={{
                    background: '#fb641b',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px 10px 15px',
                    fontSize: '16px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  BUY NOW
                </button>
              </Link>
              <br />
              <br />
              <span style={{ color: '#087dd5' }}>colors:</span>
              <br />
              <br />
              {colors.map((each) => {
                return (
                  <span
                    style={{
                      margin: '4px',
                      padding: '10px 15px 10px 15px',
                      border: '1px solid black',
                      textTransform: 'capitalize',
                      borderRadius: '3px',
                    }}
                  >
                    <span
                      style={{
                        color: each,
                        padding: '3px 6px 3px 6px',
                        borderRadius: '100px',
                        background: each,
                      }}
                    >
                      H
                    </span>
                    &nbsp;
                    {each}
                  </span>
                )
              })}
              <br />
              <br />
              <span style={{ color: '#087dd5' }}>Memory:</span>
              <br />
              <br />
              {memory.map((each) => {
                return (
                  <span
                    style={{
                      margin: '4px',
                      padding: '10px 15px 10px 15px',
                      border: '1px solid black',
                      textTransform: 'capitalize',
                      borderRadius: '3px',
                    }}
                  >
                    {each}
                  </span>
                )
              })}
              <br />
              <br />
              <div style={{ border: '1px solid lightgray' }}>
                <h2 style={{ padding: '10px' }}>Specifications</h2>
                <div style={{ padding: '15px' }}>
                  <h4 style={{ padding: '15px' }}>Display Features</h4>
                  <span style={{ paddingLeft: '15px' }}>
                    <span style={{ color: 'gray' }}>Display Size</span>: 15.49
                    cm(6.1 inches)
                  </span>
                  <br />
                  <br />
                  <span style={{ paddingLeft: '15px' }}>
                    <span style={{ color: 'gray' }}>Resolution</span>: 1792 x
                    828 Pixels
                  </span>
                  <br />
                  <br />
                  <span style={{ paddingLeft: '15px' }}>
                    <span style={{ color: 'gray' }}>Resolution Type</span>:
                    Liquid Retina HD Display
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SingleMobile
