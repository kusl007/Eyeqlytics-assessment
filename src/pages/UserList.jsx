

import { useState, useEffect } from "react"
import { fetchUsers } from "../services/api.js"
import { UserCard } from "../components/UserCard"
import { LoadingSkeleton } from "../components/LoadingSkeleton"
import { SearchBar } from "../components/SearchBar"
import { RefreshCw, Users, AlertCircle } from "lucide-react"

export default function UserList() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const loadUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchUsers(10)
      setUsers(data.results)
      setFilteredUsers(data.results)
    } catch (err) {
      setError("Failed to fetch users. Please try again.")
      console.error("Error loading users:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  useEffect(() => {
    if (!searchTerm) {
      setFilteredUsers(users)
    } else {
      const filtered = users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
        const country = user.location.country.toLowerCase()
        const email = user.email.toLowerCase()
        const searchLower = searchTerm.toLowerCase()

        return fullName.includes(searchLower) || country.includes(searchLower) || email.includes(searchLower)
      })
      setFilteredUsers(filtered)
    }
  }, [searchTerm, users])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">EyeQlytics User Directory</h1>
                <p className="text-gray-600 mt-1">Discover and connect with users from around the world</p>
              </div>
            </div>
            <button
              onClick={loadUsers}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search by name, country, or email..." />
        </div>

        {/* Results Count */}
        {!loading && !error && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {searchTerm ? (
                <>
                  Showing {filteredUsers.length} of {users.length} users
                </>
              ) : (
                <>Showing {users.length} users</>
              )}
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-8">
            <div className="max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 font-medium">Error</p>
              </div>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Users Grid */}
        {!loading && !error && (
          <>
            {filteredUsers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredUsers.map((user) => (
                  <UserCard key={user.login.uuid} user={user} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
                <p className="text-gray-600">
                  {searchTerm ? "Try adjusting your search terms." : "No users to display."}
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p>© 2024 EyeQlytics User Directory. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
