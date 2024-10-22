import axios from 'axios'

const API_URL = 'https://devapi.tailorspace.store/stores/ankara'

// Get user stores
const getStores:any = async (token:string) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

  const response = await axios.get(API_URL)

  return response.data
}



const storeService = {
    getStores
  }
  
  export default storeService