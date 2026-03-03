import React from "react";

function App() {
  return (
    <div className="container">

      {/* LEFT PANEL */}
      <div className="left">

        <img src="/profile.jpg" alt="Sparshi Jain" className="profile-img" />

        <h1>Sparshi Jain</h1>
        <h3>AI & ML Engineer</h3>

        <p className="summary">
          B.Tech Mathematics & Computing student (CGPA 7.86) with hands-on
          experience in Machine Learning, Deep Learning, NLP, and
          Generative AI systems. Specialized in RAG pipelines and LLM workflows.
        </p>

        <a href="/resume.pdf" className="btn" download>
          Download Resume
        </a>

        <div className="socials">
          <a href="https://github.com/sparshi15" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sparshi-jain-846090291" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:jainsparshi80@gmail.com">Email</a>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="right">

        {/* EXPERIENCE */}
        <section>
          <h2>Experience</h2>

          <div className="card">
            <h3>AI & Quant Research Intern — CiteSert</h3>
            <span>Aug 2025 – Nov 2025</span>
            <p>
              Designed ML analytical pipelines and conducted quantitative
              machine learning research for data-driven software systems.
            </p>
          </div>

          <div className="card">
            <h3>Tech Contributor — GSSOC 2025</h3>
            <span>Aug 2025 – Present</span>
            <p>
              Contributed to open-source ML projects including data preprocessing,
              model optimization, and GitHub collaboration.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2>Projects</h2>

          <div className="card">
            <h3>OrganTrust AI</h3>
            <p>
              Deep Learning-based transplant compatibility system integrated
              with Generative AI + RAG for contextual clinical insights.
            </p>
            <a href="https://github.com/sparshi15/OrganTrust-AI--main" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="card">
            <h3>Research Abstract Sentiment Analysis</h3>
            <p>
              NLP pipeline comparing ML, Deep Learning, and Transformer models
              with RAG-based explanation system.
            </p>
            <a href="https://github.com/sparshi15/Research-Paper-Abstract-Sentiment-Analysis-By-Machine-Learning-" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="card">
            <h3>Customer Churn Prediction (ANN)</h3>
            <p>
              Built ANN using TensorFlow/Keras achieving 85%+ accuracy.
              Deployed using Streamlit for real-time prediction.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2>Skills</h2>

          <div className="skills">
            <span>Machine Learning</span>
            <span>Deep Learning (ANN, CNN, LSTM)</span>
            <span>NLP & Transformers</span>
            <span>Generative AI & RAG</span>
            <span>FastAPI / Flask</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
