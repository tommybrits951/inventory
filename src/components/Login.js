import React, {useState, useContext} from 'react'
import { MainContext } from '../App'
import axios from 'axios'

function Login() {
    const {loginUser} = useContext(MainContext)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    
    function change(e) {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    function submit(e) {
        e.preventDefault()
        const login = formData
        axios.post('http://localhost:9000/api/auth/login', login)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            loginUser({username: login.username, name: res.data.name, token: res.data.token})
        })
        .catch(err => console.log(err))
    }
    return(
        
                <div className='formDiv'>
                    <form className='form' onSubmit={submit}>
                        <h3>Login to access inventory</h3>

                        
                            <label className='form-label'>
                            Username
                            <input 
                            name='username'
                            value={formData.username}
                            onChange={change}
                            required
                            type={'text'}
                            />
                        </label>
                            
                        
                            <label htmlFor='loginPassword' className='form-label'>
                            Password
                            <input
                            id='loginPassword'
                            type={'password'}
                            name="password"
                            value={formData.password}
                            onChange={change}
                            required
                            />
                            </label>
                            
                    <button className='btn btn-primary subBtn'>Submit</button>        
                    </form>
                </div>
    )
}

export default Login