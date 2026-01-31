const mockChats = [
  {
    id: 1,
    title: "DevDate Devs",
    lastMsg: "Let's finish the UI tonight!",
    time: "2m ago",
  },
  {
    id: 2,
    title: "StudyBuddy Team",
    lastMsg: "Did you check the Firebase docs?",
    time: "1h ago",
  },
];

export default function ChatList() {
  return (
    <div className="divide-y divide-white/5">
      <h2 className="px-6 py-4 text-xs font-black text-gray-500 uppercase tracking-widest">
        Active Chats
      </h2>
      {mockChats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center gap-4 p-6 hover:bg-white/5 transition-colors cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue" />
          <div className="flex-1">
            <h3 className="font-bold text-lg">{chat.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-1">{chat.lastMsg}</p>
          </div>
          <span className="text-[10px] font-bold text-gray-600 uppercase">
            {chat.time}
          </span>
        </div>
      ))}
    </div>
  );
}
