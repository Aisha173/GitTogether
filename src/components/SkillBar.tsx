export default function SkillBar({ level }: { level: number }) {
  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-full h-4 mt-2 overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-1000"
        style={{ width: `${level * 25}%` }}
      />
    </div>
  );
}
