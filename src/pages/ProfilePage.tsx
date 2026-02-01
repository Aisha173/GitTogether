import React, { useState } from "react";
import { profile } from "../data/profile";
import SkillBar from "../components/SkillBar";

// 1. Define types for our skill objects
interface SkillEntry {
  name: string;
  level: number;
}

const AVAILABLE_SKILLS: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Python",
  "GraphQL",
  "Rust",
  "Git",
  "C++",
  "Backend Development",
  "Debugging/ Code Understanding",
  "Team Collaboration",
  "Communication",
  "Presenting",
  "Leadership",
  "Scrum Skills",
  "Ideation",
  "Flexibility",
];

export default function ProfilePage() {
  // 2. Type the state as an array of SkillEntry
  const [mySkills, setMySkills] = useState<SkillEntry[]>(
    profile.skills.map((skillName) => ({ name: skillName, level: 3 })),
  );

  const [selectedNewSkill, setSelectedNewSkill] = useState<string>("");

  // 3. Typed Handlers
  const handleAddSkill = (): void => {
    if (
      selectedNewSkill &&
      !mySkills.find((s) => s.name === selectedNewSkill)
    ) {
      setMySkills([...mySkills, { name: selectedNewSkill, level: 1 }]);
      setSelectedNewSkill("");
    }
  };

  const handleLevelChange = (skillName: string, newLevel: number): void => {
    setMySkills((prev) =>
      prev.map((skill) =>
        skill.name === skillName ? { ...skill, level: newLevel } : skill,
      ),
    );
  };

  const handleRemoveSkill = (skillName: string): void => {
    setMySkills((prev) => prev.filter((s) => s.name !== skillName));
  };

  const availableOptions = AVAILABLE_SKILLS.filter(
    (s) => !mySkills.find((ms) => ms.name === s),
  );

  return (
    <div className="h-full overflow-y-auto p-6 space-y-8 no-scrollbar text-white">
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
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest">
            Core Skills
          </h3>
          <span className="text-[10px] text-gray-600 uppercase font-bold tracking-tighter">
            Tap bar to rate
          </span>
        </div>

        <div className="space-y-6">
          {mySkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-bold text-gray-200">{skill.name}</span>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-mono">
                    Lvl {skill.level}
                  </span>
                  <button
                    onClick={() => handleRemoveSkill(skill.name)}
                    className="text-gray-600 hover:text-red-500 transition-colors"
                    aria-label="Remove skill"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Interactive Wrapper */}
              <div className="relative h-4 w-full cursor-pointer">
                <SkillBar level={skill.level} />
                <div className="absolute inset-0 flex w-full h-full">
                  {[1, 2, 3, 4].map((rating) => (
                    <div
                      key={rating}
                      onClick={() => handleLevelChange(skill.name, rating)}
                      className="flex-1 h-full z-10"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Skill Controls */}
        <div className="mt-8 pt-6 border-t border-white/5 flex gap-2">
          <select
            value={selectedNewSkill}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedNewSkill(e.target.value)
            }
            className="flex-1 bg-[#0a0a0c] border border-white/10 rounded-xl text-xs text-gray-300 px-3 py-3 outline-none focus:border-purple-500 appearance-none"
          >
            <option value="" disabled>
              + Add a skill
            </option>
            {availableOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddSkill}
            disabled={!selectedNewSkill}
            className="bg-white disabled:opacity-30 text-black px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95"
          >
            Add
          </button>
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
