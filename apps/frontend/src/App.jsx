import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Welcome to Kondwani</h1>
        <p className="subtitle">Risk Management System</p>
        
        <nav className="navigation">
          <a href="/" className="nav-link active">Home</a>
          <a href="/risks" className="nav-link">Risks</a>
          <a href="/dashboard" className="nav-link">Dashboard</a>
          <a href="/settings" className="nav-link">Settings</a>
        </nav>

        <div className="content">
          <h2>Identify, Assess, and Mitigate Project Risks</h2>
          <p>Kondwani helps you manage project risks effectively with an intuitive interface and comprehensive tools.</p>
          
          <div className="features">
            <div className="feature-card">
              <h3>📊 Risk Dashboard</h3>
              <p>Visualize all your project risks in one comprehensive dashboard.</p>
            </div>
            <div className="feature-card">
              <h3>🔍 Risk Identification</h3>
              <p>Identify potential risks early in your project lifecycle.</p>
            </div>
            <div className="feature-card">
              <h3>📈 Risk Assessment</h3>
              <p>Assess the impact and probability of each risk.</p>
            </div>
            <div className="feature-card">
              <h3>🛡️ Mitigation Plans</h3>
              <p>Create and track mitigation strategies for identified risks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
