import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
    </div>
  );
}
