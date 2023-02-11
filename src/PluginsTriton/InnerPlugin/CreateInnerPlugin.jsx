import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const CreateInnerPlugin = () => {
  const [moreInfo, setMoreInfo] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const createMoreInfo = async (e) => {
    e.preventDefault();

    const newMoreInfo = {
      pluginId: params.id,
      itemInformations: moreInfo,
    };

    // const url = '';

    await fetch('https://localhost:7183/createPluginInformations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMoreInfo),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    navigate(`/plugins`);
  };

  return (
    <div className="container">
      <Form onSubmit={createMoreInfo} style={{ marginTop: 100 }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Создать "Подробная информация"</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={moreInfo}
            onChange={(e) => setMoreInfo(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Добавить
        </Button>{' '}
        <Link
          style={{
            color: 'white',
            background: 'gray',
            padding: '9px',
            borderRadius: '6px',
          }}
          to=".."
          relative="path"
          variant="secondary"
        >
          Отменить
        </Link>{' '}
      </Form>
    </div>
  );
};

export default CreateInnerPlugin;
