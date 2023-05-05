import { useNavigate } from 'react-router'
import './Reg.css'
import { useState } from 'react'

const Reg = () => {

    const [data, setData] = useState()

    const router = useNavigate()
    
    return (
        <div className='reg__container'>
            <div className='reg__moduls'>
                <div className='reg__buttons'>
                    <button onClick={() => router('/login')}>Вход</button>
                    <button onClick={() => router('/register')}>Регистрация</button>
                </div>
                <div className='reg__inputs'>
                    <input onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} type="text" className='reg__input' placeholder='Имя'/>
                    <input onChange={e => setData(prev => ({ ...prev, surname: e.target.value }))} type="text" className='reg__input'placeholder='Фамилия'/>
                    <input onChange={e => setData(prev => ({ ...prev, email: e.target.value }))} type="text" className='reg__input'placeholder='Email'/>
                    <input onChange={e => setData(prev => ({ ...prev, password: e.target.value }))} type="password" className='reg__input' placeholder='Пароль'/>
                    <input onChange={e => setData(prev => ({ ...prev, password: e.target.value }))} type="password" className='reg__input' placeholder='Подтвердите пароль'/>
                <div className='reg__login__btn'>
                    <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </div>
                 </div>
            </div>
        </div>
    )
}

export default Reg