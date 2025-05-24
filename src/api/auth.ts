export interface RegisterUser {
  email: string
  password: string
  is_superuser?: boolean
  is_staff?: boolean
}

export const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // отправить и получить session_id
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

export const register = async (user: RegisterUser): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:8000/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...user,
        is_superuser: user.is_superuser || false,
        is_staff: user.is_staff || false,
      }),
    })

    if (!response.ok) {
      console.warn('Registration failed')
      return false
    }

    return true
  } catch (error) {
    console.error('Registration error:', error)
    return false
  }
}
