import api from '@common/api.js'
import http from './http'

const unwrap = (response, fallbackMessage) => {
  if (response?.code === 200) {
    return response.data
  }
  const message = response?.msg || fallbackMessage || 'Unexpected response from server'
  throw new Error(message)
}

const authApi = {
  async login(payload) {
    const response = await http.post(api.emaillogin, payload)
    return unwrap(response, 'Unable to sign in')
  },
  async register(payload) {
    const response = await http.post(api.emailRegister, payload)
    return unwrap(response, 'Unable to create account')
  },
  async resetPassword(payload) {
    const response = await http.post(api.resetPassword, payload)
    return unwrap(response, 'Unable to reset password')
  },
  async sendResetCode(payload) {
    const response = await http.post(api.sendCode, payload)
    return unwrap(response, 'Unable to send verification code')
  },
  async sendRegisterCode(payload) {
    const response = await http.post(api.sendRegisterCode, payload)
    return unwrap(response, 'Unable to send verification code')
  },
  async logout() {
    return http.post(api.logout)
  }
}

const memberApi = {
  async profile() {
    const response = await http.get(api.profix)
    return unwrap(response, 'Unable to load member profile')
  },
  async pointsLog(params) {
    const response = await http.get(api.jfmx, { params })
    return unwrap(response, 'Unable to load points history')
  },
  async tiers() {
    const response = await http.get(api.hydj)
    return unwrap(response, 'Unable to load membership tiers')
  },
  async redeem(payload) {
    const response = await http.post(api.pMallOut, payload)
    return unwrap(response, 'Unable to complete redemption')
  }
}

const rewardsApi = {
  async catalog(params) {
    const response = await http.get(api.jfsplb, { params })
    return unwrap(response, 'Unable to load rewards')
  },
  async categories() {
    const response = await http.get(api.jfscfl)
    return unwrap(response, 'Unable to load categories')
  }
}

const storeApi = {
  async list(params) {
    const response = await http.get(api.dplb, { params })
    return unwrap(response, 'Unable to load stores')
  },
  async detail(storeId, params) {
    if (!storeId) throw new Error('Store ID is required')
    const response = await http.get(`${api.dplb}/${storeId}`, { params })
    return unwrap(response, 'Unable to load store details')
  },
  async featured(params) {
    const response = await http.get(api.mrmd, { params })
    return unwrap(response, 'Unable to load featured store')
  }
}

const goodsApi = {
  async categories(params) {
    const response = await http.get(api.gCategory, { params })
    return unwrap(response, 'Unable to load menu categories')
  },
  async list(params) {
    const response = await http.get(api.goods, { params })
    return unwrap(response, 'Unable to load menu items')
  }
}

export { authApi, memberApi, rewardsApi, storeApi, goodsApi, unwrap }
