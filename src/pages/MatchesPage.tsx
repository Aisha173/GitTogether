
// Mock data for people who swiped right on YOUR projects
const mockMatches = [
  {
    id: 1,
    userName: "Thomas",
    projectTitle: "GitTogether",
    avatar: "T",
    time: "2m ago",
    message: "Hey! I'm a UI designer, let's collab.",
  },
  {
    id: 2,
    userName: "Aria",
    projectTitle: "StudyBuddy",
    avatar: "A",
    time: "1h ago",
    message: "I saw your project, I'm interested in the Backend!",
  },
  {
    id: 3,
    userName: "Koyu",
    projectTitle: "GitTogether",
    avatar: "K",
    time: "Yesterday",
    message: "Can I join as a Prototyper?",
  },
];

export default function MatchesPage() {
  return (
    <div className="h-full flex flex-col bg-[#0a0a0c] text-white">
      {/* Header based on your PDF design */}
      <header className="pt-12 pb-6 px-6 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
        <h1 className="text-2xl font-black tracking-tighter uppercase">
          Chats
        </h1>
        <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mt-1">
          Potential Collaborators
        </p>
      </header>

      {/* Matches List */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {mockMatches.length > 0 ? (
          <div className="divide-y divide-white/5">
            {mockMatches.map((match) => (
              <div
                key={match.id}
                className="flex items-center gap-4 p-5 hover:bg-white/5 transition-all cursor-pointer group"
              >
                {/* Avatar with Glow */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-0.5 shadow-lg group-hover:shadow-purple-500/20 transition-all">
                    <div className="w-full h-full rounded-full bg-[#121214] flex items-center justify-center text-lg font-bold">
                      {match.avatar}
                    </div>
                  </div>
                  {/* Active Status Dot */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#0a0a0c] rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-white truncate">
                      @{match.userName}
                    </h3>
                    <span className="text-[10px] font-bold text-gray-600 uppercase whitespace-nowrap">
                      {match.time}
                    </span>
                  </div>
                  <p className="text-xs text-purple-400 font-bold uppercase tracking-tighter mb-1">
                    {match.projectTitle}
                  </p>
                  <p className="text-sm text-gray-400 truncate leading-relaxed">
                    {match.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-4">
            <div className="text-4xl">😴</div>
            <p className="text-gray-500 font-medium">
              No matches yet. Try posting a new project idea!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
