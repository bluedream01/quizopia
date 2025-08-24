// Topics (like topic_map table)
export const topics = [
  // Algebra
  { topic_code: 101, topic_name: "Linear Equations" },
  { topic_code: 102, topic_name: "Quadratic Equations" },
  { topic_code: 103, topic_name: "Polynomials" },

  // Geometry
  { topic_code: 201, topic_name: "Triangles" },
  { topic_code: 202, topic_name: "Circles" },
  { topic_code: 203, topic_name: "Coordinate Geometry" },

  // Trigonometry
  { topic_code: 301, topic_name: "Trigonometric Ratios" },
  { topic_code: 302, topic_name: "Heights and Distances" },

  // Calculus (basic)
  { topic_code: 401, topic_name: "Limits" },
  { topic_code: 402, topic_name: "Derivatives" },

  // Physics
  { topic_code: 501, topic_name: "Laws of Motion" },
  { topic_code: 502, topic_name: "Work, Power & Energy" },

  // Chemistry
  { topic_code: 601, topic_name: "Chemical Reactions" },
  { topic_code: 602, topic_name: "Periodic Table" },
];

// Questions (like qset table)
export const qset = [
  // Linear Equations (2 marks)
  { q_code: 1, topic_code: 101, statement: "Solve for x: 2x + 3 = 7", score: 2 },
  { q_code: 2, topic_code: 101, statement: "If 3x = 12, find x", score: 2 },
  { q_code: 3, topic_code: 101, statement: "Solve: 5x - 2 = 8", score: 2 },
  { q_code: 4, topic_code: 101, statement: "Find the value of x if 4x + 7 = 19", score: 2 },

  // Quadratic Equations (5 marks)
  { q_code: 5, topic_code: 102, statement: "Solve: x² - 5x + 6 = 0", score: 5 },
  { q_code: 6, topic_code: 102, statement: "Find roots of x² + 3x + 2 = 0", score: 5 },
  { q_code: 7, topic_code: 102, statement: "Find roots of x² - 7x + 12 = 0", score: 5 },
  { q_code: 8, topic_code: 102, statement: "If α, β are roots of x² - 2x - 3 = 0, find α + β", score: 5 },

  // Polynomials (2 & 5 marks)
  { q_code: 9, topic_code: 103, statement: "Find zeroes of polynomial x² - 4", score: 2 },
  { q_code: 10, topic_code: 103, statement: "Verify relation between zeroes and coefficients for x² + x - 6", score: 5 },

  // Triangles (5 & 10 marks)
  { q_code: 11, topic_code: 201, statement: "State and prove Pythagoras theorem", score: 10 },
  { q_code: 12, topic_code: 201, statement: "In a right triangle, base = 6, height = 8. Find hypotenuse.", score: 5 },
  { q_code: 13, topic_code: 201, statement: "Prove: Sum of angles in a triangle = 180°", score: 5 },

  // Circles (2 & 5 marks)
  { q_code: 14, topic_code: 202, statement: "Define radius and diameter of a circle", score: 2 },
  { q_code: 15, topic_code: 202, statement: "Find area of a circle with radius 7 cm", score: 5 },
  { q_code: 16, topic_code: 202, statement: "State and prove tangent-secant theorem", score: 5 },

  // Coordinate Geometry (2 & 5 marks)
  { q_code: 17, topic_code: 203, statement: "Find distance between (0,0) and (3,4)", score: 2 },
  { q_code: 18, topic_code: 203, statement: "Find midpoint of line joining (2,3) and (4,7)", score: 2 },
  { q_code: 19, topic_code: 203, statement: "Find slope of line passing through (1,2) and (3,6)", score: 5 },

  // Trigonometric Ratios (2 & 5 marks)
  { q_code: 20, topic_code: 301, statement: "Find sin 30°", score: 2 },
  { q_code: 21, topic_code: 301, statement: "Find cos 60°", score: 2 },
  { q_code: 22, topic_code: 301, statement: "Prove: sin²θ + cos²θ = 1", score: 5 },

  // Heights and Distances (5 & 10 marks)
  { q_code: 23, topic_code: 302, statement: "A pole is 10 m tall. Its shadow is 10 m. Find angle of elevation.", score: 5 },
  { q_code: 24, topic_code: 302, statement: "A man observes top of tower at 30°. After walking 50 m closer, angle is 60°. Find height of tower.", score: 10 },

  // Limits (2 & 5 marks)
  { q_code: 25, topic_code: 401, statement: "Find lim(x→0) (sinx / x)", score: 5 },
  { q_code: 26, topic_code: 401, statement: "Find lim(x→∞) (1/x)", score: 2 },

  // Derivatives (5 marks)
  { q_code: 27, topic_code: 402, statement: "Differentiate x² with respect to x", score: 5 },
  { q_code: 28, topic_code: 402, statement: "Differentiate sinx with respect to x", score: 5 },

  // Laws of Motion (2 & 5 marks)
  { q_code: 29, topic_code: 501, statement: "State Newton’s First Law of Motion", score: 2 },
  { q_code: 30, topic_code: 501, statement: "A force of 10N is applied on a 2kg body. Find acceleration.", score: 5 },

  // Work, Power & Energy (2 & 5 marks)
  { q_code: 31, topic_code: 502, statement: "Define kinetic energy", score: 2 },
  { q_code: 32, topic_code: 502, statement: "A 10kg object is lifted 2m. Find work done (g=10).", score: 5 },

  // Chemical Reactions (2 & 5 marks)
  { q_code: 33, topic_code: 601, statement: "Define oxidation", score: 2 },
  { q_code: 34, topic_code: 601, statement: "Balance: H₂ + O₂ → H₂O", score: 5 },

  // Periodic Table (2 & 5 marks)
  { q_code: 35, topic_code: 602, statement: "What is the atomic number of Oxygen?", score: 2 },
  { q_code: 36, topic_code: 602, statement: "Name first 10 elements of periodic table", score: 5 },
];
