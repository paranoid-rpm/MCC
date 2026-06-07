import { Footer } from "@/components/layout/footer";
import { PublicNav } from "@/components/layout/public-nav";
import { PageForestDepth } from "@/components/parallax/page-forest-depth";
import { SiteParallaxRuntime } from "@/components/parallax/site-parallax-runtime";
import { SmoothScrollProvider } from "@/components/parallax/smooth-scroll-provider";

export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <PageForestDepth />
      <SiteParallaxRuntime />
      <PublicNav />
      <div className="relative z-10">
        {children}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
