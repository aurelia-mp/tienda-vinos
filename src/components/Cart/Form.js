import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useState, useContext} from 'react'
import { db } from '../../firebaseConfig'
import { CartContext } from '../../context/CartContext'
import Order from './Order'


const Form = () => {
    const {cart, clearCart, totalCarrito} = useContext(CartContext)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')   
    const [orden, setOrden] = useState({})
    const [idCompra, setIdCompra] = useState('')

    const confirmarCompra = (id, orden) => {
      setIdCompra(id)
      setOrden(orden)
      clearCart()
    }

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
      
      if(order.items.length!==0) {
       addDoc(ordersCollection, order)
        .then((res) => {
          confirmarCompra(res.id, order)
        })
        .catch(error => console.log("Error al crear la orden" + error))

        const itemsCollection = collection(db,'productos')
        
        const updateStock = (itemId, cantidadComprada) => {
          const itemDoc = doc(itemsCollection, itemId)
          getDoc(itemDoc)
          .then((res) =>{
              const newStock = res.data().stock - cantidadComprada;
              updateDoc(itemDoc, {stock : newStock})          
            })
          .catch(error => console.log("Error al actualizar el stock" + error))

        }

        order.items.forEach(element => {
          const docId = element.id;
          updateStock(docId, element.cantidad)
        });
      }

      else{
        alert("Error. Tu carrito está vacío. No se pudo crear tu orden")
      }
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
    !idCompra ?
    <div className='formContainer'>
      <h2>Por favor, completá los datos a continuación para confirmar tu compra:</h2>
      <form className="formulario" onSubmit={handleSubmit} >
          <input type="text" value={name} placeholder='Nombre' required onChange={handleNameChange} />
          <input type="text" value={lastName} placeholder='Apellido' required onChange={handleLastNameChange} />
          <input type="number" value={phone} placeholder='Teléfono' required onChange={handlePhoneChange} />
          <input type="email" value={email} placeholder='Email' required onChange={handleEmailChange} />
          <button className="btn botonComprar">Confirmar compra</button>
      </form>
    </div>
    :
    <Order id={idCompra} orden={orden} />
  )
}

export default Form