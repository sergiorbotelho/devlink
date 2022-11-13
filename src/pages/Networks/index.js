import React, { useState, useEffect } from 'react';
import './style.css';
import Input from '../../components/Input';
import Header from '../../components/Header';
import { MdAddLink } from 'react-icons/md'
import { db } from '../../services/firebaseConnection';
import {
    setDoc,
    doc,
    getDoc
} from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Networks() {
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [linkedin, setLinkedin] = useState('');

    useEffect(() => {
        async function loadLinks() {
            const docRef = doc(db, "social", "link");
            await getDoc(docRef)
                .then((snapshot) => {
                    if (snapshot.data() !== undefined) {

                        setFacebook(snapshot.data().facebook);
                        setInstagram(snapshot.data().instagram);
                        setLinkedin(snapshot.data().linkedin)
                    }
                })
                .catch((error) => {
                    console.error(error)
                })
        }
        loadLinks();
    }, [])

    function handleSave(e) {
        e.preventDefault();
        setDoc(doc(db, 'social', "link"), {
            facebook: facebook,
            instagram: instagram,
            linkedin: linkedin
        })
            .then(() => {
                toast.success("Urls salvas com sucesso")
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div className='admin-container'>
            <Header />
            <h1 className='title-social'>Suas redes sociais</h1>

            <form className='form' onSubmit={handleSave}>
                <label className='label'>Link do Facebook</label>
                <Input
                    placeholder="Digite a url do facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />
                <label className='label'>Link do Instagram</label>
                <Input
                    placeholder="Digite a url do Instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <label className='label'>Link do Linkedin</label>
                <Input
                    placeholder="Digite a url do Linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />
                <button type='submit' className='btn-register'>
                    Salvar links <MdAddLink size={24} color="#FFF" />
                </button>
            </form>
        </div>
    );
}