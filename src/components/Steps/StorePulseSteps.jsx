import React from "react";
import "./StorePulseSteps.css";

const steps = [
    {
        number: 1,
        title: "Seamless Integration",
        description: "Use your existing camera systems-- no new hardware needed."
    },
    {
        number: 2,
        title: "AI Engine Your Way",
        description: "Pick a pre-trained model or deploy your own custom AI."
    },
    {
        number: 3,
        title: "Quick Camera Setup",
        description: "Plugin and configure camera within minutes– it's that simple."
    },
    {
        number: 4,
        title: "Live Insights",
        description: "View real-time analytics on operations, customers and trends."
    }
];

export default function StorePulseSteps() {
    return (
        <div className="storepulse-container">
            <h2 className="subtitle">EFFORTLESS SETUP. POWERFUL INTELLIGENCE. REAL-TIME RESULTS.</h2>
            <h1 className="title">How StorePulse Works</h1>
            <div className="steps-wrapper">
                <div className="horizontal-line" />
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className={`step-box ${step.number === 1 ? "highlighted" : ""}`}>
                            <div className="circle">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p className="description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
