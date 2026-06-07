import SmoothScroll from '@/components/SmoothScroll';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsStrip from '@/components/StatsStrip';
import NadanalayasSection from '@/components/NadanalayasSection';
import PerformancesSection from '@/components/PerformancesSection';
import TimelineSection from '@/components/TimelineSection';
import GallerySection from '@/components/GallerySection';
import CountdownSection from '@/components/CountdownSection';
import RegisterSection from '@/components/RegisterSection';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <div className="divider" />
        <AboutSection />
        <StatsStrip />
        <NadanalayasSection />
        <div className="divider" />
        <PerformancesSection />
        <div className="divider" />
        <TimelineSection />
        <CountdownSection />
        <GallerySection />
        <div className="divider" />
        <RegisterSection />
        <ContactFooter />
      </main>
    </SmoothScroll>
  );
}
