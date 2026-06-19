import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Code2Icon, Copy, Cross, Download, Eye, File, Save, Share2, UploadCloudIcon, X } from 'lucide-react'
import Preview from '../../code/pages/Preview'
import { useSelector } from 'react-redux'
import useCompo from '../../code/hooks/useCompo'
import Header from './Header'
import { Send, Wand2, Sparkles } from 'lucide-react'
import useGenerate from '../hook/useGenerate'

const CodePart = ({ cid }) => {

  const [isCodePreview, setIsCodePreview] = useState(false)
  const code = useSelector(state => state.component.code)

  const { handleSetCode, handleDownloadCode } = useCompo()
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
    <div className=' codepart  flex flex-col border-l border-slate-800'>

      <Header props={{ cid, code, isCodePreview, setIsCodePreview, handleDownloadCode }} />

      <div className='flex-1 overflow-hidden'>
        {isCodePreview ? <Preview code={code} /> : <Editor
          language={"javascript"}
          value={code}
          onChange={handleSetCode}
          theme='hc-black'
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            fontFamily: " monospace",
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 12, bottom: 12 },
            tabSize: 2,
            wordWrap: 'on',
            bracketPairColorization: { enabled: true },
          }} />}
      </div>

      <form onSubmit={handleSubmit} className='w-10/12 mx-auto my-4'>
        <div className='relative flex items-center group w-full'>
          <div className="absolute left-4 flex items-center pointer-events-none">
            <Sparkles size={16} className="text-blue-500/70 group-focus-within:text-cyan-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Ask for creating a React Component...'
            disabled={isLoading}
            className='w-full pl-11 pr-12 py-3 bg-voilet-950 border border-slate-800 hover:border-slate-700/80 focus:border-cyan-500/60 focus:outline-none rounded-xl text-sm text-slate-100 placeholder-slate-500 transition-all duration-300 focus:ring-4 focus:ring-cyan-500/10 shadow-inner'
          />
          <button
            type='submit'
            disabled={!input.trim() || isLoading}
            className='absolute right-2 p-1.5 rounded-lg bg-purple-600 hover:bg-cyan-500 text-white disabled:opacity-40 disabled:bg-transparent disabled:text-slate-500 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md disabled:shadow-none hover:shadow-purple-500/20 flex items-center justify-center'
            title="Send prompt"
          >
            <Send size={14}  />
          </button>
        </div>
      </form>

    </div>
  )
}

export default CodePart