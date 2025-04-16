import { BookOpen, Award, TrendingUp, Users, Star } from 'react-feather';
import { Button } from 'react-bootstrap';
import './styles/Home.css';
import telegramIcon from './photo/telegram_icon.png';
import dicordIcon from './photo/discord-icon.gif';
import VKIcon from './photo/vk-icon.png';

const getCourseImage = (category) => {
  const images = {
    'IT': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Дизайн': 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'Маркетинг': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  };
  return images[category] || 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
};

const Home = () => {
  // Статистика платформы
  const stats = [
    { value: '150+', label: 'Курсов', icon: <BookOpen size={24} /> },
    { value: '25k+', label: 'Студентов', icon: <Users size={24} /> },
    { value: '98%', label: 'Удовлетворенности', icon: <Star size={24} /> }
  ];

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
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Почему выбирают нас</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="p-4 bg-light rounded-3 h-100">
                <Award size={48} className="text-warning mb-3" />
                <h4>Система достижений</h4>
                <p>Зарабатывайте бейджи и награды за ваши успехи</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 bg-light rounded-3 h-100">
                <TrendingUp size={48} className="text-danger mb-3" />
                <h4>Быстрый прогресс</h4>
                <p>Интерактивные задания ускорят ваше обучение</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 bg-light rounded-3 h-100">
                <Users size={48} className="text-info mb-3" />
                <h4>Соревнования</h4>
                <p>Сравнивайте свой прогресс с другими студентами</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((stat, index) => (
              <div className="col-md-4" key={index}>
                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="text-primary">{stat.icon}</div>
                  <div>
                    <h3 className="mb-0">{stat.value}</h3>
                    <p className="mb-0">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
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
              minHeight: '350px', // Увеличена высота карточки
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
    <div className="d-flex justify-content-between align-items-center mb-4">
      {/* Заголовок */}
      <h2 className="mb-0" style={{ 
        fontSize: '2rem', 
        fontWeight: '500', 
        color: '#ffffff'
      }}>
        Готовы начать свое обучение?
      </h2>
      
      {/* Иконки соцсетей */}
      <div className="social-links d-flex">
      <a href="https://web.telegram.org" className="mx-2">
          <img src={telegramIcon} alt="Telegram" style={{ fontSize: '2rem', width: '40px', height: '40px' }} />
        </a>
        <a href="https://discord.gg/yourlink" className="mx-2">
          <img src={dicordIcon} alt="Discord" style={{ fontSize: '2rem',  width: '40px', height: '40px' }} />
        </a>
        <a href="https://vk.com/yourpage" className="mx-2">
          <img src={VKIcon} alt="VK" style={{ fontSize: '2rem', width: '40px', height: '40px' }} />
        </a>
      </div>
    </div>

    {/* Кнопка */}
    <div className="text-center">
      <Button 
        variant="dark" 
        size="lg"
        style={{ 
          borderRadius: '20px', 
          padding: '15px 50px',
          fontSize: '1.8rem',
          fontWeight: '600'
        }}
      >
        В путь!
      </Button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;