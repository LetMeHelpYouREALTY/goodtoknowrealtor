'use client';

import { useState, useEffect } from 'react';
import { useScreenReaderAnnouncements } from '@/components/ui/ScreenReaderAnnouncements';

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  lotSize: string;
  features: string[];
  pros: string[];
  cons: string[];
  notes: string;
}

interface PropertyComparisonProps {
  className?: string;
}

export function PropertyComparison({ className = '' }: PropertyComparisonProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<string, string>>({});
  const announce = useScreenReaderAnnouncements();

  // Sample properties for demonstration
  const sampleProperties: Property[] = [
    {
      id: '1',
      address: '123 Summerlin Pkwy, Las Vegas, NV 89134',
      price: 850000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      yearBuilt: 2018,
      lotSize: '0.25 acres',
      features: ['Pool', 'Garage', 'Fireplace', 'Hardwood Floors', 'Updated Kitchen'],
      pros: ['Great location', 'Modern finishes', 'Large lot'],
      cons: ['Higher price', 'HOA fees', 'Busy street'],
      notes: ''
    },
    {
      id: '2',
      address: '456 Henderson Ave, Henderson, NV 89014',
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2400,
      yearBuilt: 2015,
      lotSize: '0.18 acres',
      features: ['Garage', 'Fireplace', 'Granite Counters', 'Backyard'],
      pros: ['Good value', 'Quiet neighborhood', 'Low HOA'],
      cons: ['Smaller lot', 'Older appliances', 'Limited storage'],
      notes: ''
    },
    {
      id: '3',
      address: '789 Downtown Blvd, Las Vegas, NV 89101',
      price: 750000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2800,
      yearBuilt: 2020,
      lotSize: '0.15 acres',
      features: ['Modern Design', 'Smart Home', 'Rooftop Deck', 'City Views'],
      pros: ['New construction', 'Great views', 'Modern amenities'],
      cons: ['Small lot', 'City noise', 'High HOA'],
      notes: ''
    }
  ];

  useEffect(() => {
    // Load saved properties
    const savedProperties = localStorage.getItem('property-comparison');
    if (savedProperties) {
      setProperties(JSON.parse(savedProperties));
    } else {
      setProperties(sampleProperties);
    }
  }, []);

  const togglePropertySelection = (propertyId: string) => {
    setSelectedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
    announce('Property selection updated', 'polite');
  };

  const updatePropertyNotes = (propertyId: string, notes: string) => {
    const updatedProperties = properties.map(prop => 
      prop.id === propertyId ? { ...prop, notes } : prop
    );
    setProperties(updatedProperties);
    localStorage.setItem('property-comparison', JSON.stringify(updatedProperties));
  };

  const startReflection = () => {
    setShowReflection(true);
    announce('Starting property comparison reflection', 'polite');
  };

  const saveReflection = () => {
    const updatedAnswers = { ...reflectionAnswers };
    const questions = [
      'Which property best fits your lifestyle needs?',
      'What factors are most important to you?',
      'What compromises are you willing to make?',
      'How do you feel about the price differences?',
      'What questions do you still have about these properties?'
    ];

    questions.forEach((question, index) => {
      const answer = (document.getElementById(`reflection-${index}`) as HTMLTextAreaElement)?.value;
      if (answer) {
        updatedAnswers[`comparison-${index}`] = answer;
      }
    });

    setReflectionAnswers(updatedAnswers);
    localStorage.setItem('property-reflection-answers', JSON.stringify(updatedAnswers));
    setShowReflection(false);
    announce('Reflection saved', 'polite');
  };

  const selectedProps = properties.filter(prop => selectedProperties.includes(prop.id));

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Property Comparison Tool
        </h2>
        <p className="text-gray-600 mb-6">
          Compare properties side-by-side and make informed decisions about your next home
        </p>
      </div>

      {/* Property Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Properties to Compare</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div 
              key={property.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedProperties.includes(property.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => togglePropertySelection(property.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{property.address}</h4>
                <input
                  type="checkbox"
                  checked={selectedProperties.includes(property.id)}
                  onChange={() => togglePropertySelection(property.id)}
                  className="text-blue-600"
                />
              </div>
              <p className="text-lg font-bold text-blue-600">${property.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">
                {property.bedrooms} bed • {property.bathrooms} bath • {property.sqft.toLocaleString()} sqft
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedProps.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Feature</th>
                  {selectedProps.map((prop) => (
                    <th key={prop.id} className="border border-gray-300 p-3 text-left">
                      <div className="font-semibold">{prop.address}</div>
                      <div className="text-sm text-blue-600">${prop.price.toLocaleString()}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Bedrooms</td>
                  {selectedProps.map((prop) => (
                    <td key={prop.id} className="border border-gray-300 p-3">{prop.bedrooms}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Bathrooms</td>
                  {selectedProps.map((prop) => (
                    <td key={prop.id} className="border border-gray-300 p-3">{prop.bathrooms}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Square Feet</td>
                  {selectedProps.map((prop) => (
                    <td key={prop.id} className="border border-gray-300 p-3">{prop.sqft.toLocaleString()}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Year Built</td>
                  {selectedProps.map((prop) => (
                    <td key={prop.id} className="border border-gray-300 p-3">{prop.yearBuilt}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Lot Size</td>
                  {selectedProps.map((prop) => (
                    <td key={prop.id} className="border border-gray-300 p-3">{prop.lotSize}</td>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Price per Sq Ft</td>
                  {selectedProps.map((prop) => (
                    <td key={prop.id} className="border border-gray-300 p-3">
                      ${Math.round(prop.price / prop.sqft)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Individual Property Details */}
      {selectedProps.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Analysis</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {selectedProps.map((property) => (
              <div key={property.id} className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">{property.address}</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium text-green-700 mb-2">Pros:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {property.pros.map((pro, index) => (
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
                    {property.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-700 mb-2">Features:</h5>
                  <div className="flex flex-wrap gap-1">
                    {property.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Notes:
                  </label>
                  <textarea
                    value={property.notes}
                    onChange={(e) => updatePropertyNotes(property.id, e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Add your thoughts about this property..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reflection Button */}
      {selectedProps.length > 0 && (
        <div className="text-center">
          <button
            onClick={startReflection}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Reflect on Your Comparison
          </button>
        </div>
      )}

      {/* Reflection Modal */}
      {showReflection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Reflect on Your Property Comparison
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
                'Which property best fits your lifestyle needs?',
                'What factors are most important to you?',
                'What compromises are you willing to make?',
                'How do you feel about the price differences?',
                'What questions do you still have about these properties?'
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
                    defaultValue={reflectionAnswers[`comparison-${index}`] || ''}
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
