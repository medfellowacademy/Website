"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FellowshipMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: "specialty",
      question: "What is your current medical specialty?",
      options: [
        "General Medicine / Internal Medicine",
        "Obstetrics & Gynecology",
        "Anesthesiology",
        "Orthopedics",
        "Radiology",
        "General Surgery",
        "Other"
      ]
    },
    {
      id: "interest",
      question: "What interests you most in your career?",
      options: [
        "Procedures & Interventions",
        "Critical Care & Emergency",
        "Diagnostic & Imaging",
        "Patient Care & Management",
        "Research & Academics"
      ]
    },
    {
      id: "income",
      question: "What is your current monthly income?",
      options: [
        "Less than ₹50,000",
        "₹50,000 - ₹1,00,000",
        "₹1,00,000 - ₹2,00,000",
        "More than ₹2,00,000"
      ]
    },
    {
      id: "goal",
      question: "What is your primary career goal?",
      options: [
        "Increase income significantly (3-5X)",
        "Start my own practice/clinic",
        "Work in super-specialty hospitals",
        "Academic career in medical colleges",
        "International opportunities"
      ]
    },
    {
      id: "timeline",
      question: "How soon can you commit to a fellowship?",
      options: [
        "Within 1 month",
        "2-3 months",
        "4-6 months",
        "Not sure yet"
      ]
    }
  ];

  const recommendations = {
    "procedures": [
      { 
        name: "Gastroenterology", 
        match: 95, 
        salary: "₹3.5-5L/month",
        reason: "High procedural volume, excellent ROI"
      },
      { 
        name: "Arthroscopy & Arthroplasty", 
        match: 92, 
        salary: "₹4-6L/month",
        reason: "Surgical expertise, high demand"
      }
    ],
    "critical": [
      { 
        name: "Critical Care Medicine", 
        match: 97, 
        salary: "₹3-4.5L/month",
        reason: "High demand, ICU expertise"
      },
      { 
        name: "Emergency Medicine", 
        match: 90, 
        salary: "₹2.5-4L/month",
        reason: "Fast-paced, hospital positions"
      }
    ],
    "diagnostic": [
      { 
        name: "Radiology Fellowship", 
        match: 94, 
        salary: "₹3.5-5L/month",
        reason: "Advanced imaging, teleradiology options"
      },
      { 
        name: "Ultrasonography", 
        match: 88, 
        salary: "₹2-3.5L/month",
        reason: "Shorter duration, immediate returns"
      }
    ],
    "default": [
      { 
        name: "Fellowship in Gastroenterology", 
        match: 90, 
        salary: "₹3.5-5L/month",
        reason: "Versatile, high demand"
      },
      { 
        name: "Fellowship in Critical Care", 
        match: 88, 
        salary: "₹3-4.5L/month",
        reason: "Growing field, job security"
      },
      { 
        name: "Fellowship in Pain Management", 
        match: 85, 
        salary: "₹3-4L/month",
        reason: "Independent practice potential"
      }
    ]
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[step].id]: answer });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendations = () => {
    const interest = answers.interest;
    if (interest?.includes("Procedures")) return recommendations.procedures;
    if (interest?.includes("Critical")) return recommendations.critical;
    if (interest?.includes("Diagnostic")) return recommendations.diagnostic;
    return recommendations.default;
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-linear-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">AI-Powered Fellowship Matcher</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Answer 5 quick questions and get personalized fellowship recommendations with salary projections
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {!showResults ? (
            <div className="card p-8 md:p-12">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-secondary">Question {step + 1} of {questions.length}</span>
                  <span className="font-semibold text-primary">{Math.round(((step + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-secondary to-accent h-2 rounded-full transition-all"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8">
                {questions[step].question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {questions[step].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-secondary hover:bg-secondary/5 transition-all font-medium text-primary"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-secondary hover:text-primary font-semibold"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <div>
              {/* Results */}
              <div className="card p-8 md:p-12 mb-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🎯</div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-3">
                    Your Personalized Recommendations
                  </h2>
                  <p className="text-lg text-text-secondary">
                    Based on your profile, here are the best fellowship matches for you
                  </p>
                </div>

                <div className="space-y-6">
                  {getRecommendations().map((rec, index) => (
                    <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-secondary transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                            {rec.name}
                          </h3>
                          <p className="text-text-secondary mb-2">{rec.reason}</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-accent mb-1">{rec.match}%</div>
                          <div className="text-xs text-text-secondary">Match</div>
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="bg-background p-4 rounded-lg">
                          <div className="text-sm text-text-secondary mb-1">Expected Salary</div>
                          <div className="text-xl font-bold text-primary">{rec.salary}</div>
                        </div>
                        <div className="bg-background p-4 rounded-lg">
                          <div className="text-sm text-text-secondary mb-1">ROI Timeline</div>
                          <div className="text-xl font-bold text-primary">12-18 months</div>
                        </div>
                      </div>

                      <Link 
                        href={`/programs/${rec.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                        className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all"
                      >
                        View Program Details
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Pathway Visualization */}
              <div className="card p-8 mb-8">
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">Your Career Pathway</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">📋</span>
                    </div>
                    <div className="font-bold text-primary">Now</div>
                    <div className="text-sm text-text-secondary">Current Position</div>
                  </div>
                  
                  <div className="hidden md:block text-4xl text-secondary">→</div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <div className="font-bold text-primary">12 Months</div>
                    <div className="text-sm text-text-secondary">Fellowship Complete</div>
                  </div>
                  
                  <div className="hidden md:block text-4xl text-secondary">→</div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">💰</span>
                    </div>
                    <div className="font-bold text-primary">18-24 Months</div>
                    <div className="text-sm text-text-secondary">3-5X Income Increase</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/apply"
                  className="flex-1 text-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all text-lg"
                >
                  Apply Now
                </Link>
                <button
                  onClick={resetQuiz}
                  className="flex-1 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-lg"
                >
                  Retake Quiz
                </button>
                <Link 
                  href="/contact"
                  className="flex-1 text-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all text-lg"
                >
                  Talk to Counselor
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
