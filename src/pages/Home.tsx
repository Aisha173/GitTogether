import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// 1. Import the Project interface from your component
import ProjectCard, { type Project } from "../components/ProjectCard";
import { projects as initialProjects } from "../data/projects";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState(0);

  const handleAction = (direction: "left" | "right") => {
    setExitDirection(direction === "left" ? -1000 : 1000);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 200);
  };


  const currentProject = initialProjects[currentIndex] as Project;

  return (
    <div className="h-full flex flex-col p-6 overflow-hidden">
      <header className="mb-4 pt-4 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          GitTogether
        </h1>
        <span className="text-[10px] font-bold text-gray-600 uppercase">
          {currentIndex} / {initialProjects.length}
        </span>
      </header>

      <div className="flex-1 flex items-center justify-center relative w-full">
        <AnimatePresence mode="wait">
          {currentProject ? (
            <motion.div
              key={currentProject.title} // Use title or ID as a key
              initial={{ x: 0, opacity: 1, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{
                x: exitDirection,
                opacity: 0,
                rotate: exitDirection / 20,
                transition: { duration: 0.4 },
              }}
              className="w-full"
            >
              {/* 3. The red line should disappear here now! */}
              <ProjectCard project={currentProject} onAction={handleAction} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <div className="text-5xl">🎉</div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                You've seen everything!
              </p>
              <button
                onClick={() => setCurrentIndex(0)}
                className="text-purple-400 text-xs font-black border border-purple-400/30 px-6 py-3 rounded-full uppercase tracking-tighter"
              >
                Refresh Deck
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
