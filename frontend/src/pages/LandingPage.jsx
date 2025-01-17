
import HeroSection from '../components/HeroSection/HeroSection';
import QuickFactsSection from '../components/QuickFactsSection/QuickFactsSection';
import ValueProposition from '../components/ValueProposition/ValueProposition';
import ExploreMoreSection from '../components/ExploreMoreSection/ExploreMoreSection';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Facts Section */}
      <QuickFactsSection />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Explore More Section */}
      <ExploreMoreSection />
    </>
  );
};

export default LandingPage;
