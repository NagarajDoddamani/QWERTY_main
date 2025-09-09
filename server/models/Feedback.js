const mongoose=require('mongoose')

const feedbackSchema=new mongoose.Schema({
  user: {
    name: String,
    email: String,
    usn: String,
  },
  quizId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Quiz', 
      required: true 
    },
  OverallExperience : String,
  CareerUsefulness : String,
  KeyTakeAways : String,
  logisticsFeedback : String,
  contentSuggestion  : String,
  overallFeedback  : String,
  nextWorkshopTopic : String,
  Venue : String,
  RegistrationProcess : String,
  FlowWorkshop : String,
  content : String,
  DeliveryContent : String,
  Transportation : String,
  Activities : String
})

module.exports=mongoose.model('Feedback',feedbackSchema)