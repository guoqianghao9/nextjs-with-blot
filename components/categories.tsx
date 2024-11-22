"use client";

import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Brain,
  Swords,
  Puzzle,
  Rocket,
  GraduationCap,
} from "lucide-react";

const categories = [
  { name: "Action", icon: Swords },
  { name: "Puzzle", icon: Puzzle },
  { name: "Adventure", icon: Rocket },
  { name: "Educational", icon: GraduationCap },
  { name: "Strategy", icon: Brain },
  { name: "Sports", icon: Gamepad2 },
];

export function Categories() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.name}
              variant="outline"
              className="h-24 flex flex-col gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="w-6 h-6" />
              <span>{category.name}</span>
            </Button>
          );
        })}
      </div>
    </section>
  );
}