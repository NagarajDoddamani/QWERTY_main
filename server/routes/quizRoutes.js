const express = require('express');
const router = express.Router();
const { createQuiz,getQuiz,quizStatus,userQuizRender,userResult,userFeedback,getFeedback,getResult,getQuizById,editQuiz} = require('../controllers/quizController');


router.post('/', createQuiz);

router.get('/',getQuiz);

router.get('/active',userQuizRender);

router.get('/:id',getQuizById);

router.patch('/:id',editQuiz);

router.patch('/toggle/:id',quizStatus);

router.post('/submit',userResult);

router.get('/result/:id',getResult);

router.post('/feedback',userFeedback);

router.get('/feedback/:id',getFeedback);

module.exports = router;
