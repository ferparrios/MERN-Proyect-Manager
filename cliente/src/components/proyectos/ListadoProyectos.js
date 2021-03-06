import React from 'react'
import Proyecto from './Proyecto'

const ListadoProyectos = () => {

  const proyectos = [
    {nombre: 'Tienda Virtual'},
    {nombre: 'Intranet'},
    {nombre: 'Diseño de Sitios Web'}
  ]

  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => (
        <Proyecto  proyecto={proyecto} />
      ))}
    </ul>
  )
}

export default ListadoProyectos
