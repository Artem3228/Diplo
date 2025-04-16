import { BookOpen, Award, TrendingUp, Users, Star } from 'react-feather';
import { Button } from 'react-bootstrap';
import './styles/Home.css';

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
<section className="popular-courses py-5" style={{ backgroundColor: '#4e4141' }}>
  <div className="container">
    <h2 className="section-title text-center text-white mb-5">Популярные курсы</h2>
    <div className="row">
      {popularCourses.map((course, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="course-card h-100 p-4 text-center" style={{ backgroundColor: '#ddb137', borderRadius: '10px' }}>
            <h3 className="course-title mb-3">{course.title}</h3>
            <div className="xp-wrapper d-flex justify-content-center align-items-center mb-4">
              <Star className="text-dark me-2" />
              <span className="xp-text">{course.xp} XP за прохождение</span>
            </div>
            <Button 
              variant="dark" 
              className="details-btn"
              style={{ borderRadius: '20px', padding: '8px 25px' }}
            >
              Подробнее
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Призыв к действию */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container py-4">
          <h2 className="mb-4">Готовы начать свое обучение?</h2>
          <Button variant="light" size="lg">
            Зарегистрироваться
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;