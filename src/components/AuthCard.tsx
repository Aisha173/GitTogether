export default function AuthCard({ type }: { type: "login" | "signup" }) {
  return (
    <div className="w-full max-w-sm p-8 bg-card-bg/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl">
      <h2 className="text-3xl font-black mb-8 text-center tracking-tighter uppercase">
        {type === "login" ? "Welcome Back" : "New User"}
      </h2>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase ml-4">
            Email
          </label>
          <input
            type="email"
            className="w-full mt-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-purple outline-none transition-all"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-500 uppercase ml-4">
            Password
          </label>
          <input
            type="password"
            className="w-full mt-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-purple outline-none transition-all"
          />
        </div>

        {type === "signup" && (
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase ml-4">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-purple outline-none transition-all"
            />
          </div>
        )}

        <button className="w-full mt-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all uppercase tracking-widest">
          {type === "login" ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
