
export async function fetchUsers(count = 10) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching users:", error)
    throw error
  }
}
