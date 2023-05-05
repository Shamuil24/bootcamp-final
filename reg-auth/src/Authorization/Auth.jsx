import { useCallback, useState } from 'react'
import './Auth.css'
import { useNavigate } from 'react-router'

const Auth = () => {

    const [data, setData] = useState()

    const submit = useCallback(() => {
        console.log(data);
    }, [data])

    const router = useNavigate()

    return (
        <div className='auth__container'>
            <div className='auth__moduls'>
                <div className='auth__buttons'>
                    <button onClick={() => router('/login')}>Вход</button>
                    <button onClick={() => router('/register')}>Регистрация</button>
                </div>
                <div className='auth__inputs'>
                    <input onChange={e => setData(prev => ({ ...prev, email: e.target.value }))} type="text" className='auth__input' placeholder='Email' />
                    <input onChange={e => setData(prev => ({ ...prev, password: e.target.value }))} type="password" className='auth__input' placeholder='Пароль' />
                    <div className='auth__checkbox'>
                        <input onChange={e => setData(prev => ({ ...prev, rememberMe: e.target.checked }))} type="checkbox" className='auth__check' />
                        <p>Запомнить меня</p>
                    </div>
                    <div className='auth__login__btn'>
                        <button onClick={submit}>ВОЙТИ</button>
                    </div>
                </div>
                <div className='auth__forgot__pass'>
                    <hr />
                    <button>Забыли пароль?</button>
                </div>
            </div>
        </div>
    )
}

export default Auth