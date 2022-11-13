import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
export default function Error() {
    return (
        <div className='error'>
            <Logo/>
            <h1>PAGINA NÃO ENCONTRADA</h1>
            <p>Esta página que está procurando não existe</p>
            <Link to='/' className='link'>
                Voltar para Home
            </Link>
        </div>
    );
}