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
        <div className="flex items-center justify-between w-full px-6 py-4 bg-[#0b0c14] border-b border-white/10">

            {/* Left */}
            <div className="flex flex-1 items-center gap-4">

                {Component && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 max-w-xs">
                        <FaReact size={18} className="text-cyan-400 shrink-0" />

                        <h1 className="text-sm font-medium text-cyan-300 truncate">
                            {Component?.componentName}
                        </h1>

                        <button
                            onClick={() => navigate("/c/list")}
                            className="p-1 rounded-full hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition"
                        >
                            <X size={14} />
                        </button>
                    </div>
                )}

                {/* Code / Preview */}
                <div className="inline-flex  items-center gap-0.5 rounded-full border border-neutral-200 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-800 shadow-sm">
                    <button onClick={() => setIsCodePreview(false)} className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${!isCodePreview ? 'bg-purple-700 text-purple-50' : 'text-neutral-500 hover:text-neutral-700'}`}>
                        <Code2Icon size={15} /> Code
                    </button>
                    <button onClick={() => setIsCodePreview(true)} className={`flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${isCodePreview ? 'bg-purple-700 text-purple-50' : 'text-neutral-500 hover:text-neutral-700'}`}>
                        <Eye size={15} /> Preview
                    </button>
                </div>
                <div className="h-10 w-px bg-white/10" />

                {/* Publish */}
                {loggedInUser.role === "admin" && (
                    <div className="flex items-center gap-3 px-8 py-3 rounded-2xl border border-white/15 text-white hover:border-red-500/40 hover:bg-red-500/5 transition cursor-pointer">
                        <UploadCloudIcon size={18} className="text-red-500" />
                        <p className="font-medium">Publish on npm</p>
                    </div>
                )}
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

                <button
                    onClick={() => navigator.clipboard.writeText(code)}
                    className="h-12 w-12 flex items-center justify-center rounded-2xl border border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/5 transition"
                    title="Copy code"
                >
                    <Copy size={18} />
                </button>

                <button
                    onClick={() => handleDownloadCode(code)}
                    className="h-12 w-12 flex items-center justify-center rounded-2xl border border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/5 transition"
                    title="Download code"
                >
                    <Download size={18} />
                </button>

                <button
                    onClick={async () => {
                        if (navigator.share) {
                            try {
                                await navigator.share({
                                    title:
                                        Component?.componentName ||
                                        "Shared Component",
                                    text:
                                        "Check out this React component code generated with CompoLab!",
                                    url: window.location.href,
                                });
                            } catch (err) {
                                console.error("Error sharing:", err);
                            }
                        } else {
                            navigator.clipboard.writeText(window.location.href);
                            alert("Link copied to clipboard!");
                        }
                    }}
                    className="h-12 w-12 flex items-center justify-center rounded-2xl border border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/5 transition"
                    title="Share code"
                >
                    <Share2 size={18} />
                </button>

                <div className="h-10 w-px bg-white/10" />

                {!cid && code && (
                    <div className="flex items-center gap-3 px-8 py-3 rounded-2xl border border-white/15 text-white hover:border-green-500/40 hover:bg-green-500/5 transition cursor-pointer">
                        <Save size={18} />
                        <p className="font-medium">Save</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header