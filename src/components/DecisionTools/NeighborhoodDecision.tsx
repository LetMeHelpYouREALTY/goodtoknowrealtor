'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

interface Neighborhood {
  id: string;
  name: string;
  description: string;
  avgHomePrice: number;
  avgDaysOnMarket: number;
  schoolRating: number;
  walkScore: number;
  crimeRate: 'Low' | 'Medium' | 'High';
  amenities: string[];
  commute: {
    downtown: number;
    airport: number;
    strip: number;
  };
  pros: string[];
  cons: string[];
  notes: string;
}

interface NeighborhoodDecisionProps {
  className?: string;
}

export function NeighborhoodDecision({ className = '' }: NeighborhoodDecisionProps) {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, string>>({});
  const [userPriorities, setUserPriorities] = useState({
    budget: '',
    schools: '',
    commute: '',
    amenities: '',
    safety: ''
  });
  const announce = useScreenReaderAnnouncements();

  // Sample neighborhoods for Las Vegas area
  const sampleNeighborhoods: Neighborhood[] = [
    {
      id: '1',
      name: 'Summerlin',
      description: 'Master-planned community with golf courses, parks, and shopping centers',
      avgHomePrice: 750000,
      avgDaysOnMarket: 45,
      schoolRating: 8.5,
      walkScore: 65,
      crimeRate: 'Low',
      amenities: ['Golf Courses', 'Shopping Centers', 'Parks', 'Trails', 'Restaurants'],
      commute: { downtown: 25, airport: 30, strip: 20 },
      pros: ['Excellent schools', 'Low crime', 'Great amenities', 'Master planned'],
      cons: ['Higher prices', 'HOA fees', 'Traffic during peak hours'],
      notes: ''
    },
    {
      id: '2',
      name: 'Henderson',
      description: 'Family-friendly city with good schools and recreational facilities',
      avgHomePrice: 550000,
      avgDaysOnMarket: 35,
      schoolRating: 8.0,
      walkScore: 45,
      crimeRate: 'Low',
      amenities: ['Parks', 'Libraries', 'Community Centers', 'Shopping', 'Restaurants'],
      commute: { downtown: 20, airport: 25, strip: 15 },
      pros: ['Good value', 'Family friendly', 'Safe', 'Good schools'],
      cons: ['Limited nightlife', 'Older homes', 'Less walkable'],
      notes: ''
    },
    {
      id: '3',
      name: 'Downtown Las Vegas',
      description: 'Urban living with entertainment, dining, and cultural attractions',
      avgHomePrice: 450000,
      avgDaysOnMarket: 60,
      schoolRating: 6.5,
      walkScore: 85,
      crimeRate: 'Medium',
      amenities: ['Entertainment', 'Restaurants', 'Cultural Sites', 'Public Transit', 'Nightlife'],
      commute: { downtown: 5, airport: 15, strip: 10 },
      pros: ['Walkable', 'Entertainment', 'Cultural attractions', 'Urban lifestyle'],
      cons: ['Higher crime', 'Noise', 'Limited parking', 'Older schools'],
      notes: ''
    },
    {
      id: '4',
      name: 'Green Valley',
      description: 'Established neighborhood with mature trees and community feel',
      avgHomePrice: 600000,
      avgDaysOnMarket: 40,
      schoolRating: 7.5,
      walkScore: 55,
      crimeRate: 'Low',
      amenities: ['Parks', 'Shopping Centers', 'Restaurants', 'Golf', 'Community Events'],
      commute: { downtown: 15, airport: 20, strip: 12 },
      pros: ['Mature trees', 'Community feel', 'Good location', 'Established area'],
      cons: ['Older homes', 'Limited new construction', 'Some traffic'],
      notes: ''
    }
  ];

  useEffect(() => {
    // Load saved data
    const savedNeighborhoods = localStorage.getItem('neighborhood-comparison');
    const savedPriorities = localStorage.getItem('neighborhood-priorities');
    
    if (savedNeighborhoods) {
      setNeighborhoods(JSON.parse(savedNeighborhoods));
    } else {
      setNeighborhoods(sampleNeighborhoods);
    }

    if (savedPriorities) {
      setUserPriorities(JSON.parse(savedPriorities));
    }
  }, []);

  const toggleNeighborhoodSelection = (neighborhoodId: string) => {
    setSelectedNeighborhoods(prev => 
      prev.includes(neighborhoodId) 
        ? prev.filter(id => id !== neighborhoodId)
        : [...prev, neighborhoodId]
    );
    announce('Neighborhood selection updated', 'polite');
  };

  const updateNeighborhoodNotes = (neighborhoodId: string, notes: string) => {
    const updatedNeighborhoods = neighborhoods.map(neighborhood => 
      neighborhood.id === neighborhoodId ? { ...neighborhood, notes } : neighborhood
    );
    setNeighborhoods(updatedNeighborhoods);
    localStorage.setItem('neighborhood-comparison', JSON.stringify(updatedNeighborhoods));
  };

  const savePriorities = () => {
    localStorage.setItem('neighborhood-priorities', JSON.stringify(userPriorities));
    announce('Priorities saved', 'polite');
  };

  const startReflection = () => {
    setShowReflection(true);
    announce('Starting neighborhood reflection', 'polite');
  };

  const saveReflection = () => {
    const updatedAnswers = { ...reflectionAnswers };
    const questions = [
      'What factors are most important to you in choosing a neighborhood?',
      'How do these neighborhoods align with your lifestyle goals?',
      'What compromises are you willing to make?',
      'How important is proximity to work, schools, or amenities?',
      'What questions do you still have about these areas?'
    ];

    questions.forEach((question, index) => {
      const answer = (document.getElementById(`reflection-${index}`) as HTMLTextAreaElement)?.value;
      if (answer) {
        updatedAnswers[`neighborhood-${index}`] = answer;
      }
    });

    setReflectionAnswers(updatedAnswers);
    localStorage.setItem('neighborhood-reflection-answers', JSON.stringify(updatedAnswers));
    setShowReflection(false);
    announce('Reflection saved', 'polite');
  };

  const getCrimeRateColor = (rate: string) => {
    switch (rate) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const selectedNeighborhoodsData = neighborhoods.filter(n => selectedNeighborhoods.includes(n.id));

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Neighborhood Decision Tool
        </h2>
        <p className="text-gray-600 mb-6">
          Compare Las Vegas neighborhoods and find the perfect area for your lifestyle
        </p>
      </div>

      {/* User Priorities */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Priorities</h3>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <input
                type="text"
                value={userPriorities.budget}
                onChange={(e) => setUserPriorities(prev => ({ ...prev, budget: e.target.value }))}
                placeholder="e.g., $400k-$600k"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">School Importance</label>
              <select
                value={userPriorities.schools}
                onChange={(e) => setUserPriorities(prev => ({ ...prev, schools: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">Select importance</option>
                <option value="very-high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Commute Priority</label>
              <select
                value={userPriorities.commute}
                onChange={(e) => setUserPriorities(prev => ({ ...prev, commute: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">Select priority</option>
                <option value="very-short">Very Short</option>
                <option value="short">Short</option>
                <option value="moderate">Moderate</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <input
                type="text"
                value={userPriorities.amenities}
                onChange={(e) => setUserPriorities(prev => ({ ...prev, amenities: e.target.value }))}
                placeholder="e.g., parks, shopping"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Safety Priority</label>
              <select
                value={userPriorities.safety}
                onChange={(e) => setUserPriorities(prev => ({ ...prev, safety: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">Select priority</option>
                <option value="very-high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <button
            onClick={savePriorities}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Save Priorities
          </button>
        </div>
      </div>

      {/* Neighborhood Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Neighborhoods to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {neighborhoods.map((neighborhood) => (
            <div 
              key={neighborhood.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedNeighborhoods.includes(neighborhood.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => toggleNeighborhoodSelection(neighborhood.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{neighborhood.name}</h4>
                <input
                  type="checkbox"
                  checked={selectedNeighborhoods.includes(neighborhood.id)}
                  onChange={() => toggleNeighborhoodSelection(neighborhood.id)}
                  className="text-blue-600"
                />
              </div>
              <p className="text-sm text-gray-600 mb-2">{neighborhood.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-lg font-bold text-blue-600">
                  ${neighborhood.avgHomePrice.toLocaleString()}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCrimeRateColor(neighborhood.crimeRate)}`}>
                  {neighborhood.crimeRate} Crime
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Comparison */}
      {selectedNeighborhoodsData.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Comparison</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {selectedNeighborhoodsData.map((neighborhood) => (
              <div key={neighborhood.id} className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{neighborhood.name}</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Key Stats:</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Avg Price: <span className="font-semibold">${neighborhood.avgHomePrice.toLocaleString()}</span></div>
                    <div>Days on Market: <span className="font-semibold">{neighborhood.avgDaysOnMarket}</span></div>
                    <div>School Rating: <span className="font-semibold">{neighborhood.schoolRating}/10</span></div>
                    <div>Walk Score: <span className="font-semibold">{neighborhood.walkScore}/100</span></div>
                    <div>Crime Rate: <span className={`font-semibold ${getCrimeRateColor(neighborhood.crimeRate).split(' ')[0]}`}>{neighborhood.crimeRate}</span></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Commute Times:</h5>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Downtown: <span className="font-semibold">{neighborhood.commute.downtown} min</span></div>
                    <div>Airport: <span className="font-semibold">{neighborhood.commute.airport} min</span></div>
                    <div>Strip: <span className="font-semibold">{neighborhood.commute.strip} min</span></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-green-700 mb-2">Pros:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {neighborhood.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-red-700 mb-2">Cons:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {neighborhood.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Amenities:</h5>
                  <div className="flex flex-wrap gap-1">
                    {neighborhood.amenities.map((amenity, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Notes:
                  </label>
                  <textarea
                    value={neighborhood.notes}
                    onChange={(e) => updateNeighborhoodNotes(neighborhood.id, e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Add your thoughts about this neighborhood..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reflection Button */}
      {selectedNeighborhoodsData.length > 0 && (
        <div className="text-center">
          <button
            onClick={startReflection}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Reflect on Your Neighborhood Choice
          </button>
        </div>
      )}

      {/* Reflection Modal */}
      {showReflection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Reflect on Your Neighborhood Choice
              </h3>
              <button
                onClick={() => setShowReflection(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {[
                'What factors are most important to you in choosing a neighborhood?',
                'How do these neighborhoods align with your lifestyle goals?',
                'What compromises are you willing to make?',
                'How important is proximity to work, schools, or amenities?',
                'What questions do you still have about these areas?'
              ].map((question, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {question}
                  </label>
                  <textarea
                    id={`reflection-${index}`}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your thoughts..."
                    defaultValue={reflectionAnswers[`neighborhood-${index}`] || ''}
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
