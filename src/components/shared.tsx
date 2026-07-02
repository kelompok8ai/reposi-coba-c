import { useEffect, useState } from 'react';

export function useAnimatedCounter(end: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((eased * end).toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, decimals]);

  return count;
}

export function SentimentBadge({ sentiment }: { sentiment: 'positive' | 'neutral' | 'negative' }) {
  const classes = {
    positive: 'badge-positive',
    neutral: 'badge-neutral',
    negative: 'badge-negative',
  };
  const labels = { positive: 'Positif', neutral: 'Netral', negative: 'Negatif' };
  return <span className={classes[sentiment]}>{labels[sentiment]}</span>;
}

export function TrendIndicator({ change }: { change: number }) {
  const isPositive = change >= 0;
  return (
    <span className={`text-xs font-medium ${isPositive ? 'text-success' : 'text-danger'}`}>
      {isPositive ? '↑' : '↓'} {Math.abs(change)}%
    </span>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
