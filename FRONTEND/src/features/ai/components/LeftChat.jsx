import React, { useState } from 'react'
import { MessageCircle, Trash2, Plus } from 'lucide-react'

const LeftChat = () => {
  const [chatHistory, setChatHistory] = useState([
    { id: 1, title: 'Create a Button Component', date: 'Today' },
    { id: 2, title: 'Build a Form with Validation', date: 'Yesterday' },
    { id: 3, title: 'Design a Navigation Bar', date: '2 days ago' },
  ])

  const handleDeleteChat = (id) => {
    setChatHistory(chatHistory.filter(chat => chat.id !== id))
  }

  const handleNewChat = () => {
    // Clear or reset chat
    console.log('New chat started')
  }

  return (
    <div className='w-full leftchat bg-slate-950 border-r border-slate-800 flex flex-col'>
      {/* Header */}
      <div className='p-4 border-b border-slate-800'>
        <button
          onClick={handleNewChat}
          className='w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors duration-200 font-medium'
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className='flex-1 overflow-y-auto px-3 py-4'>
        <div className='mb-4'>
          <h3 className='text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-3'>
            Chat History
          </h3>
          <div className='space-y-2'>
            {chatHistory.map((chat) => (
              <div
                key={chat.id}
                className='group flex items-start gap-2 p-2.5 rounded-lg hover:bg-slate-800 transition-colors duration-150 cursor-pointer'
              >
                <MessageCircle size={16} className='text-slate-400 mt-1 flex-shrink-0' />
                <div className='flex-1 min-w-0'>
                  <p className='text-sm text-slate-200 truncate group-hover:text-white transition-colors'>
                    {chat.title}
                  </p>
                  <p className='text-xs text-slate-500 mt-0.5'>{chat.date}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteChat(chat.id)
                  }}
                  className='opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-red-400'
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='p-4 border-t border-slate-800 space-y-2'>
        <button className='w-full text-left text-xs text-slate-400 hover:text-slate-300 transition-colors py-2 px-2'>
          Clear History
        </button>
        <button className='w-full text-left text-xs text-slate-400 hover:text-slate-300 transition-colors py-2 px-2'>
          Settings
        </button>
      </div>
    </div>
  )
}

export default LeftChat