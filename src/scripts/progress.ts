export const PROGRESS_STORAGE_KEY = 'agentic-workshop-progress';
export const PROGRESS_VERSION = 1;

export const PHASES = ['research', 'plan', 'implement', 'review'] as const;
export type PrimaryPhase = (typeof PHASES)[number];

export interface LessonProgress {
  primaryPhase: PrimaryPhase;
  completedPhases: PrimaryPhase[];
}

export interface WorkshopProgress {
  version: number;
  primaryPhase: PrimaryPhase;
  completedLessons: string[];
  lessons: Record<string, LessonProgress>;
}

const initialProgress = (): WorkshopProgress => ({
  version: PROGRESS_VERSION,
  primaryPhase: 'research',
  completedLessons: [],
  lessons: {},
});

const isPhase = (value: unknown): value is PrimaryPhase =>
  typeof value === 'string' && PHASES.includes(value as PrimaryPhase);

const normalizeLesson = (value: unknown): LessonProgress => {
  const lesson = value && typeof value === 'object' ? value as Partial<LessonProgress> : {};
  const completedPhases = Array.isArray(lesson.completedPhases)
    ? PHASES.filter((phase) => lesson.completedPhases?.includes(phase))
    : [];

  return {
    primaryPhase: isPhase(lesson.primaryPhase) ? lesson.primaryPhase : 'research',
    completedPhases,
  };
};

export const readProgress = (): WorkshopProgress => {
  const fallback = initialProgress();

  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return fallback;

    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const completedLessons = parsed.filter((item): item is string => typeof item === 'string');
      return { ...fallback, completedLessons };
    }

    if (!parsed || typeof parsed !== 'object') return fallback;
    const saved = parsed as Partial<WorkshopProgress>;
    const lessons = saved.lessons && typeof saved.lessons === 'object'
      ? Object.fromEntries(
          Object.entries(saved.lessons).map(([id, value]) => [id, normalizeLesson(value)]),
        )
      : {};

    return {
      version: PROGRESS_VERSION,
      primaryPhase: isPhase(saved.primaryPhase) ? saved.primaryPhase : 'research',
      completedLessons: Array.isArray(saved.completedLessons)
        ? saved.completedLessons.filter((item): item is string => typeof item === 'string')
        : [],
      lessons,
    };
  } catch {
    return fallback;
  }
};

export const writeProgress = (progress: WorkshopProgress): void => {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
      ...progress,
      version: PROGRESS_VERSION,
    }));
    window.dispatchEvent(new CustomEvent('agentic-workshop:progress'));
  } catch {
    // Progress remains available for the current page when storage is unavailable.
  }
};

export const updateProgress = (
  update: (progress: WorkshopProgress) => WorkshopProgress,
): WorkshopProgress => {
  const next = update(readProgress());
  writeProgress(next);
  return next;
};

export const resetProgress = (): void => {
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('agentic-workshop:progress'));
  } catch {
    // There is nothing else to reset when storage is unavailable.
  }
};
