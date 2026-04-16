type ProgressOverviewProps = {
  completed: number;
  total: number;
};

export default function ProgressOverview({
  completed,
  total,
}: ProgressOverviewProps) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>
      <p className="mt-2 text-sm text-gray-600">
        {completed} of {total} problems completed
      </p>

      <div className="mt-4 h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-2 text-sm font-medium text-gray-700">{percent}% complete</p>
    </div>
  );
}