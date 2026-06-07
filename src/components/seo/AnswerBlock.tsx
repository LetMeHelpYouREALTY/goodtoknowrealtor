/**
 * AEO Answer Block Component
 *
 * Answer Engine Optimization (AEO) 2026 Best Practice:
 * - Place a 40-60 word answer at the top of pages
 * - LLMs can extract and cite this content
 * - 83% of AI citations come from pages with clear answer blocks
 *
 * Usage:
 * <AnswerBlock
 *   question="What is the Las Vegas real estate market like?"
 *   answer="The Las Vegas real estate market in 2026 offers diverse opportunities..."
 * />
 */

interface AnswerBlockProps {
  question?: string;
  answer: string;
  className?: string;
  showAsCallout?: boolean;
}

export function AnswerBlock({
  question,
  answer,
  className = '',
  showAsCallout = true
}: AnswerBlockProps) {
  // Validate word count (40-60 words optimal for AEO)
  const wordCount = answer.split(/\s+/).length;
  const isOptimal = wordCount >= 40 && wordCount <= 60;

  if (!isOptimal && process.env.NODE_ENV === 'development') {
    console.warn(
      `AEO Warning: Answer block has ${wordCount} words. Optimal range is 40-60 words for AI citations.`
    );
  }

  if (showAsCallout) {
    return (
      <div
        className={`bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-6 ${className}`}
        itemScope
        itemType="https://schema.org/Answer"
      >
        {question && (
          <h2 className="text-xl font-semibold text-gray-900 mb-3" itemProp="text">
            {question}
          </h2>
        )}
        <p
          className="text-gray-800 leading-relaxed text-lg"
          itemProp="text"
        >
          {answer}
        </p>
        {process.env.NODE_ENV === 'development' && (
          <span className="text-xs text-gray-500 mt-2 block">
            AEO: {wordCount} words {isOptimal ? '✓' : '⚠️'}
          </span>
        )}
      </div>
    );
  }

  // Plain text version for hero sections
  return (
    <div className={className} itemScope itemType="https://schema.org/Answer">
      {question && (
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {question}
        </h1>
      )}
      <p className="text-xl text-gray-700 leading-relaxed" itemProp="text">
        {answer}
      </p>
    </div>
  );
}
