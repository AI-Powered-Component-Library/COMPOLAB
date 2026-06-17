import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import CodePart from './components/CodePart.jsx';
import LeftChat from './components/LeftChat.jsx';
import PromptInput from './components/PromptInput.jsx';
import { useParams } from 'react-router-dom';
import useCompo from '../components/hooks/useCompo.js';


const Generate = () => {

    const { cid } = useParams()
    const { handleGetCompoById } = useCompo()

    useEffect(() => {
        if (cid) {
            handleGetCompoById(cid)
        }
    }, [cid])


    return (
        <div className="h-screen grid-layout w-full bg-black text-white">
            <Sidebar />
            <CodePart />
            <LeftChat />
            <PromptInput />
        </div>
    );
};

export default Generate;