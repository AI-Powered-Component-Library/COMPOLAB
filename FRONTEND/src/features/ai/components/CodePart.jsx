import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Copy, Download, Share2 } from 'lucide-react'

const CodePart = () => {
  
  const [code, setCode] = useState(`// Welcome to CompoLab Code Editor
// Start typing or paste your code here

import React from 'react'

const Component = () => {
  return (
    <div className='p-4'>
      <h1>Hello World</h1>
    </div>
  )
}

export default Component
`)

  const [language, setLanguage] = useState('javascript')

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code)
    console.log('Code copied to clipboard')
  }

  const handleDownloadCode = () => {
    const element = document.createElement('a')
    const file = new Blob([code], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `component.${language === 'javascript' ? 'jsx' : language}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className='w-full codepart  flex flex-col border-l border-slate-800'>
      {/* Toolbar */}
      <div className='flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900'>
        <div className='flex items-center gap-2'>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='px-3 py-1.5 bg-slate-800 border border-slate-700 hover:border-slate-600 focus:border-blue-500 focus:outline-none rounded text-xs text-slate-300 transition-colors'
          >
            <option value='javascript'>JavaScript</option>
            <option value='typescript'>TypeScript</option>
            <option value='jsx'>JSX</option>
            <option value='css'>CSS</option>
            <option value='html'>HTML</option>
          </select>
        </div>

        <div className='flex items-center gap-2'>
          <button
            onClick={handleCopyCode}
            className='p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors'
            title='Copy code'
          >
            <Copy size={18} />
          </button>
          <button
            onClick={handleDownloadCode}
            className='p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors'
            title='Download code'
          >
            <Download size={18} />
          </button>
          <button
            className='p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors'
            title='Share code'
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className='flex-1 overflow-hidden'>
        <Editor
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme='vs-dark'
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            fontFamily: "'Fira Code', 'Courier New', monospace",
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 12, bottom: 12 },
            tabSize: 2,
            wordWrap: 'on',
            bracketPairColorization: { enabled: true },
          }}
        />
      </div>
    </div>
  )
}

export default CodePart