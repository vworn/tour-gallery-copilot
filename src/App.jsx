// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error
import React, { useState, useEffect } from 'react'
import Gallery from './components/Gallery'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTours = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setTours(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => setTours(prev => prev.filter(t => t.id !== id))

  if (loading) return <h2>Loading...</h2>
  if (error)   return <h2>Error: {error}</h2>
  if (tours.length === 0)
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    )

  return (
    <main>
      <Gallery tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App

//Setup data fetching, state management, and conditional rendering in App