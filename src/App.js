import React, {createContext, useEffect, useState} from 'react'
import './App.css';
import { initUser } from './components/values';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
export const MainContext = createContext()
import axios from 'axios'
function App() {
  const [user, setUser] = useState(initUser)
  const [loc, setLoc] = useState([])
  
  function loginUser(user) {
    setUser({
      username: user.username,
      token: user.token,
      name: user.name,
      role_id: user.role_id
    })
  }
  



  useEffect(() => {
    const getLoc = () => {
      axios.get('http://localhost:9000/locations')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }


  }, [])

  return (
    <MainContext.Provider
    value={{
      loginUser: loginUser
    }}
    >

    <div className="App">
      {user.token === '' ? <Login /> : undefined}
    </div>
    </MainContext.Provider>
  );
}

export default App;
