import { ExploreOffOutlined, SportsRugby } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { DECREASE, INCREASE, REM_ITEM } from '../../actions/actions'
import { useState } from 'react'

const Addcart = () => {
  const myData = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [ID, setID] = useState('')

  return (
    <div style={{ position: 'relative', top: '65px' }}>
      <div
        className='cartmain'
        style={
          myData.length < 3
            ? { height: `${310 * myData.length}px` }
            : { height: '620px' }
        }
      >
        <div
          style={{
            flex: '2',
            background: '#ffffff',
            margin: '10px',
            boxShadow: '0px 0px 8px 1px rgb(0, 0, 0, 0.2)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid whitesmoke',
              padding: '10px 20px 10px 20px',
            }}
          >
            <div style={{ flex: '1', padding: '10px' }}>
              <h3>
                My Cart(
                {myData.length})
              </h3>
            </div>
            <div style={{ flex: '1' }}>
              <input
                placeholder='Enter Delivery Code'
                type='text'
                style={{
                  border: 'none',
                  borderBottom: '3px solid #2874f0',
                  padding: '4px',
                  outline: 'none',
                }}
              />
            </div>
          </div>
          {myData.length === 0 && (
            <div
              style={{
                height: '152px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Your cart is Empty!!!
            </div>
          )}
          <div
            style={
              myData.length < 3 ? {} : { height: '460px', overflow: 'auto' }
            }
          >
            {myData.map((each) => {
              const { pimg, pname, price, id, amt } = each
              return (
                <div
                  style={{
                    display: 'flex',
                    padding: '30px 20px 30px 20px',
                    background: '#ffffff',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <img src={pimg} width='120px' alt='' />
                    <div style={{ display: 'flex', marginTop: '15px' }}>
                      <button
                        style={{
                          padding: '6px 13px 6px 13px',
                          border: 'none',
                          borderRadius: '100px',
                          fontSize: '18px',
                          cursor: 'pointer',
                          outline: 'none',
                          background: '#fdfdfd',
                          border: '1px solid #e0e0e0',
                        }}
                        onClick={() =>
                          dispatch({
                            type: DECREASE,
                            payLoad: { id: id, amt: amt },
                          })
                        }
                      >
                        -
                      </button>
                      <div
                        style={{
                          width: '50px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0px 5px 0px 5px',
                          background: '#fdfdfd',
                          border: '1px solid #e0e0e0',
                        }}
                      >
                        {amt}
                      </div>
                      <button
                        style={{
                          padding: '6px 11px 6px 11px',
                          border: 'none',
                          borderRadius: '100px',
                          fontSize: '18px',
                          cursor: 'pointer',
                          outline: 'none',
                          background: '#fdfdfd',
                          border: '1px solid #e0e0e0',
                        }}
                        onClick={() =>
                          dispatch({
                            type: INCREASE,
                            payLoad: { id: id, amt: amt },
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '15px' }}>
                    <span
                      style={{
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        display: 'inline-block',
                        margin: '5px 0px 5px 0px',
                      }}
                    >
                      {pname}
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'gray',
                        display: 'inline-block',
                        margin: '5px 0px 5px 0px',
                      }}
                    >
                      Seller:TrueComRetail
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        display: 'inline-block',
                        margin: '15px 0px 15px 0px',
                      }}
                    >
                      &#8377;{price} Rs/-
                    </span>
                    <br />
                    <div style={{ marginTop: '37px' }}>
                      <span style={{ fontSize: '14px' }}>SAVE FOR LATER</span>
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                      <span
                        style={{
                          fontSize: '14px',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          setID(id)
                          setShow(!show)
                        }}
                      >
                        REMOVE
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      margin: '5px 0px 5px 0px',
                      flex: '2',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '14px' }}>
                        Delivery by Sun Mar 28 |{' '}
                        <span style={{ color: 'green' }}>Free</span>{' '}
                        <del>&#8377;80</del>
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: '11px',
                          color: '#999093',
                        }}
                      >
                        7 Days Replacement Policy
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div
            style={{
              textAlign: 'right',
              padding: '15px',
              background: 'white',
              boxShadow: '0px -2px 8px 2px rgb(0,0,0,0.1)',
            }}
          >
            <button
              style={{
                background: '#fb641b',
                border: 'none',
                color: 'white',
                width: '250px',
                height: '50px',
                fontSize: '18px',
                borderRadius: '3px',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
        <div
          style={{
            flex: '1',
            background: '#ffffff',
            margin: '10px',
            boxShadow: '0px 0px 8px 1px rgb(0,0,0,0.2)',
            height: '300px',
          }}
        >
          <div>
            <div style={{ padding: '15px', border: '1px solid whitesmoke' }}>
              <span
                style={{
                  color: '#969696',
                  fontWeight: '500',
                }}
              >
                PRICE DETAILS
              </span>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ padding: '15px 20px 15px 20px', flex: '1' }}>
                <span>Price ({myData.length} items )</span>
                <br />
                <br />
                <span>Discount</span>
                <br />
                <br />
                <span>Delivery Charges</span>
              </div>
              <div
                style={{
                  padding: '15px 20px 15px 20px',
                  flex: '1',
                  textAlign: 'right',
                }}
              >
                <span>
                  &#8377;
                  {parseInt(
                    myData.reduce((count, each) => {
                      let tot = each.price * each.amt
                      count = count + tot
                      return count
                    }, 0)
                  )}
                </span>
                <br />
                <br />
                <span style={{ color: 'green' }}>
                  - &#8377;
                  {parseInt(
                    myData.reduce((count, each) => {
                      let tot = each.price * each.amt
                      count = count + tot
                      return count
                    }, 0) * 0.15
                  )}
                </span>
                <br />
                <br />
                <span style={{ color: 'green' }}>Free</span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                borderTop: '2px dashed whitesmoke',
                borderBottom: '2px dashed whitesmoke',
                margin: '0px 20px 0px 20px',
              }}
            >
              <div
                style={{
                  flex: '1',
                  padding: '25px 0px 25px 0px',
                  fontWeight: '600',
                }}
              >
                Total Amount
              </div>
              <div
                style={{
                  flex: '1',
                  textAlign: 'right',
                  padding: '25px 0px 25px 0px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                }}
              >
                &#8377;
                {parseInt(
                  myData.reduce((count, each) => {
                    let tot = each.price * each.amt
                    count = count + tot
                    return count
                  }, 0) -
                    myData.reduce((count, each) => {
                      let tot = each.price * each.amt
                      count = count + tot
                      return count
                    }, 0) *
                      0.15
                )}
              </div>
            </div>
            <div style={{ padding: '15px', color: 'green' }}>
              You will save ₹
              {parseInt(
                myData.reduce((count, each) => {
                  let tot = each.price * each.amt
                  count = count + tot
                  return count
                }, 0) * 0.15
              )}{' '}
              on this order
            </div>
          </div>
        </div>
      </div>

      <div
        style={
          show
            ? {
                position: 'absolute',
                top: '-65px',
                background: 'rgb(0,0,0,0.6)',
                width: '100%',
                height: '760px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s',
              }
            : { display: 'none' }
        }
      >
        <div
          style={{
            background: '#ffffff',
            width: '320px',
            height: '160px',
            padding: '25px 35px 25px 35px',
            borderRadius: '3px',
          }}
        >
          <div>
            <span style={{ fontWeight: '600' }}>Remove Item</span>
            <br />
            <br />
            <span>Are you sure you want to remove this item?</span>
          </div>
          <br />
          <br />
          <br />
          <div style={{ display: 'flex' }}>
            <div
              style={{ flex: '1', display: 'flex', justifyContent: 'center' }}
            >
              <button
                style={{
                  padding: '10px 40px 10px 40px',
                  background: '#ffffff',
                  border: '1px solid lightgray',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none',
                }}
                onClick={() => setShow(!show)}
              >
                CANCEL
              </button>
            </div>
            <div
              style={{ flex: '1', display: 'flex', justifyContent: 'center' }}
            >
              <button
                style={{
                  padding: '10px 40px 10px 40px',
                  background: '#2874f0',
                  border: '1px solid #2874f0',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  outline: 'none',
                }}
                onClick={() => {
                  dispatch({ type: REM_ITEM, payLoad: ID })
                  setShow(!show)
                }}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '50px',
            height: '50px',
            marginTop: '-180px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '40px',
            color: 'white',
            cursor: 'pointer',
          }}
          onClick={() => setShow(!show)}
        >
          x
        </div>
      </div>
    </div>
  )
}

export default Addcart
