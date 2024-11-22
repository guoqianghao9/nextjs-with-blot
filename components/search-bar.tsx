"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="search"
        placeholder="Search games..."
        className="pl-10 bg-background/50 backdrop-blur-sm"
      />
    </div>
  );
}