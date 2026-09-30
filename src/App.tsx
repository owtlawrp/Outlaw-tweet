import React, { useState } from 'react';
import { MessageSquare, Heart, Repeat2, Send, Shield, Zap, Terminal } from 'lucide-react';

export default function App() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      author: 'Outlaw Bot',
      handle: '@outlaw_rp',
      content: 'أهلاً بك في منصة Outlaw Tweet الرسمية لمجتمعنا! 🚀 جاهزون للفعاليات القادمة؟',
      likes: 42,
      retweets: 12,
      time: 'الآن'
    }
  ]);
  const [newTweet, setNewTweet] = useState('');

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTweet.trim()) return;
    setTweets([
      {
        id: Date.now(),
        author: 'محمد (المالك)',
        handle: '@mohammad',
        content: newTweet,
        likes: 1,
        retweets: 0,
        time: 'الآن'
      },
      ...tweets
    ]);
    setNewTweet('');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* الهيدر */}
      <header className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-cyan-400" />
          <span className="font-bold text-lg tracking-wider text-cyan-400">OUTLAW TWEET</span>
        </div>
        <div className="flex items-center gap-2 bg-neutral-800 px-3 py-1 rounded-full text-xs text-neutral-300 border border-neutral-700">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>Discord Verified</span>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-xl mx-auto p-4">
        {/* صندوق كتابة التغريدة */}
        <form onSubmit={handlePost} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 mb-6 shadow-xl">
          <textarea
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            placeholder="وش في جعبتك يا outlaw؟..."
            className="w-full bg-transparent resize-none outline-none text-neutral-100 placeholder-neutral-500 min-h-[80px]"
          />
          <div className="flex justify-between items-center pt-3 border-t border-neutral-800">
            <div className="flex gap-2 text-cyan-400 text-sm items-center">
              <Zap className="w-4 h-4" />
              <span>مجتمع الأوتلو</span>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold px-4 py-2 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
              <span>غرد</span>
            </button>
          </div>
        </form>

        {/* استعراض التغريدات */}
        <div className="space-y-4">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 hover:border-neutral-700 transition">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center font-bold text-white">
                    {tweet.author[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-neutral-200">{tweet.author}</h3>
                    <span className="text-xs text-neutral-500">{tweet.handle}</span>
                  </div>
                </div>
                <span className="text-xs text-neutral-500">{tweet.time}</span>
              </div>
              
              <p className="text-neutral-300 text-sm leading-relaxed mb-4 pr-12">
                {tweet.content}
              </p>

              <div className="flex gap-6 text-neutral-400 text-xs pr-12">
                <button className="flex items-center gap-1.5 hover:text-cyan-400 transition">
                  <MessageSquare className="w-4 h-4" />
                  <span>رد</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-green-400 transition">
                  <Repeat2 className="w-4 h-4" />
                  <span>{tweet.retweets}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-rose-400 transition">
                  <Heart className="w-4 h-4" />
                  <span>{tweet.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
