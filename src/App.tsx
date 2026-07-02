import Header from './components/Header';
import Hero from './components/Hero';
import KPIStrip from './components/KPIStrip';
import NewsTicker from './components/NewsTicker';
import QuickFilter from './components/QuickFilter';
import FeaturedNews from './components/FeaturedNews';
import MediaIntelligence from './components/MediaIntelligence';
import ReputationAnalytics from './components/ReputationAnalytics';
import AIInsight from './components/AIInsight';
import IssueMonitoring from './components/IssueMonitoring';
import SentimentAnalysis from './components/SentimentAnalysis';
import TopicCloud from './components/TopicCloud';
import PressReleaseCenter from './components/PressReleaseCenter';
import MediaRelation from './components/MediaRelation';
import CorporateProgram from './components/CorporateProgram';
import ExecutiveCalendar from './components/ExecutiveCalendar';
import DocumentCenter from './components/DocumentCenter';
import KnowledgeCenter from './components/KnowledgeCenter';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <KPIStrip />
      <NewsTicker />
      <QuickFilter />

      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <FeaturedNews />
            <MediaIntelligence />
            <ReputationAnalytics />
            <AIInsight />
            <IssueMonitoring />
            <SentimentAnalysis />
            <TopicCloud />
            <PressReleaseCenter />
            <MediaRelation />
            <CorporateProgram />
            <ExecutiveCalendar />
            <DocumentCenter />
            <KnowledgeCenter />
          </main>
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
}
