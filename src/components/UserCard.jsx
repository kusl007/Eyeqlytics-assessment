import { Mail, MapPin, Phone } from "lucide-react"


export function UserCard({ user }) {
  const fullName = `${user.name.first} ${user.name.last}`
  const initials = `${user.name.first[0]}${user.name.last[0]}`.toUpperCase()

  return (
    <div className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300 overflow-hidden">
            {user.picture.large ? (
              <img
                src={user.picture.large || "/user.png"}
                alt={fullName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target 
                  target.style.display = "none"
                  const fallback = target.nextElementSibling
                  if (fallback) fallback.style.display = "flex"
                }}
              />
            ) : null}
            <div
              className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg flex items-center justify-center"
              style={{ display: user.picture.large ? "none" : "flex" }}
            >
              {initials}
            </div>
          </div>
        </div>

        {/* Name */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900 capitalize">{fullName}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-1 capitalize">
            {user.name.title}
          </span>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 w-full">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="capitalize">{user.location.country}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <span>{user.phone}</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
            {user.location.city}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
            Age: {user.dob.age}
          </span>
        </div>
      </div>
    </div>
  )
}
