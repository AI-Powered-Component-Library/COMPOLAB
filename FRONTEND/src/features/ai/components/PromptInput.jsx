import { useState } from 'react'
import { Send, Wand2, Sparkles } from 'lucide-react'
import { Link } from "react-router-dom"
import useGenerate from '../hook/useGenerate'
import { useSelector } from 'react-redux'

const PromptInput = () => {

    const [isWebBuilder, setIsWebBuilder] = useState(false)

    const { handleGenerate } = useGenerate()
    const token = useSelector(state => state.auth.accessToken)

    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (input.trim()) {
            setIsLoading(true)
            await handleGenerate({ prompt: input, token })
            setInput('')
            setIsLoading(false)
        }
    }

    return (
        <div className='promptinput bg-slate-950 border-t border-slate-900 px-6 py-4 flex items-center justify-between gap-6 w-full h-full relative overflow-hidden backdrop-blur-md bg-opacity-95'>
            {/* Ambient Background Light Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

            {/* Left Section - Web Builder Toggle */}
            <div className='flex items-center justify-start flex-1 min-w-[180px]'>
                <div className='flex items-center gap-3 bg-slate-900/60 border border-slate-800/80 px-3.5 py-1.5 rounded-full hover:border-slate-800 transition-all duration-300 shadow-sm'>
                    <Wand2 size={14} className={`transition-colors duration-300 ${isWebBuilder ? 'text-blue-400' : 'text-slate-400'}`} />
                    <span className='text-xs font-medium text-slate-300 select-none'>Web Builder</span>
                    <button
                        onClick={() => setIsWebBuilder(!isWebBuilder)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-all duration-300 cursor-pointer ${isWebBuilder ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20' : 'bg-slate-700/80 hover:bg-slate-700'}`}
                        aria-label="Toggle Web Builder"
                    >
                        <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${isWebBuilder ? 'translate-x-4' : 'translate-x-0.5'}`} />
                    </button>
                </div>
            </div>

            {/* Center Section - Input Field */}
            <div className='flex items-center justify-center flex-2 max-w-2xl w-full'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='relative flex items-center group w-full'>
                        <div className="absolute left-4 flex items-center pointer-events-none">
                            <Sparkles size={16} className="text-blue-500/70 group-focus-within:text-blue-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Ask for creating a React Component...'
                            disabled={isLoading}
                            className='w-full pl-11 pr-12 py-3 bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 focus:border-blue-500/60 focus:outline-none rounded-xl text-sm text-slate-100 placeholder-slate-500 transition-all duration-300 focus:ring-4 focus:ring-blue-500/10 shadow-inner'
                        />
                        <button
                            type='submit'
                            disabled={!input.trim() || isLoading}
                            className='absolute right-2 p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:bg-transparent disabled:text-slate-500 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md disabled:shadow-none hover:shadow-blue-500/20 flex items-center justify-center'
                            title="Send prompt"
                        >
                            <Send size={14} className={input.trim() && !isLoading ? 'animate-pulse' : ''} />
                        </button>
                    </div>
                </form>
            </div>

            {/* Right Section - Premium Token Display */}
            <div id="right" className='flex items-center justify-end flex-1 min-w-[180px]'>
                <Link
                    to="/pricing"
                    className='relative inline-flex items-center gap-2.5 px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 border border-purple-500/25 hover:border-purple-500/40 rounded-full text-purple-200 text-xs font-semibold no-underline cursor-pointer transition-all duration-300 shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 active:translate-y-0 group'
                >
                    <Sparkles size={13} className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Token:</span>
                    <span className="bg-gradient-to-r from-purple-200 to-indigo-100 bg-clip-text text-transparent font-bold">
                        999k+
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PromptInput