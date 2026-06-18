export function ConsultantCardSkeleton() {
  return (
    <div className="glass rounded-3xl p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-4">
        <div className="skeleton h-14 w-14 rounded-full" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="skeleton h-4 w-2/3" />
          <div className="skeleton h-5 w-24 rounded-full" />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-3 w-4/5" />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="skeleton h-12 rounded-2xl" />
        <div className="skeleton h-12 rounded-2xl" />
      </div>
    </div>
  );
}
