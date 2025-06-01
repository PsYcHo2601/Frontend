import { AUTH_TOKEN } from './authToken'

export interface RegisterUser {
  email: string
  password: string
  is_superuser?: boolean
  is_staff?: boolean
}

export const login = async (): Promise<boolean> => {
  try {
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${AUTH_TOKEN}`,  
      },
      credentials: 'include',
      mode: 'cors',
    })

    if (!response.ok) {
      console.warn('Login failed')
      return false
    }

    return true
  } catch (error) {
    console.error('Login error:', error)
    return false
  }
}
