import { useState, useEffect } from 'react';
import { Button, Form, Modal, ProgressBar, Badge } from 'react-bootstrap';
import { Edit, Award, BookOpen, User as UserIcon, LogOut } from 'react-feather';

// Компонент аватара
const Avatar = ({ src, className, style, onClick }) => (
  <img 
    src={src} 
    className={`rounded-circle ${className}`} 
    style={style} 
    alt="User avatar" 
    onClick={onClick}
  />
);

const Profile = () => {
  // Состояния
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [editName, setEditName] = useState(false);
  const [newName, setNewName] = useState('');

  // Данные платформы
  const avatars = ['avatar1.png', 'avatar2.png', 'avatar3.png'];
  const nicknames = [
    { level: 1, name: 'Новичок' },
    { level: 3, name: 'Ученик' },
    { level: 5, name: 'Знаток' }
  ];

  // Загрузка пользователя
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Обработка формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Регистрация (только запись в базу)
  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    // Минимальная проверка ввода
    if (!formData.email.includes('@')) {
      setError('Введите корректный email');
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    // Имитация работы с базой данных
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Создание нового пользователя
    const newUser = {
      email: formData.email,
      password: formData.password, // В реальном приложении пароль должен хешироваться
      name: formData.email.split('@')[0],
      avatar: avatars[0],
      level: 1,
      xp: 0,
      coursesCompleted: 0,
      nickname: nicknames[0].name,
      lastNicknameChange: null
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    setShowAuthModal(false);
  };

  // Авторизация (с проверкой)
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Проверка в базе данных
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => 
      u.email === formData.email && 
      u.password === formData.password
    );

    if (!foundUser) {
      setError('Неверная почта или пароль');
      return;
    }

    localStorage.setItem('user', JSON.stringify(foundUser));
    setUser(foundUser);
    setShowAuthModal(false);
  };

  // Выход
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Изменение аватара
  const handleAvatarChange = (avatar) => {
    const updatedUser = { ...user, avatar };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  // Получение текущего никнейма
  const getCurrentNickname = () => {
    const available = nicknames.filter(n => user.level >= n.level);
    return available[available.length - 1].name;
  };

  // UI для неавторизованных пользователей
  if (!user) {
    return (
      <div className="text-center py-5">
        <h2>Ваш профиль</h2>
        <p className="mb-4">Войдите или зарегистрируйтесь</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary" onClick={() => {
            setAuthMode('login');
            setShowAuthModal(true);
          }}>
            Войти
          </Button>
          <Button variant="outline-primary" onClick={() => {
            setAuthMode('register');
            setShowAuthModal(true);
          }}>
            Регистрация
          </Button>
        </div>

        {/* Модальное окно авторизации */}
        <Modal show={showAuthModal} onHide={() => setShowAuthModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{authMode === 'login' ? 'Вход' : 'Регистрация'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={authMode === 'login' ? handleLogin : handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              
              {authMode === 'register' && (
                <Form.Group className="mb-3">
                  <Form.Label>Подтвердите пароль</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              )}
              
              {error && <div className="text-danger mb-3">{error}</div>}
              
              <Button variant="primary" type="submit" className="w-100">
                {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  // UI для авторизованных пользователей
  return (
    <div className="profile-page container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="position-relative d-inline-block">
                <Avatar 
                  src={`/avatars/${user.avatar}`} 
                  className="mb-3" 
                  style={{ width: '150px', height: '150px' }}
                />
              </div>
              
              <h3 className="mb-3">
                {user.name}
              </h3>
              
              <div className="d-flex justify-content-center gap-2 mb-3">
                <Badge bg="secondary">{getCurrentNickname()}</Badge>
                <Badge bg="primary">Уровень {user.level}</Badge>
              </div>
              
              <Button variant="outline-danger" onClick={handleLogout}>
                <LogOut size={16} className="me-1" /> Выйти
              </Button>
            </div>
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">
                <Award className="text-warning me-2" /> Ваш прогресс
              </h4>
              
              <div className="mb-3">
                <h6>Уровень {user.level}</h6>
                <ProgressBar 
                  now={(user.xp / (user.level * 1000)) * 100} 
                  label={`${Math.round((user.xp / (user.level * 1000)) * 100)}%`}
                />
                <div className="text-muted small mt-1">
                  {user.xp} / {user.level * 1000} XP
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <BookOpen className="me-2" />
                <span>Пройдено курсов: {user.coursesCompleted}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;