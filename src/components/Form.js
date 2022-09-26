import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../firebaseConfig'

const Form = ({cart, totalCarrito, confirmarCompra}) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) =>{
      event.preventDefault()
      const order = {
        buyer:{
          name: name,
          lastName: lastName,
          phone: phone,
          email: email
        },
        items: [
          ...cart
        ], 
        total: totalCarrito,
        date: serverTimestamp()
      }   

      const ordersCollection = collection(db,'orders')
      
      addDoc(ordersCollection, order)
        .then((res) => {
          confirmarCompra(res.id, order)
        })

      // Modificar los stocks de los items en la base de datos
      const itemsCollection = collection(db,'productos')
      
      const updateStock = (itemId, cantidadComprada) => {
        const itemDoc = doc(itemsCollection, itemId)
        getDoc(itemDoc)
        .then((res) =>{
            const newStock = res.data().stock - cantidadComprada;
            updateDoc(itemDoc, {stock : newStock})          
          }
        )
      }

      order.items.forEach(element => {
        const docId = element.id;
        updateStock(docId, element.cantidad)
      });
     }

    const handleNameChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleLastNameChange = (event) => {
      event.preventDefault()
      setLastName(event.target.value)
    }

    const handlePhoneChange = (event) => {
      event.preventDefault()
      setPhone(event.target.value)
    }

    const handleEmailChange = (event) => {
      event.preventDefault()
      setEmail(event.target.value)
    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" value={name} placeholder='Nombre' onChange={handleNameChange} />
        <input type="text" value={lastName} placeholder='Apellido' onChange={handleLastNameChange} />
        <input type="number" value={phone} placeholder='Teléfono' onChange={handlePhoneChange} />
        <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} />
        <button>Confirmar compra</button>
    </form>
  )
}

export default Form