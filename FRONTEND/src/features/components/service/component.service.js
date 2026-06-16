import { api } from "../../../utils/axios.utils"

const componentService = {

  getAll: async () => {
    const { data } = await api.get("/components")
    return data.data // returns array
  },


  getById: async (id) => {
    const { data } = await api.get(`${"/components"}/${id}`)
    return data.data
  },


  create: async (payload) => {
    const { data } = await api.post("/components", payload)
    return data.data
  },


  update: async (id, payload) => {
    const { data } = await api.put(`${"/components"}/${id}`, payload)
    return data.data
  },


  remove: async (id) => {
    const { data } = await api.delete(`${"/components"}/${id}`)
    return data
  },
}

export default componentService
