import { api } from "../../../utils/axios.utils"

const componentService = {

  createService: async (payload) => {
    const { data } = await api.post("/component", payload)
    return data.data
  },

  getAllService: async () => {
    const { data } = await api.get("/component")
    return data.data // returns array
  },


  getByIdService: async (id) => {
    const { data } = await api.get(`${"/component"}/${id}`)
    return data.data
  },

  updateService: async (id, payload) => {
    const { data } = await api.put(`${"/component"}/${id}`, payload)
    return data.data
  },


  deleteService: async (id) => {
    const { data } = await api.delete(`${"/component"}/${id}`)
    return data
  },
}

export default componentService
