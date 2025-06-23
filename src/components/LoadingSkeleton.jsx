export function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar Skeleton */}
        <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse"></div>

        {/* Name Skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Contact Info Skeleton */}
        <div className="space-y-2 w-full">
          <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mx-auto"></div>
          <div className="h-4 w-36 bg-gray-200 rounded animate-pulse mx-auto"></div>
        </div>

        {/* Badges Skeleton */}
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
