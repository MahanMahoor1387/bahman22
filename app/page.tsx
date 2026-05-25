"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  Code2, Terminal, Brain, Palette, Search, ShoppingCart, User, Star,
  Clock, Users, Play, Sparkles, Zap, Award, BookOpen, TrendingUp,
  CheckCircle2, Phone, Instagram, Send, X, Menu, Plus, Minus,
  GraduationCap, BarChart3, Bell, LogOut, Home, Layers, Trophy,
  Calendar, FileText, MessageCircle, Heart, ChevronLeft, Rocket,
  Cpu, Globe, Shield, Flame, Target, Lightbulb
} from 'lucide-react';

export default function Page(){
  const [view, setView] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [favs, setFavs] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ s: 0, c: 0, i: 0, h: 0 });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const targets = { s: 12500, c: 48, i: 24, h: 320 };
    const duration = 2000;
    const steps = 60;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const p = Math.min(step / steps, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setStats({
        s: Math.floor(targets.s * ease),
        c: Math.floor(targets.c * ease),
        i: Math.floor(targets.i * ease),
        h: Math.floor(targets.h * ease),
      });
      if (p === 1) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [view]);

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const categories = [
    { id: 'coding', name: 'کدنویسی', icon: Code2, color: 'from-purple-500 to-pink-500', desc: 'مبانی برنامه‌نویسی و الگوریتم' },
    { id: 'programming', name: 'برنامه‌نویسی', icon: Terminal, color: 'from-cyan-400 to-blue-500', desc: 'فریم‌ورک‌های مدرن و دولوپمنت' },
    { id: 'ai', name: 'هوش مصنوعی', icon: Brain, color: 'from-fuchsia-500 to-purple-600', desc: 'یادگیری ماشین و دیپ‌لرنینگ' },
    { id: 'design', name: 'طراحی سایت', icon: Palette, color: 'from-emerald-400 to-cyan-500', desc: 'UI/UX و طراحی مدرن' },
  ];

  const courses = [
    { id: 1, title: 'React.js پیشرفته', cat: 'programming', level: 'advanced', price: 2890000, oldPrice: 4500000, rating: 4.9, students: 2340, hours: 38, lessons: 124, instructor: 'علی محمدی', tag: 'پرفروش', color: 'from-cyan-400 to-blue-500', desc: 'تسلط کامل بر React 19، Hooks پیشرفته، Server Components و معماری اپلیکیشن‌های مقیاس‌پذیر' },
    { id: 2, title: 'Python از صفر تا متخصص', cat: 'coding', level: 'beginner', price: 1990000, oldPrice: 3200000, rating: 4.8, students: 4521, hours: 52, lessons: 186, instructor: 'نازنین احمدی', tag: 'محبوب', color: 'from-purple-500 to-pink-500', desc: 'یادگیری پایتون از مفاهیم پایه تا پروژه‌های واقعی، شامل OOP، Data Structures و الگوریتم' },
    { id: 3, title: 'هوش مصنوعی با TensorFlow', cat: 'ai', level: 'advanced', price: 3490000, oldPrice: 5200000, rating: 5.0, students: 1820, hours: 45, lessons: 98, instructor: 'دکتر رضا کریمی', tag: 'جدید', color: 'from-fuchsia-500 to-purple-600', desc: 'ساخت مدل‌های یادگیری عمیق با TensorFlow و Keras، از CNN تا Transformer' },
    { id: 4, title: 'طراحی UI/UX حرفه‌ای', cat: 'design', level: 'intermediate', price: 1690000, oldPrice: 2800000, rating: 4.9, students: 3210, hours: 28, lessons: 86, instructor: 'سارا حسینی', tag: 'محبوب', color: 'from-emerald-400 to-cyan-500', desc: 'اصول طراحی رابط کاربری مدرن با Figma، ساخت دیزاین سیستم و پروتوتایپ‌های تعاملی' },
    { id: 5, title: 'Next.js 15 و TypeScript', cat: 'programming', level: 'advanced', price: 2690000, oldPrice: 3900000, rating: 4.9, students: 1980, hours: 32, lessons: 102, instructor: 'علی محمدی', tag: 'جدید', color: 'from-cyan-400 to-blue-500', desc: 'ساخت اپلیکیشن‌های فول‌استک با Next.js، App Router، Server Actions و دیپلوی روی Vercel' },
    { id: 6, title: 'ChatGPT و Prompt Engineering', cat: 'ai', level: 'beginner', price: 990000, oldPrice: 1800000, rating: 4.7, students: 6890, hours: 18, lessons: 64, instructor: 'دکتر رضا کریمی', tag: 'پرفروش', color: 'from-fuchsia-500 to-purple-600', desc: 'هنر گفتگو با هوش مصنوعی، تکنیک‌های پیشرفته پرامپت‌نویسی برای کسب‌وکار و محتوا' },
    { id: 7, title: 'Tailwind CSS کامل', cat: 'design', level: 'intermediate', price: 1290000, oldPrice: 2100000, rating: 4.8, students: 2780, hours: 22, lessons: 78, instructor: 'سارا حسینی', tag: 'پرفروش', color: 'from-emerald-400 to-cyan-500', desc: 'استایلینگ مدرن وب با Tailwind، انیمیشن‌های پیشرفته و طراحی ریسپانسیو حرفه‌ای' },
    { id: 8, title: 'Node.js و Backend مدرن', cat: 'programming', level: 'intermediate', price: 2290000, oldPrice: 3500000, rating: 4.8, students: 2150, hours: 35, lessons: 110, instructor: 'علی محمدی', tag: '', color: 'from-cyan-400 to-blue-500', desc: 'ساخت API های قدرتمند با Node.js، Express، MongoDB و معماری میکروسرویس' },
    { id: 9, title: 'JavaScript مدرن ES2024', cat: 'coding', level: 'beginner', price: 1490000, oldPrice: 2400000, rating: 4.9, students: 5240, hours: 30, lessons: 112, instructor: 'علی محمدی', tag: '', color: 'from-purple-500 to-pink-500', desc: 'تسلط کامل بر JavaScript مدرن، async/await، Promises، و ویژگی‌های جدید ES2024' },
    { id: 10, title: 'Machine Learning عملی', cat: 'ai', level: 'intermediate', price: 2890000, oldPrice: 4200000, rating: 4.9, students: 1450, hours: 40, lessons: 95, instructor: 'دکتر رضا کریمی', tag: '', color: 'from-fuchsia-500 to-purple-600', desc: 'الگوریتم‌های ML از Linear Regression تا Random Forest با پروژه‌های دنیای واقعی' },
    { id: 11, title: 'فیگما برای طراحان', cat: 'design', level: 'beginner', price: 890000, oldPrice: 1500000, rating: 4.8, students: 4120, hours: 16, lessons: 52, instructor: 'سارا حسینی', tag: '', color: 'from-emerald-400 to-cyan-500', desc: 'یادگیری کامل Figma، کار با کامپوننت‌ها، آتو‌لیوت و همکاری تیمی' },
    { id: 12, title: 'Git و GitHub حرفه‌ای', cat: 'coding', level: 'beginner', price: 690000, oldPrice: 1200000, rating: 4.7, students: 3890, hours: 12, lessons: 42, instructor: 'علی محمدی', tag: '', color: 'from-purple-500 to-pink-500', desc: 'کنترل ورژن حرفه‌ای، کار تیمی با Git، Branching، و دیپلوی با GitHub Actions' },
  ];

  const instructors = [
    { name: 'علی محمدی', role: 'Senior Full-Stack Developer', courses: 12, students: 8500, rating: 4.9, color: 'from-cyan-400 to-blue-500' },
    { name: 'نازنین احمدی', role: 'Python & Backend Expert', courses: 8, students: 6200, rating: 4.8, color: 'from-purple-500 to-pink-500' },
    { name: 'دکتر رضا کریمی', role: 'AI & ML Specialist', courses: 10, students: 5400, rating: 5.0, color: 'from-fuchsia-500 to-purple-600' },
    { name: 'سارا حسینی', role: 'UI/UX Designer', courses: 9, students: 7100, rating: 4.9, color: 'from-emerald-400 to-cyan-500' },
  ];

  const testimonials = [
    { name: 'محمد رضایی', role: 'دانشجوی دوره React', text: 'دوره فوق‌العاده بود! بعد از تموم کردنش به‌عنوان فرانت‌اند جونیور استخدام شدم. کیفیت آموزش و پشتیبانی واقعاً عالیه.', rating: 5 },
    { name: 'زهرا مرادی', role: 'دانشجوی دوره AI', text: 'استاد کریمی بهترین مدرس هوش مصنوعی هستن. مفاهیم سخت رو خیلی روان توضیح میدن. الان پروژه AI خودم رو دارم.', rating: 5 },
    { name: 'امیر حسینی', role: 'دانشجوی دوره طراحی', text: 'از طراح آماتور تا یک UI/UX دیزاینر حرفه‌ای، همه‌ش با دوره‌های 22 بهمن. الان فریلنسر موفقی هستم.', rating: 5 },
  ];

  const enrolled = [
    { id: 1, title: 'React.js پیشرفته', progress: 65, lastLesson: 'فصل 8: Custom Hooks', color: 'from-cyan-400 to-blue-500' },
    { id: 3, title: 'هوش مصنوعی با TensorFlow', progress: 30, lastLesson: 'فصل 4: Neural Networks', color: 'from-fuchsia-500 to-purple-600' },
    { id: 4, title: 'طراحی UI/UX حرفه‌ای', progress: 90, lastLesson: 'فصل 10: Design System', color: 'from-emerald-400 to-cyan-500' },
  ];

  const filteredCourses = courses.filter(c => {
    const matchCat = activeCat === 'all' || c.cat === activeCat;
    const matchLevel = activeLevel === 'all' || c.level === activeLevel;
    const matchQuery = !query || c.title.toLowerCase().includes(query.toLowerCase()) || c.instructor.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchLevel && matchQuery;
  });

  const addToCart = (course) => {
    if (!cart.find(c => c.id === course.id)) {
      setCart([...cart, course]);
    }
    setShowCart(true);
  };

  const removeFromCart = (id) => setCart(cart.filter(c => c.id !== id));
  const toggleFav = (id) => setFavs(favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
  const total = cart.reduce((sum, c) => sum + c.price, 0);
  const formatPrice = (p) => new Intl.NumberFormat('fa-IR').format(p);
  const formatNum = (n) => new Intl.NumberFormat('fa-IR').format(n);

  const levelMap = { beginner: 'مقدماتی', intermediate: 'متوسط', advanced: 'پیشرفته' };
  const catMap = { coding: 'کدنویسی', programming: 'برنامه‌نویسی', ai: 'هوش مصنوعی', design: 'طراحی سایت' };

  return (
    <div dir="rtl" className="min-h-screen bg-[#05050a] text-white relative overflow-hidden" style={{ fontFamily: 'Vazirmatn, system-ui, sans-serif' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(6, 182, 212, 0.5); }
        }
        .float-1 { animation: float 8s ease-in-out infinite; }
        .float-2 { animation: float2 10s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(168, 85, 247, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.07) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        .slide-up { animation: slideUp 0.6s ease-out forwards; }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .gradient-text {
          background: linear-gradient(90deg, #a855f7, #06b6d4, #a855f7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .glow-btn:hover {
          animation: glow 1.5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20 float-1"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-20 float-2"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-fuchsia-600 rounded-full blur-[100px] opacity-10 pulse-glow"></div>
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-transform duration-300"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            left: mousePos.x - 128,
            top: mousePos.y - 128,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-black text-lg shadow-lg shadow-purple-500/50">
              ۲۲
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 blur-md opacity-50 -z-10"></div>
            </div>
            <div>
              <div className="font-black text-base gradient-text">۲۲ بهمن</div>
              <div className="text-[10px] text-white/40 -mt-1">آکادمی برنامه‌نویسی</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { id: 'home', label: 'خانه', icon: Home },
              { id: 'courses', label: 'دوره‌ها', icon: BookOpen },
              { id: 'dashboard', label: 'پنل من', icon: BarChart3 },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-all ${
                  view === item.id
                    ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setShowCart(true)} className="relative w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-105">
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full text-xs font-bold flex items-center justify-center">
                  {formatNum(cart.length)}
                </div>
              )}
            </button>
            <button className="hidden md:flex w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 items-center justify-center hover:scale-105 transition-all shadow-lg shadow-purple-500/30">
              <User className="w-5 h-5" />
            </button>
            <button onClick={() => setShowMenu(!showMenu)} className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              {showMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="md:hidden border-t border-white/5 bg-black/60 backdrop-blur-xl">
            {[
              { id: 'home', label: 'خانه', icon: Home },
              { id: 'courses', label: 'دوره‌ها', icon: BookOpen },
              { id: 'dashboard', label: 'پنل من', icon: BarChart3 },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => { setView(item.id); setShowMenu(false); }}
                className="w-full px-6 py-3 flex items-center gap-3 text-right hover:bg-white/5"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-16">
        {view === 'home' && (
          <div className="fade-in">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
              <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-sm mb-8 slide-up">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">آکادمی شماره ۱ آموزش برنامه‌نویسی در ایران</span>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                  <span className="block">از <span className="gradient-text">صفر</span> تا</span>
                  <span className="block gradient-text">قهرمان کد</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                  بهترین دوره‌های برنامه‌نویسی، هوش مصنوعی و طراحی سایت
                  <br />
                  با اساتید برتر و پشتیبانی ۲۴ ساعته
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-16 slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                  <button
                    onClick={() => setView('courses')}
                    className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-base flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-purple-500/40 glow-btn"
                  >
                    شروع یادگیری
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm font-bold text-base flex items-center gap-2 hover:bg-white/10 transition-all">
                    <Play className="w-5 h-5" />
                    تماشای دموی رایگان
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
                  {[
                    { val: stats.s, label: 'دانشجو', icon: Users, color: 'from-purple-500 to-pink-500' },
                    { val: stats.c, label: 'دوره فعال', icon: BookOpen, color: 'from-cyan-400 to-blue-500' },
                    { val: stats.i, label: 'مدرس برتر', icon: GraduationCap, color: 'from-fuchsia-500 to-purple-600' },
                    { val: stats.h, label: 'ساعت محتوا', icon: Clock, color: 'from-emerald-400 to-cyan-500' },
                  ].map((s, i) => (
                    <div key={i} className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                        <s.icon className="w-6 h-6" />
                      </div>
                      <div className="text-3xl font-black gradient-text mb-1">+{formatNum(s.val)}</div>
                      <div className="text-sm text-white/60">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Categories */}
            <section className="px-4 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-purple-300">دسته‌بندی دوره‌ها</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4">
                    چی می‌خوای یاد بگیری؟
                  </h2>
                  <p className="text-white/60">انتخاب کن و وارد دنیای تکنولوژی شو</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {categories.map((cat, i) => (
                    <div
                      key={cat.id}
                      onClick={() => { setActiveCat(cat.id); setView('courses'); }}
                      className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all hover:scale-[1.03] cursor-pointer overflow-hidden"
                    >
                      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>
                      <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-xl`}>
                        <cat.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                      <p className="text-sm text-white/50 mb-4 leading-relaxed">{cat.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/40">{formatNum(courses.filter(c => c.cat === cat.id).length)} دوره</span>
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Courses */}
            <section className="px-4 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-end justify-between mb-12 gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                      <Flame className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-cyan-300">داغ‌ترین دوره‌ها</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black">پرفروش‌ترین دوره‌ها</h2>
                  </div>
                  <button onClick={() => setView('courses')} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                    مشاهده همه
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.slice(0, 6).map(course => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onSelect={() => { setSelectedCourse(course); setView('course-detail'); }}
                      onAdd={() => addToCart(course)}
                      onFav={() => toggleFav(course.id)}
                      isFav={favs.includes(course.id)}
                      inCart={cart.some(c => c.id === course.id)}
                      formatPrice={formatPrice}
                      formatNum={formatNum}
                      levelMap={levelMap}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Why Us */}
            <section className="px-4 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-black mb-4">
                    چرا <span className="gradient-text">۲۲ بهمن؟</span>
                  </h2>
                  <p className="text-white/60">ویژگی‌هایی که ما رو متفاوت می‌کنه</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Cpu, title: 'محتوای به‌روز', desc: 'تمام دوره‌ها با آخرین تکنولوژی‌ها و فریم‌ورک‌های سال ۲۰۲۶ به‌روزرسانی می‌شن', color: 'from-purple-500 to-pink-500' },
                    { icon: Shield, title: 'گارانتی بازگشت وجه', desc: 'تا ۷ روز پس از خرید اگه راضی نبودی، کل پولت رو پس می‌گیریم', color: 'from-cyan-400 to-blue-500' },
                    { icon: MessageCircle, title: 'پشتیبانی ۲۴ ساعته', desc: 'تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالاتته', color: 'from-fuchsia-500 to-purple-600' },
                    { icon: Award, title: 'مدرک معتبر', desc: 'بعد از اتمام هر دوره، مدرک رسمی و قابل استعلام دریافت می‌کنی', color: 'from-emerald-400 to-cyan-500' },
                    { icon: Target, title: 'پروژه‌محور', desc: 'تمام دوره‌ها با پروژه‌های واقعی و کاربردی برای رزومه‌ت', color: 'from-orange-400 to-pink-500' },
                    { icon: Lightbulb, title: 'یادگیری مادام‌العمر', desc: 'با یک‌بار خرید، دسترسی نامحدود به تمام به‌روزرسانی‌های آینده', color: 'from-yellow-400 to-orange-500' },
                  ].map((f, i) => (
                    <div key={i} className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <f.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Instructors */}
            <section className="px-4 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-emerald-300">تیم آموزشی</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4">اساتید برتر ما</h2>
                  <p className="text-white/60">از بهترین‌های صنعت یاد بگیر</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  {instructors.map((ins, i) => (
                    <div key={i} className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all text-center hover:scale-105">
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${ins.color} blur-lg opacity-50 group-hover:opacity-80 transition-opacity`}></div>
                        <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${ins.color} flex items-center justify-center text-2xl font-black shadow-xl`}>
                          {ins.name.charAt(0)}
                        </div>
                      </div>
                      <h3 className="font-bold mb-1">{ins.name}</h3>
                      <p className="text-xs text-white/50 mb-3">{ins.role}</p>
                      <div className="flex items-center justify-center gap-3 text-xs">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{formatNum(ins.rating)}</span>
                        </div>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60">{formatNum(ins.courses)} دوره</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="px-4 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 mb-4">
                    <Heart className="w-4 h-4 text-fuchsia-400" />
                    <span className="text-xs text-fuchsia-300">نظرات دانشجویان</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4">دانشجوهای موفق ما</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((t, i) => (
                    <div key={i} className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                      <div className="flex gap-1 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-white/80 leading-loose mb-6">"{t.text}"</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-black">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{t.name}</div>
                          <div className="text-xs text-white/50">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="px-4 py-20">
              <div className="max-w-5xl mx-auto">
                <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-purple-600/20 via-fuchsia-500/10 to-cyan-500/20 border border-purple-500/30 overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
                  <div className="relative">
                    <Sparkles className="w-12 h-12 mx-auto mb-6 text-cyan-400" />
                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                      آماده‌ای زندگیت رو <span className="gradient-text">تغییر</span> بدی؟
                    </h2>
                    <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                      الان وقتشه. به جامعه‌ی بیش از ۱۲ هزار دانشجوی موفق ما بپیوند و آینده‌ت رو بساز.
                    </p>
                    <button
                      onClick={() => setView('courses')}
                      className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-purple-500/40 glow-btn inline-flex items-center gap-2"
                    >
                      شروع کن همین الان
                      <Rocket className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {view === 'courses' && (
          <div className="fade-in px-4 py-10 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black mb-3">همه <span className="gradient-text">دوره‌ها</span></h1>
              <p className="text-white/60">انتخاب کن و یادگیری رو شروع کن</p>
            </div>

            {/* Search & Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="جستجو در بین دوره‌ها، مدرسین و موضوعات..."
                  className="w-full pr-12 pl-4 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-purple-500/50 outline-none text-base placeholder:text-white/30 transition-all"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCat('all')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeCat === 'all'
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
                      : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  همه دسته‌ها
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                      activeCat === cat.id
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
                        : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'همه سطوح' },
                  { id: 'beginner', label: 'مقدماتی' },
                  { id: 'intermediate', label: 'متوسط' },
                  { id: 'advanced', label: 'پیشرفته' },
                ].map(lvl => (
                  <button
                    key={lvl.id}
                    onClick={() => setActiveLevel(lvl.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeLevel === lvl.id
                        ? 'bg-white/10 border border-purple-500/50 text-white'
                        : 'bg-white/5 border border-white/5 text-white/50 hover:bg-white/10'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-white/60">{formatNum(filteredCourses.length)} دوره پیدا شد</p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onSelect={() => { setSelectedCourse(course); setView('course-detail'); }}
                    onAdd={() => addToCart(course)}
                    onFav={() => toggleFav(course.id)}
                    isFav={favs.includes(course.id)}
                    inCart={cart.some(c => c.id === course.id)}
                    formatPrice={formatPrice}
                    formatNum={formatNum}
                    levelMap={levelMap}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-16 h-16 mx-auto mb-4 text-white/20" />
                <p className="text-white/50">دوره‌ای با این مشخصات پیدا نشد</p>
              </div>
            )}
          </div>
        )}

        {view === 'course-detail' && selectedCourse && (
          <div className="fade-in px-4 py-10 max-w-6xl mx-auto">
            <button onClick={() => setView('courses')} className="mb-6 flex items-center gap-2 text-sm text-white/60 hover:text-white">
              <ChevronLeft className="w-4 h-4 rotate-180" />
              بازگشت به دوره‌ها
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className={`aspect-video rounded-3xl bg-gradient-to-br ${selectedCourse.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <button className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-all">
                    <Play className="w-8 h-8 mr-1" fill="white" />
                  </button>
                  {selectedCourse.tag && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold">
                      {selectedCourse.tag}
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-200">
                      {catMap[selectedCourse.cat]}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-200">
                      {levelMap[selectedCourse.level]}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black mb-4">{selectedCourse.title}</h1>
                  <p className="text-white/70 leading-relaxed mb-6">{selectedCourse.desc}</p>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-bold">{formatNum(selectedCourse.rating)}</span>
                      <span className="text-white/40">({formatNum(selectedCourse.students)} دانشجو)</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Clock className="w-4 h-4" />
                      {formatNum(selectedCourse.hours)} ساعت
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <FileText className="w-4 h-4" />
                      {formatNum(selectedCourse.lessons)} درس
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    در این دوره یاد می‌گیری
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'پروژه‌های واقعی و کاربردی',
                      'بهترین متدها و الگوها',
                      'دیباگ و حل مشکلات',
                      'بهینه‌سازی و پرفورمنس',
                      'تست و کیفیت کد',
                      'دیپلوی و انتشار',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                  <h3 className="text-xl font-bold mb-4">سرفصل‌های دوره</h3>
                  <div className="space-y-2">
                    {[
                      'فصل ۱: معرفی و راه‌اندازی محیط',
                      'فصل ۲: مفاهیم پایه',
                      'فصل ۳: تکنیک‌های پیشرفته',
                      'فصل ۴: پروژه عملی',
                      'فصل ۵: بهینه‌سازی و دیپلوی',
                    ].map((title, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-xs font-bold">
                            {formatNum(i + 1)}
                          </div>
                          <span className="text-sm">{title}</span>
                        </div>
                        <Play className="w-4 h-4 text-white/40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-black gradient-text">{formatPrice(selectedCourse.price)}</span>
                      <span className="text-white/60 text-sm">تومان</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/40 line-through">{formatPrice(selectedCourse.oldPrice)}</span>
                      <span className="px-2 py-0.5 rounded-md bg-red-500/20 text-red-300 text-xs font-bold">
                        {Math.round((1 - selectedCourse.price / selectedCourse.oldPrice) * 100)}٪ تخفیف
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(selectedCourse)}
                    disabled={cart.some(c => c.id === selectedCourse.id)}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed mb-3"
                  >
                    {cart.some(c => c.id === selectedCourse.id) ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        در سبد خرید
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        افزودن به سبد خرید
                      </>
                    )}
                  </button>

                  <button className="w-full py-3.5 rounded-2xl bg-white/5 border border-white/10 font-bold text-sm hover:bg-white/10 transition-all mb-6">
                    خرید و دسترسی فوری
                  </button>

                  <div className="space-y-3 text-sm pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">مدرس</span>
                      <span className="font-medium">{selectedCourse.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">سطح</span>
                      <span className="font-medium">{levelMap[selectedCourse.level]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">مدت زمان</span>
                      <span className="font-medium">{formatNum(selectedCourse.hours)} ساعت</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">تعداد درس</span>
                      <span className="font-medium">{formatNum(selectedCourse.lessons)} درس</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">گواهی پایان</span>
                      <span className="font-medium text-emerald-400">✓ دارد</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">پشتیبانی</span>
                      <span className="font-medium text-emerald-400">۲۴ ساعته</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'dashboard' && (
          <div className="fade-in px-4 py-10 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 blur-lg opacity-50"></div>
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-2xl font-black">
                    خ
                  </div>
                </div>
                <div>
                  <p className="text-sm text-white/50">خوش آمدی</p>
                  <h1 className="text-2xl md:text-3xl font-black">خانم/آقای دانشجو 👋</h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all relative">
                  <Bell className="w-5 h-5" />
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>
                </button>
                <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all text-sm">
                  <LogOut className="w-4 h-4" />
                  خروج
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: BookOpen, label: 'دوره فعال', val: '۳', color: 'from-purple-500 to-pink-500' },
                { icon: Trophy, label: 'دوره تموم شده', val: '۵', color: 'from-cyan-400 to-blue-500' },
                { icon: Clock, label: 'ساعت یادگیری', val: '۱۲۴', color: 'from-fuchsia-500 to-purple-600' },
                { icon: Award, label: 'گواهی', val: '۵', color: 'from-emerald-400 to-cyan-500' },
              ].map((s, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-black mb-1">{s.val}</div>
                  <div className="text-xs text-white/60">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Continue Learning */}
            <div className="mb-8">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                ادامه یادگیری
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {enrolled.map(course => (
                  <div key={course.id} className="group p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all">
                    <div className={`h-32 rounded-2xl bg-gradient-to-br ${course.color} mb-4 flex items-center justify-center relative overflow-hidden`}>
                      <BookOpen className="w-10 h-10 text-white/50" />
                      <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <Play className="w-5 h-5 mr-0.5" fill="white" />
                        </div>
                      </button>
                    </div>
                    <h3 className="font-bold mb-2">{course.title}</h3>
                    <p className="text-xs text-white/50 mb-3">آخرین درس: {course.lastLesson}</p>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-white/60">پیشرفت</span>
                      <span className="font-bold gradient-text">{formatNum(course.progress)}٪</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity & Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  فعالیت‌های اخیر
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Play, text: 'درس "Custom Hooks در React" رو تموم کردی', time: '۲ ساعت پیش', color: 'text-cyan-400' },
                    { icon: Trophy, text: 'گواهی دوره طراحی UI/UX رو گرفتی', time: 'دیروز', color: 'text-yellow-400' },
                    { icon: MessageCircle, text: 'سوال جدیدی در گفتگوی دوره React', time: '۲ روز پیش', color: 'text-purple-400' },
                  ].map((a, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                      <a.icon className={`w-5 h-5 ${a.color} flex-shrink-0 mt-0.5`} />
                      <div className="flex-1">
                        <p className="text-sm">{a.text}</p>
                        <p className="text-xs text-white/40 mt-1">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  دستاوردهای تو
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Flame, label: '۱۵ روز پشت سر هم' },
                    { icon: Trophy, label: '۵ گواهی' },
                    { icon: Target, label: 'پروژه‌ساز' },
                    { icon: Rocket, label: 'یادگیرنده سریع' },
                    { icon: Star, label: 'دانشجوی برتر' },
                    { icon: Award, label: 'متخصص React' },
                  ].map((b, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center p-2 hover:scale-105 transition-all">
                      <b.icon className="w-6 h-6 mb-1 text-yellow-400" />
                      <span className="text-[10px] text-white/70 leading-tight">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      {view !== 'course-detail' && (
        <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-black">۲۲</div>
                  <div>
                    <div className="font-black gradient-text">۲۲ بهمن</div>
                    <div className="text-[10px] text-white/40">آکادمی برنامه‌نویسی</div>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  پلتفرم آموزش آنلاین برنامه‌نویسی و هوش مصنوعی، با اساتید برتر و پشتیبانی تخصصی.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">دسته‌بندی‌ها</h4>
                <ul className="space-y-2 text-sm">
                  {categories.map(c => (
                    <li key={c.id}>
                      <button onClick={() => { setActiveCat(c.id); setView('courses'); }} className="text-white/60 hover:text-white transition-colors">
                        {c.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">دسترسی سریع</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => setView('home')} className="text-white/60 hover:text-white">خانه</button></li>
                  <li><button onClick={() => setView('courses')} className="text-white/60 hover:text-white">دوره‌ها</button></li>
                  <li><button onClick={() => setView('dashboard')} className="text-white/60 hover:text-white">پنل دانشجو</button></li>
                  <li><span className="text-white/60 hover:text-white cursor-pointer">درباره ما</span></li>
                  <li><span className="text-white/60 hover:text-white cursor-pointer">قوانین و مقررات</span></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">تماس با ما</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-white/60">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span dir="ltr">۰۹۱۲-۶۰۱-۱۲۴۵</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <Instagram className="w-4 h-4 text-purple-400" />
                    @bahman22.academy
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <Send className="w-4 h-4 text-cyan-400" />
                    @bahman22_support
                  </li>
                </ul>

                <div className="flex items-center gap-2 mt-4">
                  {[Instagram, Send, MessageCircle].map((Icon, i) => (
                    <button key={i} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-400 transition-all">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-white/40">
                © ۱۴۰۵ آکادمی ۲۲ بهمن • تمامی حقوق محفوظ است
              </p>
              <p className="text-xs text-white/40">
                ساخته شده با ❤️ در ایران
              </p>
            </div>
          </div>
        </footer>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-[100] flex">
          <div onClick={() => setShowCart(false)} className="flex-1 bg-black/60 backdrop-blur-sm fade-in"></div>
          <div className="w-full max-w-md bg-[#0a0a14] border-l border-white/10 flex flex-col h-full slide-up">
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl font-black flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-cyan-400" />
                سبد خرید
                <span className="text-sm text-white/40">({formatNum(cart.length)})</span>
              </h3>
              <button onClick={() => setShowCart(false)} className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-white/20" />
                  <p className="text-white/60 mb-2">سبد خرید شما خالیه</p>
                  <p className="text-sm text-white/40 mb-6">دوره‌های مورد علاقه‌ت رو اضافه کن</p>
                  <button onClick={() => { setShowCart(false); setView('courses'); }} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 font-bold text-sm">
                    مشاهده دوره‌ها
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-3">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <BookOpen className="w-7 h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm truncate">{item.title}</h4>
                        <p className="text-xs text-white/50 mt-1">{item.instructor}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold gradient-text">{formatPrice(item.price)} تومان</span>
                          <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center">
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-white/10 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>قیمت دوره‌ها</span>
                    <span>{formatPrice(total)} تومان</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>تخفیف ویژه</span>
                    <span>۰ تومان</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex justify-between text-base font-bold">
                    <span>قابل پرداخت</span>
                    <span className="gradient-text">{formatPrice(total)} تومان</span>
                  </div>
                </div>
                <button className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-400 font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-purple-500/40">
                  <CheckCircle2 className="w-5 h-5" />
                  تکمیل خرید
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, onSelect, onAdd, onFav, isFav, inCart, formatPrice, formatNum, levelMap }) {
  return (
    <div className="group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all hover:-translate-y-2 overflow-hidden">
      <div onClick={onSelect} className={`h-44 bg-gradient-to-br ${course.color} relative cursor-pointer overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {course.tag && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-xs font-bold">
            {course.tag}
          </div>
        )}
        <button onClick={(e) => { e.stopPropagation(); onFav(); }} className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-all">
          <Heart className={`w-4 h-4 transition-all ${isFav ? 'text-red-500 fill-red-500' : 'text-white'}`} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2 text-xs">
          <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/70">
            {levelMap[course.level]}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-white/60">{course.instructor}</span>
        </div>

        <h3 onClick={onSelect} className="font-bold text-base mb-3 line-clamp-2 cursor-pointer hover:text-cyan-400 transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-white/80">{formatNum(course.rating)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{formatNum(course.students)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatNum(course.hours)} ساعت</span>
          </div>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-white/10">
          <div>
            <div className="text-lg font-black gradient-text">{formatPrice(course.price)}</div>
            <div className="text-xs text-white/40 line-through">{formatPrice(course.oldPrice)}</div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onAdd(); }}
            disabled={inCart}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              inCart
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-gradient-to-br from-purple-500 to-cyan-400 hover:scale-110 shadow-lg shadow-purple-500/30'
            }`}
          >
            {inCart ? <CheckCircle2 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
