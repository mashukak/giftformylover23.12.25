import { useState } from 'react'
import StartPage from './components/StartPage'
import RulesPage from './components/RulesPage'
import QuestionPage from './components/QuestionPage'
import ResultsPage from './components/ResultsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('start')
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  const questions = [
    {
      id: 1,
      question: "Wie heißt mein Vater?",
      options: ["Oleg", "Igor", "Maxim", "Serhij"],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Was für Iphone habe ich?",
      options: ["12", "10", "11", "13"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Was davon kann ich nd?",
      options: ["singen", "schwimmen", "rennen", "sprinten"],
      correctAnswer: 3
    },
    {
      id: 4,
      question: "Wann bin ich nach Deutschland ausgewandert?",
      options: ["Juni", "Juli", "August", "Mai"],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Mein lieblings Geruch",
      options: ["Minze", "Kokosnus", "Erdbeeren", "Mango"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Mein lieblins Zeit des Tages",
      options: ["Morgens", "Nachts", "Abends", "Tag"],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 12,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "У якому році Україна стала незалежною?",
      options: ["1989", "1991", "1994", "1996"],
      correctAnswer: 1
    },
    {
      id: 15,
      question: "Wie lange habe ich keine Periode(TAGE)",
      options: ["3", "1", "2", "0"],
      correctAnswer: 3
    }
  ]

  const handleStart = () => {
    setCurrentPage('rules')
  }

  const handleNext = () => {
    if (currentPage === 'rules') {
      setCurrentPage('question')
      setCurrentQuestion(0)
    } else if (currentPage === 'question') {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1)
      } else {
        setCurrentPage('results')
      }
    }
  }

  const handleAnswer = (questionIndex, selectedOption) => {
    const isCorrect = selectedOption === questions[questionIndex].correctAnswer
    const newAnswers = [...userAnswers]
    newAnswers[questionIndex] = {
      selected: selectedOption,
      correct: isCorrect
    }
    
    setUserAnswers(newAnswers)
    
    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleRestart = () => {
    setCurrentPage('start')
    setScore(0)
    setCurrentQuestion(0)
    setUserAnswers([])
  }

  return (
    <div className="App">
      {currentPage === 'start' && (
        <StartPage onStart={handleStart} />
      )}
      
      {currentPage === 'rules' && (
        <RulesPage onNext={handleNext} />
      )}
      
      {currentPage === 'question' && (
        <QuestionPage
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          onAnswer={(selectedOption) => handleAnswer(currentQuestion, selectedOption)}
          onNext={handleNext}
          userAnswer={userAnswers[currentQuestion]}
        />
      )}
      
      {currentPage === 'results' && (
        <ResultsPage
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default App