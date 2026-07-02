import { SentimentBadge } from './shared';
import { tickerNews } from '../data/mockData';

export default function NewsTicker() {
  const doubled = [...tickerNews, ...tickerNews];

  return (
    <section className="bg-navy py-2.5 overflow-hidden">
      <div className="max-w-container mx-auto px-4 lg:px-6 flex items-center gap-4">
        <div className="shrink-0 flex items-center gap-2 bg-danger px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Live
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-ticker whitespace-nowrap">
            {doubled.map((item, i) => (
              <div key={`${item.id}-${i}`} className="inline-flex items-center gap-3 px-6 text-white/90 text-sm">
                <span className="text-gold font-mono text-xs">{item.time}</span>
                <span className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold">
                  {item.mediaLogo}
                </span>
                <span className="font-medium">{item.media}</span>
                <span className="text-white/50">|</span>
                <span className="text-gold/80 text-xs">{item.category}</span>
                <span className="text-white/50">|</span>
                <span>{item.headline}</span>
                <SentimentBadge sentiment={item.sentiment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
