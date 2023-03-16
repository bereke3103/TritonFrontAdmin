import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleLogin = (e) => {
    e.preventDefault();

    const loginUsername = {
      login,
      password,
    };

    const url = 'http://165.227.162.166/login';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginUsername),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // console.log(response);
        if (response.status === 500) {
          alert('Вы ввели некорректные данные һ');
        }
        return response.json();
      })
      .then((result) => {
        localStorage.setItem('token', result.token);
      })
      .catch((e) => console.log(e.message));

    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className="login__page">
      <h1 style={{ color: '#131C39' }}>Введите данные для авторизации</h1>
      <Form
        onSubmit={toggleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          padding: '47px',
          borderRadius: '5px',
        }}
      >
        <Form.Group
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label>Логин</Form.Label>
          <Form.Control
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{ padding: '8px 24px' }}
            type="text"
            placeholder="логин"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '8px 24px' }}
            type="password"
            placeholder="пароль"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Авторизоваться
        </Button>
      </Form>
    </div>
  );
};

export default Login;
