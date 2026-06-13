import React, { useState } from 'react'

const Header = () => {
    const [isWebBuilder, setIsWebBuilder] = useState(false)
    const [isCodePreview, setIsCodePreview] = useState(true)

    return (
        <div className='header flex justify-between items-center px-4 py-3 border-b border-zinc-800'>
            <div id="left" className='text-sm flex-1'>UI-Library</div>
            <div id="center" className='flex gap-8 flex-3 justify-between items-center'>
                {/* Web Builder Toggle */}
                <div className='flex items-center gap-3'>
                    <span className='text-xs text-slate-400'>Web Builder</span>
                    <button
                        onClick={() => setIsWebBuilder(!isWebBuilder)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${isWebBuilder ? 'bg-blue-600' : 'bg-slate-600'
                            } hover:shadow-lg hover:shadow-blue-500/30`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isWebBuilder ? 'translate-x-5' : 'translate-x-0.5'
                                }`}
                        />
                    </button>
                </div>

                {/* Code / Preview Toggle */}
                <div className='flex items-center gap-3'>
                    <span className='text-xs text-slate-400'>Code / Preview</span>
                    <button
                        onClick={() => setIsCodePreview(!isCodePreview)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${isCodePreview ? 'bg-blue-600' : 'bg-slate-600'
                            } hover:shadow-lg hover:shadow-blue-500/30`}
                    >
                        <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isCodePreview ? 'translate-x-5' : 'translate-x-0.5'
                                }`}
                        />
                    </button>
                </div>
            </div>
            <div id="right" className='flex-1 text-center'>
                Token 999k+
            </div>
        </div>
    )
}

export default Header