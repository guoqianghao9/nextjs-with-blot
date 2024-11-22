import { Suspense } from "react";
import { GameCard } from "@/components/game-card";
import { Categories } from "@/components/categories";
import { FeaturedGames } from "@/components/featured-games";
import { SearchBar } from "@/components/search-bar";
import { WalletButton } from "@/components/wallet-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Fun Games Portal
            </h1>
            <Suspense fallback={<div className="w-32 h-10 bg-muted animate-pulse rounded-md" />}>
              <WalletButton />
            </Suspense>
          </div>
          <SearchBar />
        </header>

        <Suspense fallback={<div className="h-96 bg-muted animate-pulse rounded-xl" />}>
          <FeaturedGames />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-muted animate-pulse rounded-lg" />}>
          <Categories />
        </Suspense>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Popular Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Suspense fallback={
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="aspect-video bg-muted animate-pulse rounded-lg" />
              ))
            }>
              <GameCard
                title="Space Adventure"
                image="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&q=80"
                category="Adventure"
                plays={1234}
              />
              <GameCard
                title="Pixel Runner"
                image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80"
                category="Action"
                plays={2345}
              />
              <GameCard
                title="Math Challenge"
                image="https://images.unsplash.com/photo-1632571401005-458e9d244591?w=500&q=80"
                category="Educational"
                plays={1567}
              />
              <GameCard
                title="Color Match"
                image="https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500&q=80"
                category="Puzzle"
                plays={3456}
              />
            </Suspense>
          </div>
        </section>
      </div>
    </main>
  );
}