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
      question: "Was liebe ich an mein Süßer am meistens?",
      options: ["deine Lächeln", "deine Art", "deine Stimme", "deine Nähe"],
      correctAnswer: 3
    },
    {
      id: 8,
      question: "Was mag ich mehr??",
      options: ["Worte", "Taten", "Blicke", "Nähe"],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "Was beruhigt mich am meistens?",
      options: ["Musik", "Umarmungen", "Schlaf", "Spaziergang"],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Was trinke ich lieber?",
      options: ["Kaffee", "Tee", "Saft", "Wasser"],
      correctAnswer: 2
    },
    {
      id: 11,
      question: "Welche Jahreszeit mag ich am meisten?",
      options: ["Winter", "Frühling", "Sommer", "Herbst"],
      correctAnswer: 2
    },
    {
      id: 12,
      question: "Was esse ich lieber?",
      options: ["Süßes", "Salziges", "Scharfes", "Saures"],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "Was passiert, wenn ich Egal?",
      options: ["Es ist mir wirklich egal", "Ich habe schon entschieden", "Test für mein Baby", "Kleine Katastrophe"],
      correctAnswer: 1
    },
    {
      id: 14,
      question: "Was mache ich, wenn ich Hunger habe?",
      options: ["Geduldig warten", "Nichts sagen", "Plötzlich habe ich schlechte Laune", "Alles essen"],
      correctAnswer: 2
    },
    {
      id: 15,
      question: "Wie lange habe ich keine Periode(TAGE)",
      options: ["3", "1", "2", "0"],
      correctAnswer: 3
    },
     {
      id: 16,
      question: "Was mache ich beim Einkaufen?",
      options: ["Hab konkrette Ziel", "Alles anschauen", "Mehr kaufen als geplant", "Nur kurz schauen"],
      correctAnswer: 2
    },
     {
      id: 17,
      question: "Was esse ich, obwohl ich gesagt habe ich habe kein Hunger?",
      options: ["Nichts", "Nur ein Stück", "Alles", "Die Hälfte von seinem Essen"],
      correctAnswer: 2
    },
     {
      id: 18,
      question: "Was passiert, wenn ich sage Mach was du willst?",
      options: ["Du kannst wirklich selber entscheiden", "das ist ein Test", "das ist definitiv eine Gefahr", "du musst mich küssen"],
      correctAnswer: 2
    },
    {
      id: 19,
      question: "Was mache ich wenn ich sage Ich komme gleich?",
      options: ["1 min", "3 min", "5 min", "10 min"],
      correctAnswer: 0
    },
    {
      id: 20,
      question: "Wie ist dein Humor?",
      options: ["Süß", "Sarkastisch", "Schwarz", "Alles gemischt"],
      correctAnswer: 3
    },
    {
      id: 21,
      question: "Was liebe ich mehr Schlaf oder Essen?",
      options: ["Schlaf", "Essen", "Beides", "Bruder"],
      correctAnswer: 1
    },
    {
      id: 22,
      question: "Was meine ich wenn ich sage Schon okay?",
      options: ["Es ist okay", "Es ist NICHT okay", "Wir reden später", "Gefahr"],
      correctAnswer: 0
    },
    {
      id: 23,
      question: "Wie gut kann ich deine Geheimnisse behalten? ",
      options: ["Sehr gut", "Nur wichtige", "Ich vergesse sie", "Nur seine"],
      correctAnswer: 0 
    },
    {
      id: 24,
      question: "Wie reagiere ich auf schlechtes Internet?",
      options: ["Ruhig", "Genervt", "Panik", "Bett schlagen"],
      correctAnswer: 3
    },

    {
      id: 25,
      question: "Was meinst du wenn DU sagst Schon okay?",
      options: ["Es ist okay", "Es ist NICHT okay", "Wir reden später", "Gefahr"],
      correctAnswer: 1
    },
    {
      id: 26,
      question: "Wie sehr will ich dir das Geschenk geben?0-10",
      options: ["1", "3", "7", "10"],
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