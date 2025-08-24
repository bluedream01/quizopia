import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { quizData } from "./quizData";
import Confetti from "react-confetti";

const Quiz = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const topic = state?.topic;

  if (!topic || !quizData[topic]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-red-500">⚠️ Invalid Topic!</h2>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const questions = quizData[topic];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (optIndex) => {
    setSelected(optIndex);
    if (optIndex === questions[index].ans) setScore((s) => s + 1);

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 900);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      {!showResult ? (
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">{topic} Quiz</h2>
          <p className="mb-4 text-gray-700">
            Question {index + 1} / {questions.length}
          </p>

          <h3 className="text-lg font-medium mb-6">{questions[index].q}</h3>

          <div className="space-y-3">
            {questions[index].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full px-4 py-2 rounded-lg border transition
                  ${selected === i
                    ? i === questions[index].ans
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-gray-100 hover:bg-blue-100"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md text-center bg-white shadow-lg rounded-xl p-8">
          {score >= questions.length / 2 && <Confetti />}
          <h2 className="text-2xl font-bold text-blue-600">Quiz Finished 🎉</h2>
          <p className="text-lg mt-4">
            Score: <span className="font-bold">{score}</span> / {questions.length}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
