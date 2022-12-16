import React from 'react'
import '../login/styles.css'

const Login = () => {
  return ( 
    <div id="login">
        <header> <h1 className='title'>Login do sistema</h1></header>
        <div>
        <body>
            <div className='container'>
                <h1>
                    cade o container?
                </h1>
                <div>
                <button type='submit'>Entrar</button>
                </div>
                {/* <form className='form'>
                <div className='field'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' id='email'> </input>
                </div>
                <div className='field'>
                    <label htmlFor='password'>Senha</label>
                    <input type="password" name='password' id='password'> </input>
                </div>
                <div className='actions'>
                    <button type='submit'>Entrar</button>
                </div>
                </form> */}
            </div>
        </body>
        </div>
    </div>
  )
}

export default Login