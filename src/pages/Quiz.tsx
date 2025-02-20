
import { useState } from "react";
import Layout from "@/components/Layout";
import { Check, X, ChevronRight, Trophy } from "lucide-react";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What percentage of the world's population is Catholic?",
    options: [
      "15%",
      "17.7%",
      "20%",
      "25%"
    ],
    correctAnswer: 1,
    explanation: " The infographic clearly states that there are over 1.2 billion Catholics worldwide, which constitutes 17.7% of the global population."
  },
  {
    id: 2,
    question: "How many hospitals and clinics does the Catholic Church operate worldwide?",
    options: [
      "10,000",
      "15,000",
      " 22,000",
      " 25,000"
    ],
    correctAnswer: 2,
    explanation: " The infographic lists 22,000 hospitals and clinics operated by the Catholic Church."
  },
  {
    id: 3,
    question: " What is the Catholic belief regarding the Eucharist?",
    options: [
      "The bread and wine are symbols of Jesus' body and blood.",
      " The bread and wine become the body and blood of Jesus.",
      "Only priests can receive communion.",
      "All denominations believe in the same way."
    ],
    correctAnswer: 2,
    explanation: "The infographic specifies that the Catholic Church is the only church that holds this belief in transubstantiation."
  },
  {
    id: 4,
    question: "How many priests are there in the world according to the infographic?",
    options: [
      "Over 400,000",
      "Over 415,000",
      "Over 500,000",
      "Over 300,000"
    ],
    correctAnswer: 3,
    explanation: " The infographic provides the exact number of over 415,000 priests worldwide."
  },
  {
     id: 5,
    question: "Besides the Roman Catholic Church, how many Eastern Rites are in communion with Rome?",
    options: ["Over 10", "Over 15", "Over 20", "Over 25"],
    correctAnswer: 3,
    explanation: "The infographic mentions over 20 Eastern Rites in communion with Rome."
  },
   {
    id: 6,
    question: "During the Middle Ages, what role did the Catholic Church play in preserving classical learning?",
    options: [
      "It had no significant role in preserving knowledge.",
      "It preserved classical learning through monasteries.",
      "It only preserved religious texts.",
      "It contributed to the destruction of classical learning."
    ],
    correctAnswer: 2,
    explanation: "The infographic highlights the Church's role in preserving philosophy, literature, and more through monasteries."
  },
   {
    id: 7,
    question: "How many saints are recognized by the Catholic Church?",
    options: ["Over 5,000", "Over 7,000", "Over 10,000", "Over 15,000"],
    correctAnswer: 3,
    explanation: "The infographic states that there are over 10,000 saints recognized by the Catholic Church."
  },
  {
    id: 8,
    question: "Who proposed the Big Bang theory?",
    options: ["Isaac Newton", "Albert Einstein", "Father Georges Lemaître", "Stephen Hawking"],
    correctAnswer: 3,
    explanation: "The infographic credits the Big Bang theory to a Catholic priest, Father Georges Lemaître."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast.success("Correct! Well done!");
    } else {
      toast.error("Not quite right. Keep trying!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {!quizCompleted ? (
            <div className="glass p-8 rounded-2xl space-y-6 animate-fade-in">
              <h1 className="text-3xl font-bold text-center mb-8 gradient-text">
                Confirmation Quiz Based On Given Inforgraphic
              </h1>
              
              <div className="text-center mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              
              <div className="text-xl font-semibold mb-6">
                {questions[currentQuestion].question}
              </div>
              
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg transition-all duration-300 ${
                      selectedAnswer === null
                        ? "hover:bg-primary/10 glass"
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? "bg-green-500/20 border-green-500"
                          : "bg-red-500/20 border-red-500"
                        : index === questions[currentQuestion].correctAnswer
                        ? "bg-green-500/20 border-green-500"
                        : "opacity-50"
                    } flex items-center justify-between`}
                  >
                    <span>{option}</span>
                    {selectedAnswer !== null && (
                      index === questions[currentQuestion].correctAnswer ? (
                        <Check className="text-green-500" />
                      ) : selectedAnswer === index ? (
                        <X className="text-red-500" />
                      ) : null
                    )}
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg animate-fade-in">
                  <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
                </div>
              )}

              {selectedAnswer !== null && (
                <button
                  onClick={handleNextQuestion}
                  className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          ) : (
            <div className="glass p-8 rounded-2xl text-center animate-fade-in">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 gradient-text">Quiz Completed!</h2>
              <p className="text-xl mb-6">
                You scored {score} out of {questions.length}!
              </p>
              <button
                onClick={resetQuiz}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
