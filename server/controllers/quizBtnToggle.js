// controllers/quizBtnToggle.js
const QuizBtnVisibility = require('../models/quizBtnVisibility');

const quizBtnToggle = async (req, res) => {
  try {
    // find the first (or only) document
    let quizBtn = await QuizBtnVisibility.findOne();

    // if it doesn't exist, create it with default false
    if (!quizBtn) {
      quizBtn = new QuizBtnVisibility({ isVisible: false });
    }

    // toggle the value
    quizBtn.isVisible = !quizBtn.isVisible;

    // save updated document
    await quizBtn.save();

    res.json({ isVisible: quizBtn.isVisible });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getQuizBtnVisibility = async (req, res) => {
  try {
    let quizBtn = await QuizBtnVisibility.findOne();

    // if not found, create one with default false
    if (!quizBtn) {
      quizBtn = new QuizBtnVisibility({ isVisible: false });
      await quizBtn.save();
    }

    res.json({ isVisible: quizBtn.isVisible });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { quizBtnToggle,getQuizBtnVisibility };
