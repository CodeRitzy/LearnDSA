const completedProblemIds = new Set<string>();

export function markProblemComplete(problemId: string) {
  completedProblemIds.add(problemId);
}

export function isProblemComplete(problemId: string) {
  return completedProblemIds.has(problemId);
}

export function getCompletedCount() {
  return completedProblemIds.size;
}