import React from 'react';
import './style.css'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {auth} from '../../services/firebaseConnection'
import {signOut} from 'firebase/auth'

export default function Header() {
    
    async function handleLogout(){
        await signOut(auth);
    }

    return (
        <div className='admin-header'>
            <nav className='nav-header'>
                <button onClick={handleLogout}>
                    <BiLogOut size={28} color="#FF0000"/>
                </button>
                <Link to="/admin">
                    Links
                </Link>
                <Link to="/admin/social">
                    Redes Sociais
                </Link>
            </nav>
        </div>
    );
}