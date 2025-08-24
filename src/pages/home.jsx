import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const startQuiz = () => {
    if (!topic) {
      alert("Please select a topic!");
      return;
    }
    navigate("/quiz", { state: { topic } });
  };

  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#1976d2", marginBottom: "10px" }}>
        QuizoPia
      </h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "30px", color: "#555" }}>
        A place built for quizzes
      </h2>

      <h3 style={{ color: "#4caf50", marginBottom: "20px" }}>
        Choose Your Topic
      </h3>

      {/* ✅ Topic buttons aligned properly */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {["Math", "Physics", "Chemistry"].map((t) => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            style={{
              padding: "14px 30px",
              background: topic === t ? "#4caf50" : "#f0f0f0",
              color: topic === t ? "#fff" : "#333",
              border: "2px solid #4caf50",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              minWidth: "120px",
              transition: "all 0.3s ease",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ✅ Start Quiz button centered */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            padding: "14px 34px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1.1rem",
            transition: "background 0.3s ease",
          }}
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div> // ✅ now closed
  );
};

export default Home;
