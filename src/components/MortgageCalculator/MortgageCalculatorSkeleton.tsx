export function MortgageCalculatorSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-8 bg-gray-200 rounded w-64"></div>
        <div className="h-10 bg-gray-200 rounded w-32"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section Skeleton */}
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          ))}

          <div className="border-t pt-4">
            <div className="h-5 bg-gray-200 rounded w-48 mb-3"></div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="mb-3">
                <div className="h-4 bg-gray-200 rounded w-40 mb-1"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section Skeleton */}
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="h-6 bg-blue-200 rounded w-56 mb-4"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="h-4 bg-blue-100 rounded w-32"></div>
                  <div className="h-4 bg-blue-100 rounded w-24"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-12 bg-gray-200 rounded w-full"></div>
            <div className="h-12 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <div className="h-16 bg-yellow-100 rounded"></div>
      </div>
    </div>
  );
}
