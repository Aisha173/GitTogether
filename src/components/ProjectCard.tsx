import { Check, X, Users, Code2 } from "lucide-react";

// 1. Define the Project type properly instead of 'unknown'
interface Project {
  title: string;
  description: string;
  tech: string[];
  lookingFor?: string; // Optional field
}

interface ProjectCardProps {
  project: Project; // Use the interface here
  onAction: (direction: "left" | "right") => void;
}

// 2. Make sure you destructure 'project' here!
export default function ProjectCard({ project, onAction }: ProjectCardProps) {
  return (
    <div className="relative w-full h-[650px] flex flex-col justify-between">
      {/* 3. This is the "Tiger Card" UI that was missing */}
      <div className="relative flex-1 bg-[#121214]/90 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 shadow-2xl flex flex-col overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[60px]" />

        <div className="flex-1 space-y-6 overflow-y-auto no-scrollbar">
          <div className="space-y-2">
            <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em]">
              New Project
            </span>
            <h3 className="text-4xl font-black leading-tight tracking-tighter text-white">
              {project.title}
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-400 leading-relaxed font-medium">
              {project.description}
            </p>

            {/* Looking For Section */}
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
              <Users className="text-blue-400 w-5 h-5" />
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">
                  Looking For
                </p>
                <p className="text-sm font-bold text-blue-100">
                  {project.lookingFor || "Collaborators"}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-3 h-3 text-gray-500" />
              <p className="text-[10px] text-gray-500 font-bold uppercase">
                Proposed Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-xs font-black text-purple-300 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-10 mt-8 pb-4">
          <button
            onClick={() => onAction("left")}
            className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:border-red-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] group"
          >
            <X
              size={32}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>

          <button
            onClick={() => onAction("right")}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:from-green-500 hover:to-green-600 group"
          >
            <Check
              size={36}
              className="text-white group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
