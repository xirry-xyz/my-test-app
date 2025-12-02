import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, BarChart2, LogOut, User } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../lib/auth';
import { auth } from '../lib/firebase';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();

    const handleLogout = () => {
        auth.signOut();
    };

    const navItems = [
        { icon: LayoutDashboard, label: '概览', path: '/' },
        { icon: Package, label: '库存', path: '/inventory' },
        { icon: ShoppingCart, label: '购物单', path: '/shopping-list' },
        { icon: BarChart2, label: '统计', path: '/stats' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0">
                <div className="p-6 border-b border-slate-100">
                    <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
                        <Package className="w-8 h-8" />
                        HomeStock
                    </h1>
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        {user?.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full" />
                        ) : (
                            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                                <User className="w-5 h-5" />
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">{user?.displayName || 'User'}</p>
                            <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                                location.pathname === item.path
                                    ? "bg-indigo-50 text-indigo-600 font-medium"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        退出登录
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden bg-white border-b border-slate-200 p-4 sticky top-0 z-10 flex items-center justify-between">
                <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
                    <Package className="w-6 h-6" />
                    HomeStock
                </h1>
                <div className="flex items-center gap-3">
                    {user?.photoURL && (
                        <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                    )}
                    <button onClick={handleLogout} className="p-2 text-slate-600">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2 flex justify-around z-10 safe-area-bottom">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={clsx(
                            "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                            location.pathname === item.path
                                ? "text-indigo-600"
                                : "text-slate-400"
                        )}
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Layout;
