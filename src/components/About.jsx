import { Button } from "react-bootstrap";
import { Award, Clock, Users, BookOpen, Globe, Video } from "react-feather";

const About = () => {
  // Статистика платформы
  const platformStats = {
    totalCourses: 156,
    activeUsers: 28450,
    lessonsCompleted: 1250000,
    instructors: 87
  };

  return (
    <div className="about-page">
      {/* Герой-секция */}
      <section className="hero-section text-center py-5 bg-primary text-white">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">О нашей образовательной платформе</h1>
          <p className="lead">
            Инновационный подход к онлайн-обучению с элементами геймификации,
            который делает процесс освоения новых навыков увлекательным и эффективным
          </p>
        </div>
      </section>

      {/* Особенности платформы */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Почему выбирают нас</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card p-4 h-100 text-center">
                <Globe size={48} className="text-info mb-3 mx-auto" />
                <h3>Доступность</h3>
                <p>
                  Учитесь в любое время из любой точки мира. Все материалы доступны 24/7
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 h-100 text-center">
                <Award size={48} className="text-warning mb-3 mx-auto" />
                <h3>Геймификация</h3>
                <p>
                  Система достижений и наград делает обучение увлекательным
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 h-100 text-center">
                <Video size={48} className="text-danger mb-3 mx-auto" />
                <h3>Практика</h3>
                <p>
                  Интерактивные задания и реальные проекты для закрепления знаний
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="how-it-works py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Как работает наша платформа</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <h4><BookOpen className="me-2" /> 1. Выбирайте курс</h4>
                <p>Наши курсы охватывают самые востребованные направления</p>
              </div>
              <div className="mb-4">
                <h4><Clock className="me-2" /> 2. Занимайтесь в удобном темпе</h4>
                <p>Гибкий график обучения под ваш ритм жизни</p>
              </div>
              <div>
                <h4><Users className="me-2" /> 3. Получайте поддержку</h4>
                <p>Преподаватели и сообщество всегда готовы помочь</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/VIDEO_ID" 
                  title="Как работает платформа" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика платформы */}
      <section className="platform-stats py-5">
        <div className="container text-center">
          <h2 className="mb-5">Наша платформа в цифрах</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="stat-item p-3">
                <h3 className="display-4 text-primary">
                  {platformStats.totalCourses}+
                </h3>
                <p>Курсов</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item p-3">
                <h3 className="display-4 text-success">
                  {platformStats.activeUsers}+
                </h3>
                <p>Студентов</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item p-3">
                <h3 className="display-4 text-info">
                  {platformStats.lessonsCompleted}+
                </h3>
                <p>Пройденных уроков</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item p-3">
                <h3 className="display-4 text-warning">
                  {platformStats.instructors}+
                </h3>
                <p>Преподавателей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="cta-section py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="mb-4">Готовы начать обучение?</h2>
          <Button variant="light" size="lg" className="me-3">
            Выбрать курс
          </Button>
          <Button variant="outline-light" size="lg">
            Узнать больше
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;