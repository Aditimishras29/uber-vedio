import React, { createContext } from 'react'

export const userDataContext = createContext()   

const usercontext = ({children}) => {

    const [user, setUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })

  
  return (
    <div>
      <userDataContext.provider value={[user , setUser]}>
        {children}
      </userDataContext.provider>
          </div>
  )
}

export default usercontext
