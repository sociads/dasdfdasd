import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function VideoModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Canlı Demo İzleyin</Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl w-full p-0">
        <DialogHeader>
          <DialogTitle>Canlı Demo</DialogTitle>
        </DialogHeader>
        <div className="w-full h-0 pb-[56.25%] relative">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/rLZcOgA6_B0?rel=0&modestbranding=1&controls=1&showinfo=0"
            title="Sociads Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
