"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Puzzle() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Mate‑in‑One Puzzle</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Solve the puzzle: deliver checkmate in one move.
        </p>
        <Button variant="outline" className="w-full">
          Show Solution
        </Button>
      </CardContent>
    </Card>
  );
}
