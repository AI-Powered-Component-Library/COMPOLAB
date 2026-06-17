import { api } from "../../../utils/axios.utils"

const componentService = {

  createService: async (payload) => {
    const { data } = await api.post("/components", payload)
    return data.data
  },

  getAllService: async () => {
    const { data } = await api.get("/components")
    return data.data // returns array
  },


  getByIdService: async (id) => {
    const { data } = await api.get(`${"/components"}/${id}`)
    return data.data
  },

  updateService: async (id, payload) => {
    const { data } = await api.put(`${"/components"}/${id}`, payload)
    return data.data
  },


  deleteService: async (id) => {
    const { data } = await api.delete(`${"/components"}/${id}`)
    return data
  },
}

export default componentService
