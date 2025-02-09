
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
    question: "What is the sacrament of Confirmation?",
    options: [
      "A graduation ceremony from church",
      "A completion of baptismal grace",
      "Just a traditional ceremony",
      "A social gathering at church"
    ],
    correctAnswer: 1,
    explanation: "Confirmation completes baptismal grace, strengthening our bond with the Church and gifting us with special strength from the Holy Spirit."
  },
  {
    id: 2,
    question: "What happens during Confirmation?",
    options: [
      "We receive money and gifts",
      "We receive the Holy Spirit and are strengthened in our faith",
      "We become church employees",
      "We finish our religious education"
    ],
    correctAnswer: 1,
    explanation: "During Confirmation, the Holy Spirit descends upon us, strengthening our faith and completing our initiation into the Catholic Church."
  },
  {
    id: 3,
    question: "Why do we choose a Confirmation saint?",
    options: [
      "To get a new name",
      "Because it's traditional",
      "To have a spiritual role model and intercessor",
      "To make the ceremony longer"
    ],
    correctAnswer: 2,
    explanation: "We choose a saint as a spiritual role model and intercessor who will guide us in our faith journey and pray for us."
  },
  {
    id: 4,
    question: "What is the role of a Confirmation sponsor?",
    options: [
      "To pay for the celebration",
      "To be a spiritual mentor and witness to your faith journey",
      "To take photos during the ceremony",
      "To organize the party afterward"
    ],
    correctAnswer: 1,
    explanation: "A sponsor serves as a spiritual mentor, supporting you in your faith journey and witnessing your commitment to the Catholic faith."
  },
  {
    id: 5,
    question: "What are the gifts of the Holy Spirit?",
    options: [
      "Money, fame, and success",
      "Wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord",
      "Sports, music, and art talents",
      "Good grades and popularity"
    ],
    correctAnswer: 1,
    explanation: "The seven gifts of the Holy Spirit help us live as faithful Christians and make good decisions in our daily lives."
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
                Confirmation Quiz
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
