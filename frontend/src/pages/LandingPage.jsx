
import HeroSection from '../components/HeroSection/HeroSection';
import QuickFactsSection from '../components/QuickFactsSection/QuickFactsSection';
import ValueProposition from '../components/ValueProposition/ValueProposition';
import ExploreMoreSection from '../components/ExploreMoreSection/ExploreMoreSection';
import ProvenTrackRecord from '../components/ProvenTrackRecord/ProvenTrackRecord';
const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Facts Section */}
      <QuickFactsSection />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Proven Track Record*/}
      <ProvenTrackRecord/>

      {/* Explore More Section */}
      <ExploreMoreSection />
    </>
  );
};

export default LandingPage;
