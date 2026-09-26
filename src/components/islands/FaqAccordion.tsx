import { useId, useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: readonly FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-btn-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`card overflow-hidden transition-colors ${isOpen ? 'border-ink-600 bg-ink-850/60' : ''}`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm text-ink-100 transition hover:text-white sm:px-6 sm:text-base"
              >
                <span className="font-medium">{item.question}</span>
                <span
                  className={`grid size-6 shrink-0 place-items-center rounded-full border border-ink-700 text-ink-400 transition-transform duration-300 ${isOpen ? 'rotate-180 border-brand-500/60 text-brand-300' : ''}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9.5 6 6 6-6" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-400 sm:px-6 sm:text-[15px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
