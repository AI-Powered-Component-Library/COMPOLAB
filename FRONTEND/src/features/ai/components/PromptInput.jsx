import React, { useState } from 'react'
import { Send } from 'lucide-react'

const PromptInput = () => {
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            setIsLoading(true)
            // Send prompt to backend
            console.log('Prompt sent:', input)
            setTimeout(() => {
                setInput('')
                setIsLoading(false)
            }, 500)
        }
    }

    return (
        <div className='promptinput bg-slate-950 border-t border-slate-800 px-4 py-4 flex items-center justify-center overflow-hidden'>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className='relative flex items-center'>
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Ask for creating a React Component...' 
                        disabled={isLoading}
                        className='w-full px-4 py-3 pr-12 bg-slate-800 border border-slate-700 hover:border-slate-600 focus:border-blue-500 focus:outline-none rounded-lg text-white placeholder-slate-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                    />
                    <button
                        type='submit'
                        disabled={!input.trim() || isLoading}
                        className='absolute right-3 p-2 text-slate-400 hover:text-blue-400 disabled:opacity-50 disabled:hover:text-slate-400 transition-colors duration-200 disabled:cursor-not-allowed'
                    >
                        <Send size={20} />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PromptInput