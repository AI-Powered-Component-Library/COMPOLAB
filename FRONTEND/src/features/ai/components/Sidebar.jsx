import React, { useState } from 'react';
import { Globe, FileCode, Folder, ChevronDown, ChevronRight, ArrowBigLeft, ArrowBigDownDash, ArrowRightToLine, MoveLeft, ArrowRightIcon, X, FolderOpen } from 'lucide-react';

const Sidebar = () => {

    const [folder, setFolder] = useState(false)

    const files = [
        { path: "UI-Project/src", },
        { path: "src/App.jsx", code: " <h1>This is a app.jsx page.</h1>" },
        { path: "src/App.css", code: "@import \"tailwindcss\" " },
        { path: "src/pages/Home.jsx", code: "<h1>This is a Home.jsx page.</h1>" }
    ]

    return (
        <aside className='bg-zinc-900 sidebar py-4 select-none'>

            {files.map(file => <div onClick={() => setFolder(!folder)} className='flex items-center gap-2 px-4  cursor-pointer'>
                <ChevronRight className={folder && 'rotate-90'} size={19} />
                <h1 className='flex items-center gap-1.5'> {!folder ? <Folder size={16} /> : <FolderOpen size={16} />} main-project</h1>
            </div>)}

        </aside>
    );
};

export default Sidebar;