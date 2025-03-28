import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
    const [isLoading, setIsLoading] = useState(true)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/user/logout`, 
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                if (response.status === 200) {
                    localStorage.removeItem('token')
                    navigate('/login')
                }
            } catch (error) {
                console.error('Logout failed:', error)
                navigate('/login')
            } finally {
                setIsLoading(false)
            }
        }

        logoutUser()
    }, [navigate, token])

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">
            Logging out...
        </div>
    }

    return null
}

export default UserLogout