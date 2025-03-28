import React, {useContext , useEffect, useState }from 'react'
import { UserDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
    children 
}) => { 

    const token = localStorage.getItem('token')  
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const {isLoading, setIsLoading} = useState(true)




    useEffect(() => {
      if(!token){
        navigate('/login')
      }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
        setCaptain(response.data.captain)
        setIsLoading(false)
    })
    .catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')

    })


    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper

