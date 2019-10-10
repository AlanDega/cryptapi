import API from '@/services/API'
export default {
  getPrecios () {
    return API().get('preciosBitso')
  }
}