import React, { useEffect, useState } from 'react'
import logo_image from '../assets/image/logov3.png'
import member_image from '../assets/image/memberSection.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logOut } from '../../store/UserSlice'

const AccountPage = () => {

  const dispatch = useDispatch()
  const [userData, setUserData] = useState([])
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)
  const localtoken = localStorage.getItem('token')

  const handleLogout = () => {
    dispatch(logOut())
    navigate('/')
    navigate(0)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    dispatch(getUser(localtoken)).then((res) => setUserData(res.payload.data))
  }, [])

  return (
    <>
      <section>
        <div className='container-section py-[100px]'>
          <div className='grid grid-cols-1 md:grid-cols-[35%_62%] gap-10 text-[14px] sm:text-[15px] lg:text-[16px]'>
            <div className='bg-blackBlue p-[33px_25px] rounded-lg'>
              <div className='flex justify-center'>
                <img className='max-w-[180px]' src={logo_image} alt="" />
              </div>
              <div className='text-white flex flex-col gap-2 mb-8 my-6'>
                <div className='flex justify-between'>
                  <span>ID :</span>
                  <span>{userData.id}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Firstname :</span>
                  <span>{userData.firstname}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Lastname :</span>
                  <span>{userData.lastname}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Email :</span>
                  <span>{userData.email}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Phone :</span>
                  <span>{userData.phone}</span>
                </div>
              </div>
              <button onClick={handleLogout} className='p-[0.7rem] bg-[#ff8080] rounded-lg w-full hover:bg-[#f89090]'>Logout</button>
            </div>
            <div className='rounded-lg flex items-center justify-center p-10 relative overflow-hidden before:content-[""] before:absolute before:bg-[#000000b3] before:z-[-9] before:w-full before:h-screen'>
              <img className='absolute z-[-10] top-0 w-full h-full object-cover' src={member_image} alt="" />
              <div className='text-center flex flex-col justify-center items-center gap-7'>
                <h1 className='text-[22px] sm:text-[28px] lg:text-[30px] text-white font-semibold'>want to join Monthly member to receive special privileges</h1>
                <Link to={'/membership'} onClick={() => window.scrollTo(0, 0)} className='bg-yellow p-[10px] w-[200px] rounded-lg hover:bg-yellowHover'>Go to membership</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AccountPage