import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useInitialState } from '../hooks/useInitialState';
import { useAddFaqMutation } from '../redux/faq.Api';

const CreateFaq = () => {
  const [addFaq] = useAddFaqMutation();
  const navigate = useNavigate();

  const question = useInitialState('');
  const questionKZ = useInitialState('');
  const questionENG = useInitialState('');
  const answer = useInitialState('');
  const answerKZ = useInitialState('');
  const answerENG = useInitialState('');

  const handleAddFaq = async (e) => {
    e.preventDefault();

    const newFaq = {
      question: question.value,
      questionKZ: questionKZ.value,
      questionENG: questionENG.value,
      answer: answer.value,
      answerKZ: answerKZ.value,
      answerENG: answerENG.value,
    };

    await addFaq(newFaq);
    navigate('/faq');
  };

  return (
    <div className="container">
      <Form onSubmit={handleAddFaq} style={{ marginTop: 100 }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Вопросы</Form.Label>
          <Form.Control
            type="text"
            placeholder="вопрос..."
            value={question.value}
            onChange={question.onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Вопросы(КАЗАХСКИЙ)</Form.Label>
          <Form.Control
            type="text"
            placeholder="вопрос...(казахский)"
            value={questionKZ.value}
            onChange={questionKZ.onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Вопросы(АНГЛИЙСКИЙ)</Form.Label>
          <Form.Control
            type="text"
            placeholder="вопрос...(английский)"
            value={questionENG.value}
            onChange={questionENG.onChange}
          />
          <hr />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ответ</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={answer.value}
            onChange={answer.onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ответ(КАЗАХСКИЙ)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={answerKZ.value}
            onChange={answerKZ.onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ответ(АНГЛИЙСКИЙ)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={answerENG.value}
            onChange={answerENG.onChange}
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Сохранить
        </Button>{' '}
        <Button onClick={() => navigate('/faq')} variant="secondary">
          Отменить
        </Button>{' '}
      </Form>
    </div>
  );
};

export default CreateFaq;
