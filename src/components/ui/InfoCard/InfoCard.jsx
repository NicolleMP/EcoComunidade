export default function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="max-w-7xl px-8">
      <div className="rounded-3xl bg-white border border-gray-200 shadow-sm w-126 p-6 flex items-center gap-6 cursor-pointer">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#EEF2EB]">
          <Icon size={28} className="text-[#2d5a27]" />
        </div>
        <div>
          <h2 className="font-display font-bold text-xl text-[#2d5a27]">
            {title}
          </h2>
          <p className="font-serif font-normal text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
