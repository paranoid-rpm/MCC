import { HeroParallax } from "@/components/parallax/hero-parallax";
import {
  AssuranceStrip,
  BreedAndBreederBlocks,
  HowItWorks,
  PopularKittensIntro,
  ReviewsAndFaq,
  TrustBadges
} from "@/components/sections/home-sections";
import { NearbyKittensSection } from "@/components/geo/nearby-kittens-section";
import { allKittens } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main>
      <HeroParallax />
      <TrustBadges />
      <NearbyKittensSection kittens={allKittens} compact />
      <PopularKittensIntro />
      <HowItWorks />
      <AssuranceStrip />
      <BreedAndBreederBlocks />
      <ReviewsAndFaq />
    </main>
  );
}
