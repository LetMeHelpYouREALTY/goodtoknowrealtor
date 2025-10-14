'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

interface SellingStep {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  estimatedTime: string;
  keyDecisions: string[];
  reflectionQuestions: string[];
  resources: string[];
}

interface HomeSellingJourneyProps {
  className?: string;
}

export function HomeSellingJourney({ className = '' }: HomeSellingJourneyProps) {
  const [steps, setSteps] = useState<SellingStep[]>([]);
  const [currentStep, setCurrentStep] = useState<SellingStep | null>(null);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, string>>({});
  const [targetPrice, setTargetPrice] = useState('');
  const [timeline, setTimeline] = useState('');
  const [reason, setReason] = useState('');
  const announce = useScreenReaderAnnouncements();

  const sellingSteps: SellingStep[] = [
    {
      id: '1',
      title: 'Assess Your Home\'s Value',
      description: 'Get a professional valuation and understand your home\'s market position',
      status: 'not-started',
      estimatedTime: '1 week',
      keyDecisions: [
        'What is your home worth?',
        'How does it compare to similar homes?',
        'What improvements might increase value?',
        'What is your target selling price?'
      ],
      reflectionQuestions: [
        'How does the valuation compare to your expectations?',
        'What factors most influence your home\'s value?',
        'Are you comfortable with the market assessment?'
      ],
      resources: ['Home Value Calculator', 'Market Analysis', 'Comparable Sales']
    },
    {
      id: '2',
      title: 'Prepare Your Home for Sale',
      description: 'Make necessary repairs, improvements, and staging decisions',
      status: 'not-started',
      estimatedTime: '2-4 weeks',
      keyDecisions: [
        'What repairs are necessary?',
        'What improvements offer the best ROI?',
        'Should you stage the home?',
        'How to handle personal belongings?'
      ],
      reflectionQuestions: [
        'Which improvements feel most important to you?',
        'How do you want buyers to experience your home?',
        'What memories are you ready to let go of?'
      ],
      resources: ['Home Preparation Checklist', 'Staging Guide', 'ROI Calculator']
    },
    {
      id: '3',
      title: 'Choose Your Selling Strategy',
      description: 'Decide on pricing, marketing, and listing approach',
      status: 'not-started',
      estimatedTime: '1 week',
      keyDecisions: [
        'What listing price strategy?',
        'How to market your home?',
        'What showing schedule works?',
        'How to handle offers?'
      ],
      reflectionQuestions: [
        'How important is selling quickly vs. getting top price?',
        'What level of involvement do you want?',
        'How do you want to handle negotiations?'
      ],
      resources: ['Pricing Strategy', 'Marketing Plan', 'Negotiation Guide']
    },
    {
      id: '4',
      title: 'List and Market Your Home',
      description: 'Launch your listing and begin showing to potential buyers',
      status: 'not-started',
      estimatedTime: '4-8 weeks',
      keyDecisions: [
        'How to handle showings?',
        'What feedback to gather?',
        'How to adjust strategy?',
        'When to consider price changes?'
      ],
      reflectionQuestions: [
        'How do you feel about strangers viewing your home?',
        'What feedback has been most valuable?',
        'How has the market response been?'
      ],
      resources: ['Showing Schedule', 'Feedback Tracker', 'Market Response Analysis']
    },
    {
      id: '5',
      title: 'Evaluate and Negotiate Offers',
      description: 'Review offers and negotiate terms with potential buyers',
      status: 'not-started',
      estimatedTime: '1-2 weeks',
      keyDecisions: [
        'Which offer to accept?',
        'How to handle multiple offers?',
        'What contingencies to accept?',
        'How to negotiate terms?'
      ],
      reflectionQuestions: [
        'What factors are most important in an offer?',
        'How comfortable are you with negotiations?',
        'What risks are you willing to accept?'
      ],
      resources: ['Offer Comparison Tool', 'Negotiation Strategies', 'Contingency Guide']
    },
    {
      id: '6',
      title: 'Complete the Sale',
      description: 'Finalize the transaction and prepare for closing',
      status: 'not-started',
      estimatedTime: '2-4 weeks',
      keyDecisions: [
        'How to handle inspections?',
        'What repairs to complete?',
        'When to schedule closing?',
        'How to prepare for moving?'
      ],
      reflectionQuestions: [
        'How do you feel about the final terms?',
        'What are you most looking forward to?',
        'What would you do differently next time?'
      ],
      resources: ['Closing Checklist', 'Moving Timeline', 'Final Walkthrough Guide']
    }
  ];

  useEffect(() => {
    // Load saved progress
    const savedSteps = localStorage.getItem('home-selling-steps');
    const savedTargetPrice = localStorage.getItem('home-selling-target-price');
    const savedTimeline = localStorage.getItem('home-selling-timeline');
    const savedReason = localStorage.getItem('home-selling-reason');

    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    } else {
      setSteps(sellingSteps);
    }

    if (savedTargetPrice) setTargetPrice(savedTargetPrice);
    if (savedTimeline) setTimeline(savedTimeline);
    if (savedReason) setReason(savedReason);
  }, []);

  const updateStepStatus = (stepId: string, status: SellingStep['status']) => {
    const updatedSteps = steps.map(step => 
      step.id === stepId ? { ...step, status } : step
    );
    setSteps(updatedSteps);
    localStorage.setItem('home-selling-steps', JSON.stringify(updatedSteps));
    announce(`Step ${status}`, 'polite');
  };

  const startReflection = (step: SellingStep) => {
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
    localStorage.setItem('home-selling-target-price', targetPrice);
    localStorage.setItem('home-selling-timeline', timeline);
    localStorage.setItem('home-selling-reason', reason);
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
          Your Home Selling Journey
        </h2>
        <p className="text-gray-600 mb-6">
          Navigate your selling process with confidence and thoughtful decision-making
        </p>
        
        {/* Overall Progress */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Journey Progress</h3>
            <span className="text-2xl font-bold text-green-600">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {completedSteps} of {totalSteps} steps completed
          </p>
        </div>

        {/* Quick Preferences */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Selling Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Price</label>
              <input
                type="text"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
                placeholder="e.g., $450,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
              <input
                type="text"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                placeholder="e.g., 3-6 months"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Selling</label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g., Downsizing, Relocating"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={savePreferences}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Save Goals
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
                  <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
