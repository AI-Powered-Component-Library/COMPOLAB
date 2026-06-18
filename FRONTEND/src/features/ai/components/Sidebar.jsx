import { useState } from 'react';
import { Folder, ChevronRight, FolderOpen, TvMinimal } from 'lucide-react';

const Sidebar = ({ props }) => {

    const [folder, setFolder] = useState(false)
    const [selected, setSelected] = useState("my-project")
    const [rename, setRename] = useState("")

    const files = [
        { path: "src/App.jsx", code: " <h1>This is a app.jsx page.</h1>" },
    ]

    return (
        <aside onKeyDown={(e) => {
            if (e.key === "Enter") {
                setRename(false)
            }
        }} onContextMenu={(e) => e.preventDefault()} className='bg-zinc-900 sidebar py-4 select-none '>

            <div className='px-4  text-xl text-purple-500 font-bold mb-4 flex items-center gap-2'>
                <TvMinimal size={20} />
                <h1 className=''>UI-Library</h1>
            </div>

            {files.map(file => <div key={file.path} onContextMenu={(e) => {
                e.preventDefault()
                setSelected(e.target.textContent)
                props.setOptions(!props.options)
            }} onClick={() => { setFolder(!folder) }} className='flex relative items-center gap-1 px-4  cursor-pointer'>
                <ChevronRight className={folder && 'rotate-90'} size={19} />
                <div className='flex items-center gap-1.5'>
                    {!folder ? <Folder size={16} /> : <FolderOpen size={16} />}

                    {rename ? <input autoFocus type='text' onChange={(e) => setSelected(e.target.value)} value={selected} /> : <p>{selected}</p>}

                </div>

                {/* pop options */}
                {props.options && (
                    <div onClick={(e) => e.stopPropagation()} className="absolute top-8 left-1/3 z-50 w-48 bg-gray-800 text-white rounded-lg shadow-xl border border-gray-700 py-2">
                        <button onClick={(e) => {
                            props.setOptions(false)
                            setRename(selected)
                        }} className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors">
                            Rename
                        </button>

                        <button className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors">
                            Copy
                        </button>

                        <div className="border-t border-gray-700 my-1"></div>

                        <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-500 hover:text-white transition-colors">
                            Delete
                        </button>
                    </div>
                )}

            </div>)}


        </aside>
    );
};

export default Sidebar;