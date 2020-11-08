import React, { useState } from 'react'
import {Redirect, useHistory} from 'react-router-dom'

export const Index = () => {
    const [pseudo, setPseudo] = useState('')
    const history  = useHistory()

    const handleChange = e => {
        setPseudo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(pseudo.length > 2){
            localStorage.setItem('pseudo', pseudo)
            history.push('/chat')        
        }
    }


    return (
        <div className="container">
            <div className="row indexPage">
                <div className="col-lg-12 d-flex align-items-center">
                    <div>
                        <h1>Entrez votre pseudo</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type='text' name='pseudo' placeholder='Votre pseudo' className='form-control' value={pseudo} onChange={handleChange}/>
                            </div>
                            <button type='submit' className='btn btn-primary mt-2'>Entrer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}