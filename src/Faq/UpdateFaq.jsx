import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateFaq = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [questionKZ, setQuestionKZ] = useState('');
  const [questionENG, setQuestionENG] = useState('');
  const [answer, setAnswer] = useState('');
  const [answerKZ, setAnswerKZ] = useState('');
  const [answerENG, setAnswerENG] = useState('');

  const getFaqId = async () => {
    const url = `https://localhost:7183/getFaq/${params.id}`;

    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setQuestion(result.question);
        setQuestionKZ(result.questionKZ);
        setQuestionENG(result.questionENG);
        setAnswer(result.answer);
        setAnswerKZ(result.answerKZ);
        setAnswerENG(result.answerENG);
      });
  };

  const updateFaqId = async (e) => {
    e.preventDefault();
    const url = `https://localhost:7183/updateFaq/${params.id}`;

    const updateFaq = {
      question,
      questionKZ,
      questionENG,
      answer,
      answerKZ,
      answerENG,
    };

    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(updateFaq),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    navigate('/faq');
  };

  useEffect(() => {
    getFaqId();
  }, []);

  return (
    <>
      <div className="container">
        <Form style={{ marginTop: 100 }} onSubmit={updateFaqId}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Вопрос</Form.Label>
            <Form.Control
              type="text"
              placeholder="вопрос..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Вопросы(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="вопрос...(казахский)"
              value={questionKZ}
              onChange={(e) => setQuestionKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Вопросы(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              type="text"
              placeholder="вопрос...(английский)"
              value={questionENG}
              onChange={(e) => setQuestionENG(e.target.value)}
            />
            <hr />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ответ</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ответ(КАЗАХСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={answerKZ}
              onChange={(e) => setAnswerKZ(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ответ(АНГЛИЙСКИЙ)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={answerENG}
              onChange={(e) => setAnswerENG(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary">
            Сохранить
          </Button>{' '}
          <Button onClick={() => navigate('/faq')} variant="secondary">
            Отменить
          </Button>{' '}
        </Form>
      </div>
    </>
  );
};

export default UpdateFaq;
