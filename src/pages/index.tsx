import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">概览</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
                    <h3 className="text-slate-400 text-sm font-medium mb-2">库存总数</h3>
                    <p className="text-3xl font-bold text-slate-100">128</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
                    <h3 className="text-slate-400 text-sm font-medium mb-2">急需补货</h3>
                    <p className="text-3xl font-bold text-red-400">3</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-800">
                    <h3 className="text-slate-400 text-sm font-medium mb-2">本月消耗</h3>
                    <p className="text-3xl font-bold text-indigo-400">45</p>
                </div>
            </div>
        </div>
    );
};

export const Inventory: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-100">库存管理</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
                    添加物品
                </button>
            </div>
            <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-6">
                <p className="text-slate-400">库存列表将在这里显示...</p>
            </div>
        </div>
    );
};

export const ShoppingList: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">购物清单</h2>
            <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-6">
                <p className="text-slate-400">购物清单将在这里显示...</p>
            </div>
        </div>
    );
};

export const Stats: React.FC = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-100">统计分析</h2>
            <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-6">
                <p className="text-slate-400">统计图表将在这里显示...</p>
            </div>
        </div>
    );
};

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (error) {
            console.error("Error signing in with Google", error);
            alert("登录失败，请重试");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl max-w-md w-full text-center space-y-6 border border-slate-800">
                <div className="w-16 h-16 bg-indigo-500/10 text-indigo-500 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/20">
                    {/* Icon placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22v-9" /></svg>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-100">欢迎使用 HomeStock</h1>
                    <p className="text-slate-400 mt-2">您的智能家庭日用管家</p>
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full bg-slate-800 border border-slate-700 text-slate-200 font-medium py-3 px-4 rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-3"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    使用 Google 账号登录
                </button>
            </div>
        </div>
    );
};
