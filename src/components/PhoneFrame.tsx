export default function PhoneFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] flex justify-center items-center px-4">
      {/* Phone Body */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.7)] border-[10px] border-black">
        {/* iPhone Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-full z-20" />

        {/* Screen */}
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0c]">
          {children}
        </div>
      </div>
    </div>
  );
}
