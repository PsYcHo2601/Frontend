import { ITEM_MOCK, type Item } from '../mock'

interface BackendItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image_url: string;
}

export const fetchItems = async (): Promise<{ items: Item[]; isMock: boolean }> => {
  try {
    const response = await fetch('http://localhost:8000/services/', {
      credentials: 'include',
    })

    if (!response.ok) throw new Error('Backend error')

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
