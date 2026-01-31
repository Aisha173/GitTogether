import { Sparkles } from "lucide-react";
import { useState } from "react";

const ideas = [
  "An app that matches students to hackathon teammates",
  "A platform to review team collaboration after projects",
  "A gamified learning roadmap based on real projects",
];

export default function IdeaGenerator() {
  const [idea, setIdea] = useState("");

  return (
    <div className="bg-gradient-to-br from-[#1a1a1e] to-[#121214] border border-purple-500/20 rounded-2xl p-5 shadow-inner">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="text-purple-400 w-4 h-4" />
        <h3 className="font-bold text-sm text-purple-100">AI Idea Spark</h3>
      </div>

      <button
        onClick={() => setIdea(ideas[Math.floor(Math.random() * ideas.length)])}
        className="w-full bg-purple-600/20 border border-purple-500/30 text-purple-300 py-2 rounded-lg text-xs font-bold hover:bg-purple-600 hover:text-white transition-all"
      >
        {idea ? "Try Another" : "Generate Concept"}
      </button>

      {idea && (
        <div className="mt-4 p-3 bg-black/40 rounded-lg border border-white/5 animate-in fade-in slide-in-from-top-2">
          <p className="text-xs text-gray-300 italic">"{idea}"</p>
        </div>
      )}
    </div>
  );
}
