import { useState, useRef, useEffect } from 'react'
import { Trash2, Plus, Search, Settings, Clock, Cpu } from 'lucide-react'
import { Link } from "react-router-dom"
import { Sparkles } from 'lucide-react'

const INITIAL_CHATS = [
  { id: 1, title: 'Create a Button Component', date: 'Today', tag: 'JSX' },
  { id: 2, title: 'Build a Form with Validation', date: 'Yesterday', tag: 'Form' },
  { id: 3, title: 'Design a Navigation Bar', date: '2 days ago', tag: 'Nav' },
  { id: 4, title: 'Modal Dialog Component', date: '3 days ago', tag: 'UI' },
]

const TAG_COLORS = {
  JSX: 'bg-sky-950 text-sky-400',
  Form: 'bg-violet-950 text-violet-400',
  Nav: 'bg-teal-950 text-teal-400',
  UI: 'bg-amber-950 text-amber-400',
}

const grouped = (chats) =>
  chats.reduce((acc, chat) => {
    acc[chat.date] = acc[chat.date] ? [...acc[chat.date], chat] : [chat]
    return acc
  }, {})

const LeftChat = ({ onNewChat, tokenCount = '999k', props }) => {

  const { loggedInUser } = props

  const [chats, setChats] = useState(INITIAL_CHATS)
  const [active, setActive] = useState(1)
  const [search, setSearch] = useState('')
  const [confirmClear, setConfirmClear] = useState(false)
  const confirmTimer = useRef(null)

  useEffect(() => () => clearTimeout(confirmTimer.current), [])

  const filtered = chats.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  )

  const groups = grouped(filtered)

  const deleteChat = (e, id) => {
    e.stopPropagation()
    setChats(prev => prev.filter(c => c.id !== id))
    if (active === id) setActive(null)
  }

  const handleClearHistory = () => {
    if (confirmClear) {
      setChats([])
      setActive(null)
      setConfirmClear(false)
    } else {
      setConfirmClear(true)
      confirmTimer.current = setTimeout(() => setConfirmClear(false), 3000)
    }
  }

  const handleNewChat = () => {
    const id = Date.now()
    const newChat = { id, title: 'New chat', date: 'Today', tag: 'UI' }
    setChats(prev => [newChat, ...prev])
    setActive(id)
    onNewChat?.()
  }

  return (
    <div className=" bg-[#0f0f14] border-r border-[#1e1e2a] flex flex-col select-none">

      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-[#1e1e2a] space-y-3">

        <div id="right" className='flex items-center justify-end flex-1 min-w-[180px]'>
          <Link to="/pricing" className='relative text-sm inline-flex items-center gap-2.5 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-indigo-500/20 border border-purple-500/25 hover:border-purple-500/40 rounded-full text-purple-200  font-semibold no-underline cursor-pointer transition-all duration-300 shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 active:translate-y-0 group'>
            <Sparkles size={16} className="text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>Token: {loggedInUser.aiCredits}</span>
          </Link>
        </div>

        <button
          onClick={handleNewChat}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-700/50 cursor-pointer hover:bg-violet-600 active:scale-[0.98] text-white rounded-xl text-sm font-medium transition-all duration-150"
        >
          <Plus size={15} />
          New Chat
        </button>

        {/* Search */}
        {/* <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3d3d55] pointer-events-none" />
          <input
            type="text"
            placeholder="Search chats…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#18181f] border border-[#252530] rounded-lg pl-8 pr-3 py-2  text-[#9090b8] placeholder-[#3d3d55] outline-none focus:border-violet-700 transition-colors"
          />
        </div> */}
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {Object.keys(groups).length === 0 && (
          <p className=" text-[#3d3d55] text-center mt-8">No chats found</p>
        )}

        {Object.entries(groups).map(([date, items]) => (
          <div key={date}>
            <div className="flex items-center gap-2 px-2 mb-2">
              <Clock size={10} className="text-[#3d3d55]" />
              <span className="text-[10px] uppercase tracking-widest text-[#3d3d55]">{date}</span>
            </div>

            <div className="space-y-0.5">
              {items.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => setActive(chat.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150
                    ${active === chat.id
                      ? 'bg-[#1e1535] text-violet-300'
                      : 'text-[#7070a0] hover:bg-[#18181f] hover:text-[#a0a0c0]'
                    }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors
                    ${active === chat.id ? 'bg-violet-500' : 'bg-[#2d2d45]'}`}
                  />

                  <div className="flex-1 min-w-0">
                    <p className=" truncate font-medium">{chat.title}</p>
                    {chat.tag && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded mt-1 inline-block font-medium ${TAG_COLORS[chat.tag] ?? 'bg-zinc-800 text-zinc-400'}`}>
                        {chat.tag}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={e => deleteChat(e, chat.id)}
                    className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-red-950 text-[#3d3d55] hover:text-red-400 transition-all flex-shrink-0"
                    aria-label="Delete chat"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default LeftChat