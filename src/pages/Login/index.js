import React, { useState } from 'react';
import Logo from '../../components/Logo'
import './style.css'
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import Input from '../../components/Input';
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        if (email === '' || setPassword === '') {
            alert('Preencha todos os campos')
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('Bem vindo de volta!')
                navigate("/admin", { replace: true })
            })
            .catch((error) => {
                toast.error('Usuário ou Senha inválido')
            })


    }
    return (
        <div className='login-container'>
            <Logo />
        
            <form className='form' onSubmit={handleLogin}>
                
                <Input
                    type="email"
                    placeholder='Digite seu email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <Input
                    type="password"
                    placeholder='*******'
                    autoComplete='on'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Acessar</button>
            </form>
        </div>
    );
}