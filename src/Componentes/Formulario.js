import { useState } from 'react'
import './Formulario.css'


const Formulario=()=>{

    const usuario={
        name:'',
        lastName:'',
        email:'',
    }
    const [enteredName,setName]=useState('')
    const [enteredLastName,setLastName]=useState('')
    const [enteredEmail,setEmail]=useState('')


    const nameHandler=(event)=>{
        setName(event.target.value)
    }

    const lastNameHandler=(event)=>{
        setLastName(event.target.value)
    }

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    

    const submitHandler=()=>{
        const usuario={
            name:enteredName,
            lastName:enteredLastName,
            email:enteredEmail,
        }
        
        alert(JSON.stringify(usuario, null, 4))
    }

        return(
            <div className="formulario">
                <h1 className="titulo-formulario">{enteredName}</h1>
                <h1 className="titulo-formulario">{enteredLastName}</h1>
                <h1 className="titulo-formulario">{enteredEmail}</h1>
                <h1 className="titulo-formulario">Preencha os dados</h1>
                <form onSubmit={submitHandler}>
                    <div className="item-formulario">
                        <label className='label-formulario'>Nome</label>
                        <input onChange={nameHandler} className="input-formulario"/>
                    </div>
                    <div className="item-formulario">
                        <label className='label-formulario'>Sobrenome</label>
                        <input onChange={lastNameHandler} className="input-formulario"/>
                    </div>
                    <div className="item-formulario">
                        <label className='label-formulario'>E-mail</label>
                        <input onChange={emailHandler} className="input-formulario"/>
                    </div>
                    <button type='submit'>Enviar</button>

                </form>
            </div>
        )

}

export default Formulario