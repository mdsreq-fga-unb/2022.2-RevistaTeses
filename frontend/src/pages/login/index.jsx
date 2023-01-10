import React, { useState } from 'react'
import { api } from '../../api/index'
import '../login/styles.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        await api.post("/auth/login", {email: email, password: password})
        .then(function(res){
            console.log(res.data)
        })
    }

  return ( 
    <div id="login">
        <h1 className='title'>Login do sistema</h1>
        <div>
            <div className='container'>
                <form>
                <div className='field'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email'/> 
                </div>
                <div className='field'>
                    <label htmlFor='password'>Senha</label>
                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} id='password'/>
                </div>
                <div className='actions'>
                    <button type='button' onClick={() => handleLogin()}>Entrar</button>
                </div>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Login