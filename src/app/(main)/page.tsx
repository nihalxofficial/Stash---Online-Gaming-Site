import AboutSection from "@/components/HomePage/AboutSection";
import CommunityCTA from "@/components/HomePage/CommunityCTA";
import HeroBanner from "@/components/HomePage/HeroBanner";
import LatestGames from "@/components/HomePage/LatestGames";
import MatchCountdown from "@/components/HomePage/MatchCountdown";
import Reviews from "@/components/HomePage/Reviews";
import SpecialFeatures from "@/components/HomePage/SpecialFeatures";
import { getGames } from "@/lib/api/games";

export default async function Home() {
  const response = await getGames();
  
  // Extracts the underlying games array from the response envelope safely
  const activeGames = response && Array.isArray(response.games) ? response.games : [];

  return (
    <>
      <HeroBanner />
      <AboutSection />
      <LatestGames initialGames={activeGames} />
      <MatchCountdown />
      <SpecialFeatures />
      <CommunityCTA />
      <Reviews />
    </>
  );
}