"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

interface GameCardProps {
  title: string;
  image: string;
  category: string;
  plays: number;
}

export function GameCard({ title, image, category, plays }: GameCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0 relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="w-full">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            <Badge variant="secondary">{category}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {plays.toLocaleString()} plays
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}