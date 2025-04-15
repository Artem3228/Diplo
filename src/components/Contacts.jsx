import { FaHeadset, FaTrophy, FaDiscord, FaTelegram } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Contacts = () => {
  return (
    <div className="contacts-page container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Свяжитесь с нами</h1>
        <p className="lead">Мы всегда рады помочь вам в учебном процессе!</p>
      </div>

      <div className="row g-4">
        {/* Основные контакты */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">
                <FaHeadset className="text-primary me-2" />
                Служба поддержки
              </h3>
              
              <div className="contact-item d-flex mb-3">
                <MdEmail className="text-muted fs-4 me-3" />
                <div>
                  <h6 className="mb-1">Email</h6>
                  <a href="mailto:support@edugame.com" className="text-decoration-none">support@edugame.com</a>
                </div>
              </div>

              <div className="contact-item d-flex mb-3">
                <MdLocationOn className="text-muted fs-4 me-3" />
                <div>
                  <h6 className="mb-1">Офис</h6>
                  <p className="mb-0">г. Москва, ул. Образовательная, 42</p>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="mb-3">Часы работы:</h5>
                <p className="mb-1">Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 15:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Сообщества и геймификация */}
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">
                <FaTrophy className="text-warning me-2" />
                Сообщества и достижения
              </h3>

              <div className="contact-item d-flex mb-4">
                <FaDiscord className="text-discord fs-4 me-3" />
                <div>
                  <h6 className="mb-1">Discord-сообщество</h6>
                  <p className="mb-2">Присоединяйтесь к нашему активному сообществу</p>
                  <a href="#" className="btn btn-sm btn-discord">
                    Подключиться
                  </a>
                </div>
              </div>

              <div className="contact-item d-flex mb-4">
                <FaTelegram className="text-primary fs-4 me-3" />
                <div>
                  <h6 className="mb-1">Telegram-чат</h6>
                  <p className="mb-2">Обсуждайте курсы и делитесь достижениями</p>
                  <a href="#" className="btn btn-sm btn-primary">
                    Присоединиться
                  </a>
                </div>
              </div>

              <div className="achievement-notice mt-4 p-3 bg-light rounded">
                <h6 className="d-flex align-items-center">
                  <FaTrophy className="text-warning me-2" />
                  Получите бонусные баллы!
                </h6>
                <p className="small mb-0">
                  Активные участники наших сообществ получают дополнительные XP
                  для своего учебного профиля
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Форма обратной связи */}
      <div className="row mt-5">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Форма обратной связи</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Ваше имя" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <select className="form-select">
                      <option>Тема обращения</option>
                      <option>Техническая поддержка</option>
                      <option>Вопрос по курсу</option>
                      <option>Достижения и бейджи</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="4" placeholder="Ваше сообщение"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Отправить сообщение
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;