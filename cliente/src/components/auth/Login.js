import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  // State para iniciar sesión
  const [usuario, setUsuario] = useState({
    email: "",
    password: ""
  })

  const { email, password } = usuario

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    // Validar que no haya campos vacios

    // Pasarlo al action
  }


  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form action="" onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Tu Email" value={email} onChange={onChange}/>
          </div>

          <div className="campo-form">
            <label htmlFor="password">Paswword</label>
            <input type="password" name="password" id="password" placeholder="Tu Password" value={password} onChange={onChange}/>
          </div>

          <div className="campo-form">
            <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block" />
          </div>
        </form>

        <Link to={'/nueva-cuenta'} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  )
}

export default Login
