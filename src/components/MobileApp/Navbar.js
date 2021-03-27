import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/fplogo2.png'
import cart from '../../assets/cart2.png'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import { SER_ITEM } from '../../actions/actions'
import { useState } from 'react'

const Navbar = () => {
  const myData = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '65px',
        boxShadow: '0px 0px 10px 8px rgb(0,0,0,0.3)',
        padding: '0px 50px 0px 50px',
        background: '#2874f0',
        position: 'fixed',
        width: '100%',
        top: '0',
      }}
    >
      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'flex-end',
          textAlign: 'right',
          flexDirection: 'column',
        }}
      >
        <Link to='/'>
          <img
            onClick={() => console.log('image clicked')}
            src={logo}
            width='75px'
            height='19px'
            alt=''
          />
        </Link>

        <span style={{ fontSize: '13px', fontStyle: 'italic', color: 'white' }}>
          Explore <span style={{ color: 'yellow' }}>Plus</span>
        </span>
      </div>
      <div
        style={{
          flex: '3',
          paddingLeft: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch({ type: SER_ITEM, payLoad: searchTerm })
          }}
        >
          <input
            style={{
              padding: '11px 8px 11px 8px',
              fontSize: '14px',
              width: '500px',
              border: 'none',
              outline: 'none',
              borderTopLeftRadius: '2px',
              borderBottomLeftRadius: '2px',
              background: '#ffffff',
              boxShadow: '0px 1px 3px 1px rgb(0,0,0,0.2)',
            }}
            type='text'
            name=''
            id=''
            placeholder='Search,Products and more'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
        </form>
        <SearchIcon
          style={{
            background: '#ffffff',
            padding: '7px',
            borderTopRightRadius: '2px',
            borderBottomRightRadius: '2px',
            boxShadow: '0px 1px 3px 1px rgb(0,0,0,0.2)',
            fontSize: '25px',
          }}
        />

        <button
          style={{
            background: '#ffffff',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            padding: '7px 40px 7px 40px',
            color: '#2874f0',
            fontWeight: '600',
            borderRadius: '2px',
            marginLeft: '200px',
          }}
        >
          Login
        </button>
      </div>

      <div
        style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={
            myData.length != 0
              ? {
                  position: 'relative',
                  backgroundColor: 'red',
                  height: '12px',
                  width: '12px',
                  textAlign: 'center',
                  padding: '3px 10px 6px 6px',
                  borderRadius: '50px',
                  left: '60px',
                  top: '-4px',
                  color: 'white',
                  border: '2px solid white',
                }
              : {
                  display: 'none',
                }
          }
        >
          {myData.length}
        </div>
        <Link to='/addcart'>
          <img src={cart} width='50px' alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
