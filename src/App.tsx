import { useDirectorSchedule } from './hooks/useDirectorSchedule';
import { useReminders } from './hooks/useReminders';
import Header from './components/Header';
import Hero from './components/Hero';
import KPIStrip from './components/KPIStrip';
import NewsTicker from './components/NewsTicker';
import QuickFilter from './components/QuickFilter';
import ReminderBanner from './components/ReminderBanner';
import FeaturedNews from './components/FeaturedNews';
import MediaIntelligence from './components/MediaIntelligence';
import ReputationAnalytics from './components/ReputationAnalytics';
import AIInsight from './components/AIInsight';
import IssueMonitoring from './components/IssueMonitoring';
import SentimentAnalysis from './components/SentimentAnalysis';
import DirectorDinasSchedule from './components/DirectorDinasSchedule';
import PressReleaseCenter from './components/PressReleaseCenter';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const { schedules, addSchedule, updateSchedule, deleteSchedule } = useDirectorSchedule();
  const {
    activeReminders,
    upcomingSchedules,
    notificationPermission,
    requestNotificationPermission,
    dismissReminder,
  } = useReminders(schedules);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <KPIStrip />
      <NewsTicker />
      <ReminderBanner
        reminders={activeReminders}
        notificationPermission={notificationPermission}
        onRequestPermission={requestNotificationPermission}
        onDismiss={dismissReminder}
      />
      <QuickFilter />

      <div className="max-w-container mx-auto px-4 lg:px-6">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0">
            <DirectorDinasSchedule
              schedules={schedules}
              onAdd={addSchedule}
              onUpdate={updateSchedule}
              onDelete={deleteSchedule}
            />
            <FeaturedNews />
            <MediaIntelligence />
            <ReputationAnalytics />
            <AIInsight />
            <IssueMonitoring />
            <SentimentAnalysis />
            <PressReleaseCenter />
          </main>
          <Sidebar upcomingDinas={upcomingSchedules} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
