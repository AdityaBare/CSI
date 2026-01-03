import { useState, useEffect } from 'react'

// Placeholder hook for future auth integration
export default function useAuth(){
  const [user, setUser] = useState(null)
  useEffect(() => {
    // no-op for now
  }, [])
  return { user, setUser }
}
