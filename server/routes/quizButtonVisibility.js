const express=require('express')
const router = express.Router();
const {quizBtnToggle,getQuizBtnVisibility}=require('../controllers/quizBtnToggle')
router.patch("/",quizBtnToggle)
router.get("/", getQuizBtnVisibility);

module.exports = router;