import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleSubmit = (event) =>{
      event.preventDefault()
      console.log(`Datos ingresados: ${name} ${lastName}`)
    }
    const handleNameChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleLastNameChange = (event) => {
      event.preventDefault()
      setLastName(event.target.value)
    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" value={name} placeholder='Nombre' onChange={handleNameChange} />
        <input type="text" value={lastName} placeholder='Apellido' onChange={handleLastNameChange} />
        <button>Confirmar compra</button>
    </form>
  )
}

export default Form