"use client";

import { Zap, LogOut, User } from 'lucide-react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
// import useAuth from '@/hooks/useAuth';

const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    // const { handleLogout } = useAuth();

    return (
        <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-slate-900" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">VirtualUI</span>
            </Link>

            {/* Nav Items */}
            <div className="flex items-center gap-4">
                <Link to="/generate">
                    <button className="text-gray-300 hover:text-white transition px-4 py-2 text-sm font-medium border border-gray-700 rounded-lg hover:border-cyan-400">
                        Studio
                    </button>
                </Link>

                {isAuthenticated ? (
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-lg">
                            <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-slate-950 font-bold text-xs">
                                {user?.fullName ? user.fullName[0].toUpperCase() : <User size={12} />}
                            </div>
                            <span className="text-sm font-medium text-gray-200 hidden sm:inline">
                                {user?.fullName}
                            </span>
                        </div>
                        <button
                            // onClick={handleLogout}
                            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 text-sm"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar;