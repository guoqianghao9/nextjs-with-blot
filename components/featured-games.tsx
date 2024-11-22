"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const featuredGames = [
  {
    title: "Epic Space Battle",
    description: "Join the ultimate space warfare",
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=1200&q=80",
    category: "Action",
  },
  {
    title: "Mind Puzzle",
    description: "Challenge your brain with puzzles",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=1200&q=80",
    category: "Puzzle",
  },
  {
    title: "Adventure Quest",
    description: "Embark on an epic journey",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=1200&q=80",
    category: "Adventure",
  },
];

export function FeaturedGames() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Featured Games</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {featuredGames.map((game, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Badge className="mb-2">{game.category}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                  <p className="mb-4">{game.description}</p>
                  <Button className="gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Play Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}