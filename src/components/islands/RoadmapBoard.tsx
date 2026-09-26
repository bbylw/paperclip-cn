import { useMemo, useState } from 'react';

export type RoadmapStatus = 'done' | 'active' | 'planned';

export interface RoadmapItem {
  status: RoadmapStatus;
  label: string;
}

interface Props {
  items: readonly RoadmapItem[];
}

type Filter = 'all' | RoadmapStatus;

const statusMeta: Record<
  RoadmapStatus,
  { label: string; chip: string; dot: string; text: string }
> = {
  done: { label: '已上线', chip: 'text-mint-300 ring-mint-500/30', dot: 'bg-mint-400', text: 'text-ink-300' },
  active: { label: '进行中', chip: 'text-brand-300 ring-brand-500/30', dot: 'bg-brand-400', text: 'text-ink-200' },
  planned: { label: '规划中', chip: 'text-ink-400 ring-ink-600/60', dot: 'bg-ink-500', text: 'text-ink-400' },
};

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: '全部' },
  { value: 'done', label: '已上线' },
  { value: 'active', label: '进行中' },
  { value: 'planned', label: '规划中' },
];

export default function RoadmapBoard({ items }: Props) {
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(() => {
    const acc: Record<Filter, number> = { all: items.length, done: 0, active: 0, planned: 0 };
    for (const item of items) acc[item.status] += 1;
    return acc;
  }, [items]);

  const visible = useMemo(
    () => (filter === 'all' ? items : items.filter((item) => item.status === filter)),
    [items, filter],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((option) => {
          const active = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs transition ${
                active
                  ? 'bg-brand-500 text-ink-950'
                  : 'border border-ink-700 text-ink-300 hover:border-ink-600 hover:bg-ink-850'
              }`}
            >
              {option.label}
              <span className={`font-mono text-[11px] ${active ? 'text-ink-950/70' : 'text-ink-500'}`}>
                {counts[option.value]}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-950 md:grid-cols-2">
        {visible.map((item) => {
          const meta = statusMeta[item.status];
          return (
            <li
              key={item.label}
              className="flex items-start gap-3 bg-ink-900 px-5 py-4 transition hover:bg-ink-850"
            >
              <span className={`mt-2 size-2 shrink-0 rounded-full ${meta.dot}`} aria-hidden="true" />
              <span className={`text-sm leading-relaxed ${meta.text}`}>{item.label}</span>
              <span
                className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[11px] ring-1 ${meta.chip}`}
              >
                {meta.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
