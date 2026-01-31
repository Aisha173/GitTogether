import { useState } from "react";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage"; 
import MatchesPage from "./pages/MatchesPage"; 
import PhoneFrame from "./components/PhoneFrame";

export default function App() {
  const [activeTab, setActiveTab] = useState("discover");

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-[#0a0a0c] text-white overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "discover" && <Home />}
          {activeTab === "matches" && <MatchesPage />}
          {activeTab === "profile" && <ProfilePage />}
        </div>

        {/* Bottom Navigation */}
        <nav className="h-20 bg-[#121214]/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-6 pb-2">
          <button
            onClick={() => setActiveTab("discover")}
            className={`flex flex-col items-center gap-1 ${activeTab === "discover" ? "text-purple-400" : "text-gray-500"}`}
          >
            <span className="text-xl"></span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Discover
            </span>
          </button>

          <button
            onClick={() => setActiveTab("matches")}
            className={`flex flex-col items-center gap-1 ${activeTab === "matches" ? "text-purple-400" : "text-gray-500"}`}
          >
            <span className="text-xl"></span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Matches
            </span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 ${activeTab === "profile" ? "text-purple-400" : "text-gray-500"}`}
          >
            <span className="text-xl"></span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Profile
            </span>
          </button>
        </nav>
      </div>
    </PhoneFrame>
  );
}
