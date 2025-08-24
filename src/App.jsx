// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Quiz from './pages/quiz'
// import Home from './pages/home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path ="/" element={<Home/>}/>
//           <Route path ="/quiz" element={<Quiz/>}/>
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App
import { useState } from "react";
import { topics, qset } from "./data"; // ✅ your dataset

function App() {
  const [sections, setSections] = useState([]);
  const [paper, setPaper] = useState([]);
  const [newSection, setNewSection] = useState({ numQ: "", score: "", topic_codes: [] });

  // ✅ toggle topic selection
  const toggleTopic = (code) => {
    if (newSection.topic_codes.includes(code)) {
      setNewSection({
        ...newSection,
        topic_codes: newSection.topic_codes.filter((t) => t !== code),
      });
    } else {
      setNewSection({
        ...newSection,
        topic_codes: [...newSection.topic_codes, code],
      });
    }
  };

  // ✅ save section
  const saveSection = () => {
    if (!newSection.numQ || !newSection.score || newSection.topic_codes.length === 0) {
      alert("Please fill all fields!");
      return;
    }
    setSections([
      ...sections,
      {
        ...newSection,
        numQ: parseInt(newSection.numQ),
        score: parseInt(newSection.score),
      },
    ]);
    setNewSection({ numQ: "", score: "", topic_codes: [] });
  };

  // ✅ generate paper without repeats
  const generatePaper = () => {
    let usedQuestions = new Set();
    let result = sections.map((sec) => {
      let candidates = qset.filter(
        (q) =>
          sec.topic_codes.includes(q.topic_code) &&
          q.score === sec.score &&
          !usedQuestions.has(q.q_code)
      );

      let chosen = [];
      for (let i = 0; i < sec.numQ; i++) {
        if (candidates.length === 0) break;
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const randomQ = candidates[randomIndex];
        chosen.push(randomQ);
        usedQuestions.add(randomQ.q_code);
        candidates.splice(randomIndex, 1);
      }

      return { ...sec, questions: chosen };
    });
    setPaper(result);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">📄 Question Paper Generator</h1>

      {/* Section Form */}
      <div className="border p-4 rounded bg-gray-50 mb-4 shadow">
        <h2 className="text-lg font-semibold mb-2">➕ Add New Section</h2>
        <div className="flex gap-4 mb-2">
          {/* Number of Questions Dropdown */}
          <select
            value={newSection.numQ}
            onChange={(e) => setNewSection({ ...newSection, numQ: e.target.value })}
            className="border p-2 rounded w-48"
          >
            <option value="">Select No. of Questions</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          {/* Marks Dropdown */}
          <select
            value={newSection.score}
            onChange={(e) => setNewSection({ ...newSection, score: e.target.value })}
            className="border p-2 rounded w-48"
          >
            <option value="">Select Marks....</option>
            {[2, 5, 10].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Topics Checkboxes */}
        <p className="font-semibold mb-1">Select Topics:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
          {topics.map((t) => (
            <label key={t.topic_code} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={newSection.topic_codes.includes(t.topic_code)}
                onChange={() => toggleTopic(t.topic_code)}
              />
              {t.topic_name}
            </label>
          ))}
        </div>

        <button
          onClick={saveSection}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Save Section
        </button>
      </div>

      {/* Configured Sections */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">📌 Configured Sections:</h2>
        {sections.length === 0 && <p className="text-gray-500">No sections added yet.</p>}
        {sections.map((s, i) => (
          <div key={i} className="mt-2 border p-2 rounded bg-gray-100">
            <strong>Section {i + 1}</strong> — {s.numQ} Qs × {s.score} Marks  
            (Topics:{" "}
            {s.topic_codes
              .map((code) => topics.find((t) => t.topic_code === code)?.topic_name)
              .join(", ")}
            )
          </div>
        ))}
      </div>

      <button
        onClick={generatePaper}
        className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
        disabled={sections.length === 0}
      >
        🎯 Generate Paper
      </button>

      {/* Final Paper */}
      {paper.length > 0 && (
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-bold mb-4">📘 Generated Question Paper</h2>
          {paper.map((sec, i) => (
            <div key={i} className="mt-4">
              <h3 className="font-semibold text-lg">
                Section {i + 1}: {sec.numQ} × {sec.score} Marks  
                (Topics:{" "}
                {sec.topic_codes
                  .map((code) => topics.find((t) => t.topic_code === code)?.topic_name)
                  .join(", ")}
                )
              </h3>
              <ol className="list-decimal ml-6">
                {sec.questions.map((q) => (
                  <li key={q.q_code} className="mb-1">
                    {q.statement} <span className="text-gray-600">[{q.score} Marks]</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

