import { useState } from 'react';
import { quickFilters } from '../data/mockData';

export default function QuickFilter() {
  const [active, setActive] = useState('Hari Ini');

  return (
    <section className="py-4 border-b border-border bg-surface sticky top-[72px] z-40">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-1">
          {quickFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                active === filter
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-background text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
