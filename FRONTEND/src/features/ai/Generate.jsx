import React, { useState, useRef, useEffect } from 'react';
import { Copy } from 'lucide-react';
import Sidebar from './components/Sidebar.jsx';
import CodePart from './components/CodePart.jsx';
import LeftChat from './components/LeftChat.jsx';
import PromptInput from './components/PromptInput.jsx';
import Header from './components/Header.jsx';


const Generate = () => {


    return (
        <div className="h-screen grid-layout w-full bg-black text-white">
            <Header />
            <Sidebar />
            <CodePart />
            <LeftChat />
            <PromptInput />
        </div>
    );
};

export default Generate;