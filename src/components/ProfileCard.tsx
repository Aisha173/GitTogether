import SkillBar from "./SkillBar";

interface Profile {
  name: string;
  level: number;
  role: string;
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <div className="p-6 bg-[#121214] border border-white/10 rounded-2xl shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-0.5 shadow-lg shadow-blue-500/20">
          <div className="w-full h-full rounded-full bg-[#121214] flex items-center justify-center text-xl font-bold">
            {profile.name[0]}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase">
            Level {profile.level} • {profile.role}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>EXPERIENCE POINTS</span>
          <span>{profile.level * 25}%</span>
        </div>
        <SkillBar level={profile.level} />
      </div>
    </div>
  );
}
