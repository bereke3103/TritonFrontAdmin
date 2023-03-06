// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCardOfChoising = () => {
  const [title, seTitle] = useState('');
  const [titleKZ, setTitleKZ] = useState('');
  const [titleENG, setTitleENG] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionKZ, setDescriptionKZ] = useState('');
  const [descriptionENG, setDescriptionENG] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [nameFile, setNameFile] = useState('');

  const params = useParams();

  const getCardId = async () => {
    const url = `https://localhost:7183/getCard/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        seTitle(result.title);
        setTitleKZ(result.titleKZ);
        setTitleENG(result.titleENG);
        setDescription(result.description);
        setDescriptionKZ(result.descriptionKZ);
        setDescriptionENG(result.descriptionENG);
        setImageFile(result.imageFile);
        setNameFile(result.nameFile);
      });
  };
  const handleChangeImg = (e) => {
    setImageFile(e.target.files[0]);
    setNameFile(e.target.files[0].name);
  };

  useEffect(() => {
    getCardId();
  }, []);

  const navigate = useNavigate();

  const updateNewCard = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('titleKZ', titleKZ);
    formData.append('titleENG', titleENG);
    formData.append('description', description);
    formData.append('descriptionKZ', descriptionKZ);
    formData.append('descriptionENG', descriptionENG);
    formData.append('imageFile', imageFile);
    formData.append('nameFile', nameFile);

    const url = `http://46.101.153.165/updateCard/${params.id}`;

    await fetch(url, {
      method: 'PUT',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          response.json();
          navigate('/cardOfChoising');
        }
      })
      .then((result) => console.log(result));
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={updateNewCard} style={{ marginTop: 100 }}>
          <img
            style={{ width: '350px', height: '350px', objectFit: 'cover' }}
            src={`https://${nameFile}`}
            alt=""
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Обновите картинку</Form.Label>
            <Form.Control
              type="file"
              placeholder="Обновите картинку"
              readOnly
              onChange={handleChangeImg}
              accept="image/*, .png, .jpg, .gif, .web"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Обновите картинки по умолчанию</Form.Label>
            <Form.Control
              type="text"
              placeholder="Обновите картинки по умолчанию"
              value={nameFile}
              onChange={(e) => setNameFile(e.target.value)}
            />
          </Form.Group>
          <hr />
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              placeholder="название..."
              value={title}
              onChange={(e) => seTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название (КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название...(казахский)"
              value={titleKZ}
              onChange={(e) => setTitleKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Название (АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="название...(английский)"
              value={titleENG}
              onChange={(e) => setTitleENG(e.target.value)}
            />
            <hr />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descriptionKZ}
              onChange={(e) => setDescriptionKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Описание(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={descriptionENG}
              onChange={(e) => setDescriptionENG(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Обновить
          </Button>{' '}
          <Button
            onClick={() => navigate('/cardOfChoising')}
            variant="secondary"
          >
            Отменить
          </Button>{' '}
        </Form>
      </div>
    </>
  );
};

export default UpdateCardOfChoising;
