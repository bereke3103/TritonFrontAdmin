import axios from 'axios';

export default class ChoisingService {
  static async getChoising() {
    const response = await axios.get('https://localhost:7183/getChoising', {});
    return response;
  }
}
