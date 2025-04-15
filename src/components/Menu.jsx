import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <NavLink style={({isActive}) => isActive ? {color: 'lightyellow', textDecoration: 'none' } : {}} to='.' end>Главная</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='courses'>Курсы</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='about'>О Нас</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='contacts'>Контакты</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to='profile'>Профиль</NavLink>
    </nav>
  )
}

export default Menu