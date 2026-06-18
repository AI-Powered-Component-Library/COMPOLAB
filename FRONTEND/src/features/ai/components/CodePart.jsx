import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { Code2Icon, Copy, Cross, Download, Eye, File, Save, Share2, UploadCloudIcon, X } from 'lucide-react'
import Preview from '../../components/pages/Preview'
import { useSelector } from 'react-redux'
import useCompo from '../../components/hooks/useCompo'
import Header from './Header'

const CodePart = ({ cid }) => {

  const [isCodePreview, setIsCodePreview] = useState(false)
  const code = useSelector(state => state.component.code)

  const { handleSetCode, handleDownloadCode } = useCompo()


  return (
    <div className=' codepart  flex flex-col border-l border-slate-800'>

      <Header props={{ cid, code, isCodePreview, setIsCodePreview,handleDownloadCode }} />

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