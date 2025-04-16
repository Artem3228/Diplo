import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Modal, ProgressBar, Badge } from 'react-bootstrap';
import { ArrowLeft, Home, Edit, Award, BookOpen, User as UserIcon, LogOut } from 'react-feather';
import './styles/Profile.css';

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
  const navigate = useNavigate();
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

  const avatars = ['src/photo/xaker.jpg', 'src/photo/black_wite_xaker.jpg', 'avatar3.png'];
  const nicknames = [
    { level: 1, name: 'Новичок' },
    { level: 3, name: 'Ученик' },
    { level: 5, name: 'Знаток' }
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

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

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = {
      email: formData.email,
      password: formData.password,
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

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

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

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleAvatarChange = (avatar) => {
    const updatedUser = { ...user, avatar };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const getCurrentNickname = () => {
    const available = nicknames.filter(n => user?.level >= n.level);
    return available[available.length - 1]?.name || 'Новичок';
  };

  if (!user) {
    return (
      <div className="auth-container">
        <h2>Ваш профиль</h2>
        <p>Войдите или зарегистрируйтесь</p>
        <div className="auth-buttons">
          <Button variant="primary" onClick={() => { setAuthMode('login'); setShowAuthModal(true); }}>
            Войти
          </Button>
          <Button variant="outline-primary" onClick={() => { setAuthMode('register'); setShowAuthModal(true); }}>
            Регистрация
          </Button>
        </div>

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
              
              {error && <div className="error-message">{error}</div>}
              
              <Button variant="primary" type="submit" className="w-100">
                {authMode === 'login' ? 'Войти' : 'Зарегистрироваться'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-navigation">
        <Button variant="link" onClick={() => navigate('/')} className="nav-button">
          <Home size={20} />
        </Button>
        <Button variant="link" onClick={() => navigate(-1)} className="nav-button">
          <ArrowLeft size={20} />
        </Button>
      </div>

      <div className="profile-content">
        <div className="profile-header">
          <div className="avatar-container">
            <Avatar 
              src={`/avatars/${user.avatar}`} 
              className="profile-avatar"
              style={{ width: '120px', height: '120px' }}
            />
          </div>
          
          <div className="profile-info">
            <h3 className="profile-name">
              {user.name}
              <Button variant="link" onClick={() => setEditName(!editName)}>
                <Edit size={16} />
              </Button>
            </h3>
            
            <div className="profile-badges">
              <Badge bg="secondary">{getCurrentNickname()}</Badge>
              <Badge bg="primary">Уровень {user.level}</Badge>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h4><Award className="text-warning me-2" />Ваш прогресс</h4>
          
          <div className="progress-container">
  <div className="progress-bar-wrapper">
    <ProgressBar
      now={(user.xp / (user.level * 1000)) * 100} 
      className="custom-progress-bar"
    />
  </div>
  <div className="xp-counter">
    {user.xp} / {user.level * 1000} XP
  </div>
            
            <div className="courses-completed">
              <BookOpen className="me-2" />
              <span>Пройдено курсов: {user.coursesCompleted}</span>
            </div>
          </div>
        </div>

        <Button variant="outline-danger" onClick={handleLogout} className="logout-button">
          <LogOut size={16} className="me-1" /> Выйти
        </Button>
      </div>
    </div>
  );
};

export default Profile;