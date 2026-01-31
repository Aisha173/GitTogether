/* eslint-disable react-hooks/purity */
import { profile } from "../data/profile";
import SkillBar from "../components/SkillBar";

export default function ProfilePage() {
  return (
    <div className="h-full overflow-y-auto p-6 space-y-8 no-scrollbar">
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center pt-8">
        <div className="w-24 h-24 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 p-1 mb-4 shadow-2xl shadow-purple-500/20">
          <div className="w-full h-full rounded-full bg-[#0a0a0c] flex items-center justify-center text-3xl font-bold">
            {profile.name[0]}
          </div>
        </div>
        <h2 className="text-3xl font-black tracking-tight">{profile.name}</h2>
        <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">
          {profile.role}
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-[#121214] border border-white/5 rounded-3xl p-6">
        <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">
          Core Skills
        </h3>
        <div className="space-y-4">
          {profile.skills.map((skill) => (
            <div key={skill}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold">{skill}</span>
              </div>
              // eslint-disable-next-line react-hooks/purity
              <SkillBar level={Math.floor(Math.random() * 5) + 1} />
            </div>
          ))}
        </div>
      </section>

      {/* Post New Idea */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">💡 Post a Project Idea</h3>
        <div className="bg-[#121214] border border-white/5 rounded-3xl p-4">
          <textarea
            placeholder="What are we building?"
            className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-300 min-h-25 resize-none"
          />
          <button className="w-full mt-2 py-3 bg-white text-black font-black rounded-2xl text-xs uppercase tracking-widest">
            Publish Idea
          </button>
        </div>
      </section>
    </div>
  );
}
