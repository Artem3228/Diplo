import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User as UserIcon, Home } from 'react-feather';
import './styles/Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <nav className="menu-container">
      {/* Основные ссылки слева */}
      <div className="menu-left">
        <NavLink 
          style={({isActive}) => isActive ? {color: 'lightyellow', textDecoration: 'none'} : {}} 
          to="." 
          end
          className={({isActive}) => isActive ? 'activeLink menu-link' : 'link menu-link'}
        >
          <Home size={16} className="menu-icon" />
          Главная
        </NavLink>
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

      {/* Кнопка профиля справа */}
      <div className="menu-right">
        <NavLink 
          to="profile" 
          className={({isActive}) => isActive ? 'activeLink profile-link' : 'link profile-link'}
        >
          <UserIcon size={18} className="profile-icon" />
          Профиль
        </NavLink>
      </div>
    </nav>
  );
};

export default Menu;