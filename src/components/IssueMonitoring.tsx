import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { issues } from '../data/mockData';
import { SectionHeader } from './shared';

const severityColors = {
  Low: 'bg-emerald-50 text-success',
  Medium: 'bg-orange-50 text-warning',
  High: 'bg-red-50 text-danger',
  Critical: 'bg-red-100 text-red-800',
};

const statusColors = {
  Monitoring: 'bg-blue-50 text-primary',
  Investigating: 'bg-orange-50 text-warning',
  Escalated: 'bg-red-50 text-danger',
  Resolved: 'bg-emerald-50 text-success',
};

const trendIcons = {
  up: <TrendingUp size={14} className="text-success" />,
  down: <TrendingDown size={14} className="text-danger" />,
  stable: <Minus size={14} className="text-text-secondary" />,
};

export default function IssueMonitoring() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="max-w-container mx-auto px-4 lg:px-6">
        <SectionHeader title="Issue Monitoring" subtitle="Pemantauan isu strategis dan manajemen reputasi" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-background border-b border-border">
                  {['Issue', 'Category', 'Severity', 'Owner', 'Media', 'Mention', 'Trend', 'Status', 'SLA', 'Last Update'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {issues.map((item) => (
                  <tr key={item.issue} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-navy whitespace-nowrap">{item.issue}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.category}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${severityColors[item.severity]}`}>{item.severity}</span>
                    </td>
                    <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{item.owner}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs">{item.media}</td>
                    <td className="px-4 py-3 font-semibold">{item.mention}</td>
                    <td className="px-4 py-3">{trendIcons[item.trend]}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[item.status]}`}>{item.status}</span>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{item.sla}</td>
                    <td className="px-4 py-3 text-text-secondary text-xs whitespace-nowrap">{item.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
