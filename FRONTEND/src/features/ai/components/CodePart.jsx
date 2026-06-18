import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Copy, Download, Save, Share2, UploadCloudIcon } from 'lucide-react'
import Preview from '../../components/pages/Preview'
import { useSelector } from 'react-redux'
import useCompo from '../../components/hooks/useCompo'

const CodePart = () => {

  const [isCodePreview, setIsCodePreview] = useState(false)
  const code = useSelector(state => state.component.code)
  const Component = useSelector(state => state.component.currentComponent)
  const { handleSetCode, handleDownloadCode } = useCompo()


  return (
    <div className=' codepart  flex flex-col border-l border-slate-800'>

      <div className='flex py-2 items-center bg-slate-950 justify-between w-full px-4 gap-2'>

        <div className='flex flex-1 gap-4 items-center justify-start'>

          <div className='flex items-center gap-3'>

            <span className='text-xs text-slate-400'>Code / Preview</span>

            <button onClick={() => setIsCodePreview(!isCodePreview)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${isCodePreview ? 'bg-blue-600' : 'bg-slate-600'} hover:shadow-lg hover:shadow-blue-500/30`}>
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${isCodePreview ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>

          </div>

          <div className='flex items-center gap-2'>
            <button>
              <Save size={18} />

            </button>
            <p className='text-sm font-medium'>Save</p>
          </div>

          <div className='flex items-center gap-2'>
            <button>
              <UploadCloudIcon size={18} />

            </button>
            <p className='text-sm font-medium'>Publish</p>
          </div>

          {
            Component &&
            <h1 className='text-left '>{Component?.componentName}</h1>
          }
        </div>

        <div className='flex flex-1 items-center justify-center gap-3'>

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
        </div>

      </div>


      <div className='flex-1 overflow-hidden'>
        {isCodePreview ? <Preview code={code} /> : <Editor
          language={"javascript"}
          value={code}
          onChange={handleSetCode}
          theme='vs-dark'
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



    </div>
  )
}

export default CodePart