'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

interface BuyingStep {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  estimatedTime: string;
  keyDecisions: string[];
  reflectionQuestions: string[];
  resources: string[];
}

interface HomeBuyingJourneyProps {
  className?: string;
}

export function HomeBuyingJourney({ className = '' }: HomeBuyingJourneyProps) {
  const [steps, setSteps] = useState<BuyingStep[]>([]);
  const [currentStep, setCurrentStep] = useState<BuyingStep | null>(null);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, string>>({});
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [timeline, setTimeline] = useState('');
  const announce = useScreenReaderAnnouncements();

  const buyingSteps: BuyingStep[] = [
    {
      id: '1',
      title: 'Assess Your Financial Readiness',
      description: 'Determine your budget, get pre-approved, and understand your financial position',
      status: 'not-started',
      estimatedTime: '1-2 weeks',
      keyDecisions: [
        'How much can you afford monthly?',
        'What down payment can you make?',
        'Do you have emergency funds?',
        'What type of loan works best?'
      ],
      reflectionQuestions: [
        'How comfortable do you feel with your budget?',
        'What financial goals might this purchase impact?',
        'Have you considered all costs beyond the mortgage?'
      ],
      resources: ['Mortgage Calculator', 'Budget Planner', 'Pre-approval Process']
    },
    {
      id: '2',
      title: 'Define Your Home Criteria',
      description: 'Create a clear picture of what you want and need in your new home',
      status: 'not-started',
      estimatedTime: '1 week',
      keyDecisions: [
        'What neighborhoods interest you?',
        'What are your must-have features?',
        'What are your nice-to-have features?',
        'How important is resale value?'
      ],
      reflectionQuestions: [
        'What compromises are you willing to make?',
        'How might your needs change in 5 years?',
        'What factors are most important for your lifestyle?'
      ],
      resources: ['Neighborhood Guide', 'Property Search', 'Feature Checklist']
    },
    {
      id: '3',
      title: 'Start Your Home Search',
      description: 'Begin viewing properties and comparing options',
      status: 'not-started',
      estimatedTime: '4-8 weeks',
      keyDecisions: [
        'Which properties to view?',
        'How to evaluate each property?',
        'What questions to ask?',
        'How to compare options?'
      ],
      reflectionQuestions: [
        'What surprised you during property visits?',
        'How do properties compare to your criteria?',
        'What new priorities have emerged?'
      ],
      resources: ['Property Listings', 'Viewing Checklist', 'Comparison Tools']
    },
    {
      id: '4',
      title: 'Make an Offer',
      description: 'Submit your offer and negotiate terms',
      status: 'not-started',
      estimatedTime: '1-2 weeks',
      keyDecisions: [
        'What price to offer?',
        'What contingencies to include?',
        'How to handle counteroffers?',
        'What closing timeline works?'
      ],
      reflectionQuestions: [
        'How confident are you in your offer?',
        'What risks are you comfortable with?',
        'How important is this specific property?'
      ],
      resources: ['Market Analysis', 'Offer Strategy', 'Negotiation Tips']
    },
    {
      id: '5',
      title: 'Complete Due Diligence',
      description: 'Inspect the property and finalize financing',
      status: 'not-started',
      estimatedTime: '2-3 weeks',
      keyDecisions: [
        'What inspections to order?',
        'How to handle inspection results?',
        'Finalize loan details?',
        'Review all documents?'
      ],
      reflectionQuestions: [
        'Are you comfortable with the inspection results?',
        'Do you understand all the costs?',
        'Are you ready to move forward?'
      ],
      resources: ['Inspection Guide', 'Closing Cost Calculator', 'Document Review']
    },
    {
      id: '6',
      title: 'Close on Your Home',
      description: 'Finalize the purchase and get your keys',
      status: 'not-started',
      estimatedTime: '1 day',
      keyDecisions: [
        'Review final documents?',
        'Arrange final walkthrough?',
        'Plan for moving day?',
        'Set up utilities and services?'
      ],
      reflectionQuestions: [
        'How do you feel about your purchase?',
        'What are you most excited about?',
        'What would you do differently next time?'
      ],
      resources: ['Closing Checklist', 'Moving Guide', 'New Homeowner Tips']
    }
  ];

  useEffect(() => {
    // Load saved progress
    const savedSteps = localStorage.getItem('home-buying-steps');
    const savedBudget = localStorage.getItem('home-buying-budget');
    const savedLocation = localStorage.getItem('home-buying-location');
    const savedTimeline = localStorage.getItem('home-buying-timeline');

    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    } else {
      setSteps(buyingSteps);
    }

    if (savedBudget) setBudget(savedBudget);
    if (savedLocation) setLocation(savedLocation);
    if (savedTimeline) setTimeline(savedTimeline);
  }, []);

  const updateStepStatus = (stepId: string, status: BuyingStep['status']) => {
    const updatedSteps = steps.map(step => 
      step.id === stepId ? { ...step, status } : step
    );
    setSteps(updatedSteps);
    localStorage.setItem('home-buying-steps', JSON.stringify(updatedSteps));
    announce(`Step ${status}`, 'polite');
  };

  const startReflection = (step: BuyingStep) => {
    setCurrentStep(step);
    setShowReflection(true);
    announce('Starting reflection', 'polite');
  };

  const saveReflection = () => {
    if (currentStep) {
      const updatedAnswers = { ...reflectionAnswers };
      currentStep.reflectionQuestions.forEach((question, index) => {
        const answer = (document.getElementById(`reflection-${index}`) as HTMLTextAreaElement)?.value;
        if (answer) {
          updatedAnswers[`${currentStep.id}-${index}`] = answer;
        }
      });
      setReflectionAnswers(updatedAnswers);
      localStorage.setItem('reflection-answers', JSON.stringify(updatedAnswers));
      setShowReflection(false);
      announce('Reflection saved', 'polite');
    }
  };

  const savePreferences = () => {
    localStorage.setItem('home-buying-budget', budget);
    localStorage.setItem('home-buying-location', location);
    localStorage.setItem('home-buying-timeline', timeline);
    announce('Preferences saved', 'polite');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      default: return '⏳';
    }
  };

  const completedSteps = steps.filter(s => s.status === 'completed').length;
  const totalSteps = steps.length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Home Buying Journey
        </h2>
        <p className="text-gray-600 mb-6">
          Track your progress and make thoughtful decisions throughout your home buying process
        </p>
        
        {/* Overall Progress */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Journey Progress</h3>
            <span className="text-2xl font-bold text-blue-600">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {completedSteps} of {totalSteps} steps completed
          </p>
        </div>

        {/* Quick Preferences */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g., $400,000 - $500,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Areas</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Summerlin, Henderson"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
              <input
                type="text"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                placeholder="e.g., 3-6 months"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={savePreferences}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Save Preferences
          </button>
        </div>
      </div>

      {/* Journey Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(step.status)}`}>
                    <span className="text-lg">{getStatusIcon(step.status)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500">Step {index + 1}</span>
                    <span className="text-sm text-gray-500">{step.estimatedTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateStepStatus(step.id, 'in-progress')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    step.status === 'in-progress' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  Start
                </button>
                <button
                  onClick={() => updateStepStatus(step.id, 'completed')}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    step.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50'
                  }`}
                >
                  Complete
                </button>
              </div>
            </div>

            {/* Key Decisions */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Key Decisions:</h4>
              <div className="flex flex-wrap gap-2">
                {step.keyDecisions.map((decision, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {decision}
                  </span>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Resources:</h4>
              <div className="flex flex-wrap gap-2">
                {step.resources.map((resource, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {resource}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end">
              <button
                onClick={() => startReflection(step)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Reflect on This Step
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reflection Modal */}
      {showReflection && currentStep && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Reflect on: {currentStep.title}
              </h3>
              <button
                onClick={() => setShowReflection(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {currentStep.reflectionQuestions.map((question, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {question}
                  </label>
                  <textarea
                    id={`reflection-${index}`}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your thoughts..."
                    defaultValue={reflectionAnswers[`${currentStep.id}-${index}`] || ''}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3 mt-8">
              <button
                onClick={() => setShowReflection(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveReflection}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Reflection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
