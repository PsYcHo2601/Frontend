import { ITEM_MOCK, type Item } from '../mock'
import { AUTH_TOKEN } from './authToken'

interface BackendItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image_url: string;
}

export const fetchItems = async (): Promise<{ items: Item[]; isMock: boolean }> => {
  try {
    const response = await fetch('/api/services/', {
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Authorization': `Basic ${AUTH_TOKEN}`,
      },
    })

    const data: BackendItem[] = await response.json()

    return {
      items: data.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: parseFloat(item.price),
        image: item.image_url,
      })),
      isMock: false
    }
  } catch (error) {
    console.warn('Using mock data due to error:', error)
    return {
      items: ITEM_MOCK.result,
      isMock: true
    }
  }
}
