import { useDispatch } from "react-redux";
import componentService from "../service/component.service";
import { setCode, setComponents, setCurrentComponent } from "../component.slice";

const useCompo = () => {

    const dispatch = useDispatch()

    const handleCreateComponent = async (payload) => {
        const res = await componentService.createService(payload)
        console.log(res)
    }


    const handleGetComponents = async () => {
        const res = await componentService.getAllService()
        dispatch(setComponents(res))
    }


    const handleGetCompoById = async (id) => {
        const res = await componentService.getByIdService(id)

        dispatch(setCode(res.code))
        dispatch(setCurrentComponent(res))
    }


    const handleUpdateComponent = async (id, payload) => {

        const res = await componentService.updateService(id, payload)
        console.log(res)
    }


    const handleDeleteComponent = async (id) => {

        const res = await componentService.deleteService(id)
        console.log(res)
    }


    return { handleGetComponents, handleCreateComponent, handleGetCompoById, handleUpdateComponent, handleDeleteComponent };
};

export default useCompo;