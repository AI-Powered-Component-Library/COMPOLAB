import { useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import CodePart from './components/CodePart.jsx';
import LeftChat from './components/LeftChat.jsx';
import PromptInput from './components/PromptInput.jsx';
import { useParams } from 'react-router-dom';
import useCompo from '../components/hooks/useCompo.js';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import useGenerate from './hook/useGenerate.js';
import { useState } from 'react';


const Generate = () => {

    const { cid } = useParams()
    const { handleGetCompoById } = useCompo()
    const webBuilder = useSelector(state => state.component.webBuilder)
    const [searchParams, setSearchParams] = useSearchParams()
    const { handleWebBuilder } = useGenerate()
    const [options, setOptions] = useState(false)

    useEffect(() => {
        if (cid) {
            handleGetCompoById(cid)
        }
        const web = searchParams.get("web")
        if (web) {
            handleWebBuilder()
        }

        document.addEventListener("click", () => {
            setOptions(false)
        })

        return () => {
            document.removeEventListener("click")
        }
    }, [cid])


    return (
        <div style={{ gridTemplateColumns: webBuilder ? "250px 1fr 300px" : "4px 1fr 300px", gridTemplateRows: "1fr 100px" }} className="h-screen grid-layout overflow-hidden w-full grid bg-black text-white">
            {webBuilder && <Sidebar props={{options,setOptions}} />}
            <CodePart />
            <LeftChat />
            <PromptInput setParams={setSearchParams} webBuilder={webBuilder} />
        </div>
    );
};

export default Generate;