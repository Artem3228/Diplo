import { BookOpen, Code, Globe, Activity, Award, Star, Users } from 'react-feather';
import { Button } from 'react-bootstrap';
import './styles/Home.css';
import telegramIcon from './photo/telegram_icon.png';
import dicordIcon from './photo/discord-icon.gif';
import VKIcon from './photo/vk-icon.png';
import React from 'react';

const getCourseImage = (category) => {
  const images = {
    'IT': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Дизайн': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Маркетинг': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  };
  return images[category] || 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
};

const Home = () => {

  // Популярные курсы
  const popularCourses = [
    { title: 'Основы программирования', category: 'IT', xp: 500 },
    { title: 'Дизайн интерфейсов', category: 'Дизайн', xp: 400 },
    { title: 'Маркетинг для начинающих', category: 'Маркетинг', xp: 300 }
  ];

  return (
    <div className="home-page">
      {/* Герой секция */}
      <section className="hero-section text-center py-5 bg-primary text-white">
        <div className="container py-5">
          <h1 className="display-4 fw-bold mb-4">Обучение с элементами игры</h1>
          <p className="lead mb-4">
            Прокачивайте навыки, зарабатывайте достижения и соревнуйтесь с другими
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" size="lg">
              Начать обучение
            </Button>
            <Button variant="outline-light" size="lg">
              Как это работает
            </Button>
          </div>
        </div>
      </section>



{/* Преимущества */}
<section className="benefits-section py-5" style={{ backgroundColor: '#4e4141' }}>
  <div className="container">
    <h2 className="benefits-title text-center" style={{ 
      fontSize: '3.5rem', 
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      marginBottom: '3rem', // Увеличен отступ до 7rem
      paddingTop: '2rem'
    }}>
      Вы получите невероятный опыт!
    </h2>
    
    <div 
      className="row g-5" 
      style={{ 
        marginBottom: '0.1rem', // Добавлен отступ снизу
        transform: 'scale(0.97)' // Уменьшение размера на 3%
      }}
    >
      {[
        { 
          icon: <Code size={48} />, 
          title: 'Технические знания', 
          text: 'Освойте языки программирования, и их понимание для лучшей разработки',
          desc: 'Python, JavaScript, React, алгоритмы и структуры данных', // Исправлены опечатки
          border: '#ddb137'
        },
        { 
          icon: <BookOpen size={48} />, 
          title: 'Прохождение курсов', 
          text: 'Интерактивные уроки с мгновенной проверкой заданий',
          desc: 'Система рейтинга, персональный ментор, проектная работа',
          border: '#c9a235'
        },
        { 
          icon: <Globe size={48} />, 
          title: 'Технический английский', 
          text: 'Способ найти и выучить новые слова и использовать их в документации',
          desc: 'IT-лексикон, технические статьи, видеоуроки с носителями',
          border: '#b58d32'
        },
        { 
          icon: <Activity size={48} />, 
          title: 'Увлеченность в учебе', 
          text: 'Геймификационное обучение с системой достижений',
          desc: 'Интерактивные симуляции, VR-лаборатории, соревнования',
          border: '#9e782e'
        }
      ].map((item, index) => (
        <div className="col-md-6" key={index}>
          <div 
            className="skill-card p-4 h-100"
            style={{ 
              backgroundColor: '#4e4141', // Полностью убран прозрачный фон
              border: `3px solid ${item.border}`,
              borderRadius: '15px',
              minHeight: '280px' // Уменьшена высота
            }}
          >
            <div className="icon-wrapper mb-3">
              {React.cloneElement(item.icon, { 
                className: 'skill-icon',
                color: item.border 
              })}
            </div>
            <h3 className="text-white mb-3">{item.title}</h3>
            <p className="text-muted">{item.text}</p>
            <div className="expand-content">
              <p className="text-warning mt-3">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Лидерборд */}
<section className="leaderboard-section py-5" style={{ backgroundColor: '#4e4141' }}>
  <div className="container">
    <h2 className="text-center mb-5" style={{ 
      fontSize: '2.5rem', 
      color: '#ddb137',
      fontWeight: '700',
      marginBottom: '4rem',
      paddingTop: '2rem'
    }}>
      Лидерборд
    </h2>

    <div className="horizontal-scroll-wrapper">
      <div className="leaderboard-row">
        {[
          { 
            name: 'Алексей Петров', 
            xp: 2599, 
            avatar: 'https://i.pravatar.cc/150?img=1', 
            position: 1 
          },
          { 
            name: 'Мария Иванова', 
            xp: 200, 
            avatar: 'https://i.pravatar.cc/150?img=2', 
            position: 2 
          },
          { 
            name: 'Дмитрий Сидоров', 
            xp: 1500, 
            avatar: 'https://i.pravatar.cc/150?img=3', 
            position: 3 
          },
          { 
            name: 'Ольга Козлова', 
            xp: 200, 
            avatar: 'https://i.pravatar.cc/150?img=4', 
            position: 4 
          },
          { 
            name: 'Иван Новиков', 
            xp: 1500, 
            avatar: 'https://i.pravatar.cc/150?img=5', 
            position: 5 
          }
        ].map((user) => (
          <div 
            key={user.position} 
            className={`circle-card ${user.position === 1 ? 'top-1' : ''}`}
          >
            <div className="position-badge">#{user.position}</div>
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="user-avatar"
            />
            <div className="circle-content">
              <h4 className="user-name">{user.name}</h4>
              <div className="xp-value">
                <Star size={20} className="me-2" />
                {user.xp} XP
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      


      {/* Популярные курсы */}
<section className="popular-courses-section py-5" style={{ backgroundColor: '#4e4141' }}>
  <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
    <h2 className="section-title text-white mb-5">Популярные курсы</h2>
    <div className="row w-100">
      {popularCourses.map((course, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div 
            className="course-card h-100 p-4 text-center position-relative"
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              minHeight: '300px', // Увеличена высота карточки
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', // Изменено с space-between
              alignItems: 'center', // Добавлено выравнивание по центру
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getCourseImage(course.category)})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white'
            }}
          >
            <h3 
              className="course-title mb-4" 
              style={{
                fontSize: '1.8rem', // Увеличен размер шрифта
                fontWeight: '600',
                textAlign: 'center',
                width: '100%',
                padding: '0 15px' // Добавлены отступы по бокам
              }}
            >
              {course.title}
            </h3>
            <div 
              className="xp-wrapper d-flex justify-content-center align-items-center mb-4"
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '8px 20px',
                borderRadius: '20px',
                backdropFilter: 'blur(5px)'
              }}
            >
              <span className="xp-icon"> ☆ </span>
              <span className="xp-text ms-2">{course.xp} XP за прохождение ☆ </span>
            </div>
            <Button 
              variant="light" 
              className="details-btn"
              style={{ 
                borderRadius: '20px', 
                padding: '10px 35px', // Увеличены отступы
                width: 'fit-content',
                fontSize: '2rem', // Увеличен размер шрифта
                fontWeight: '600', // Жирный шрифт
                marginTop: 'auto' // Прижимаем к низy
              }}
            >
              Подробнее
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




<section className="cta-section py-5" style={{ backgroundColor: '#ddb137' }}>
  <div className="container">
  <div className="text-center mb-5">
      {/* Заголовок */}
      <h2 className="mb-4" style={{ 
        fontSize: '2rem', 
        fontWeight: '500', 
        color: 'black',
      }}>
        Готовы начать свое обучение?
      </h2>

    {/* Кнопка */}
    <div className="text-center">
      <Button 
        variant="dark" 
        size="lg"
        style={{ 
          borderRadius: '20px', 
          padding: '15px 100px',
          fontSize: '1.8rem',
          fontWeight: '700',
          
        }}
      >
        В путь!
      </Button>
    </div>
    {/* Иконки соцсетей */}
    <div className="social-links d-flex gap-3" style={{  
        flexShrink: 0,
        flexWrap: 'nowrap' 
      }}>
        <a href="https://web.telegram.org" className="mx-2">
          <img src={telegramIcon} alt="Telegram" style={{ width: '80px', height: '40px' }} />
        </a>
        <a href="https://discord.gg/yourlink" className="mx-2">
          <img src={dicordIcon} alt="Discord" style={{ width: '200px', height: '100px' }} />
        </a>
        <a href="https://vk.com/yourpage" className="mx-2">
          <img src={VKIcon} alt="VK" style={{ width: '50px', height: '40px' }} />
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;