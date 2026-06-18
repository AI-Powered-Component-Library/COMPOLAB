import { useSelector } from 'react-redux'
import { Code2Icon, Copy, Download, Eye, Save, Share2, UploadCloudIcon, X } from 'lucide-react'
import { FaReact } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Header = ({ props }) => {

    const { code, cid, isCodePreview, setIsCodePreview, handleDownloadCode } = props
    const navigate = useNavigate()
    const loggedInUser = useSelector(state => state.auth.user)
    const Component = useSelector(state => state.component.currentComponent)

    return (
        <div className='flex py-2 items-center bg-slate-950 justify-between w-full px-4 gap-2'>

            <div className='flex flex-1 gap-2 items-center justify-start'>

                {
                    Component && <div className='text-left truncate flex items-center h-full  border border-blue-300 bg-blue-400/50 gap-2 px-3 py-1 rounded-lg cursor-pointer'>
                        <FaReact size={20} color='cyan' />
                        <h1 className='text-sm font-medium text-cyan-400'> {Component?.componentName}  </h1>
                        <span onClick={() => navigate("/c/list")} className='text-sm hover:bg-red-600 p-0.5 rounded-full'><X size={15} /></span>
                    </div>
                }

                {!cid && code && <div className='flex cursor-pointer border  bg-gray-700 hover:bg-orange-800 border-slate-800 px-3 py-1 rounded-md items-center gap-2'>
                    <button>
                        <Save size={18} />

                    </button>
                    <p className='text-sm font-medium'>Save</p>
                </div>}

                {loggedInUser.role === "admin" && <div className='flex cursor-pointer border hover:bg-purple-700 bg-gray-700 border-slate-800  px-3 py-1 rounded-md  px-4 items-center gap-2'>
                    <button>
                        <UploadCloudIcon size={18} />

                    </button>
                    <p className='text-sm font-medium'>Publish On Npm</p>
                </div>}

            </div>

            <div className='flex flex-1 items-center justify-end gap-3'>

                <button
                    onClick={() => navigator.clipboard.writeText(code)}
                    className='p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors'
                    title='Copy code'
                >
                    <Copy size={18} />
                </button>

                <button
                    onClick={() => handleDownloadCode(code)}
                    className='p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors'
                    title='Download code'
                >
                    <Download size={18} />
                </button>

                <button
                    onClick={async () => {

                        if (navigator.share) {
                            try {
                                await navigator.share({
                                    title: Component?.componentName || 'Shared Component',
                                    text: 'Check out this React component code generated with CompoLab!',
                                    url: window.location.href // Or a specific component view page
                                });
                            } catch (err) {
                                console.error('Error sharing:', err);
                            }
                        } else {
                            // Fallback: Copy link to clipboard
                            navigator.clipboard.writeText(window.location.href);
                            alert('Link copied to clipboard!');
                        }
                    }}

                    className='p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors'
                    title='Share code'
                >
                    <Share2 size={18} />
                </button>

                <div className="inline-flex  items-center gap-0.5 rounded-full border border-neutral-200 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800 shadow-sm">
                    <button onClick={() => setIsCodePreview(false)} className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${!isCodePreview ? 'bg-purple-700 text-purple-50' : 'text-neutral-500 hover:text-neutral-700'}`}>
                        <Code2Icon size={15} /> Code
                    </button>
                    <button onClick={() => setIsCodePreview(true)} className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${isCodePreview ? 'bg-purple-700 text-purple-50' : 'text-neutral-500 hover:text-neutral-700'}`}>
                        <Eye size={15} /> Preview
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Header