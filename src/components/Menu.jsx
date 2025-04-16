import React from 'react';
import { NavLink } from 'react-router-dom';
import { User as UserIcon, Home } from 'react-feather';
import './styles/Menu.css';

const Menu = () => {
  return (
    <nav className="menu-container">
      {/* Главная слева */}
      <NavLink 
        to="." 
        end
        className={({isActive}) => isActive ? 'activeLink menu-link' : 'link menu-link'}
      >
        <Home size={16} className="menu-icon" />
        Главная
      </NavLink>

      {/* Центральная группа */}
      <div className="menu-center">
        <NavLink 
          to="courses"
          className={({isActive}) => isActive ? 'activeLink menu-link' : 'link menu-link'}
        >
          Курсы
        </NavLink>
        <NavLink 
          to="about"
          className={({isActive}) => isActive ? 'activeLink menu-link' : 'link menu-link'}
        >
          О Нас
        </NavLink>
        <NavLink 
          to="contacts"
          className={({isActive}) => isActive ? 'activeLink menu-link' : 'link menu-link'}
        >
          Контакты
        </NavLink>
      </div>

      {/* Профиль справа */}
      <NavLink 
        to="profile" 
        className={({isActive}) => isActive ? 'activeLink profile-link' : 'link profile-link'}
      >
        <UserIcon size={20} className="profile-icon" />
        <span className="profile-text">Профиль</span>
      </NavLink>
    </nav>
  );
};

export default Menu;