"use client";

import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

// ✅ Custom Hook to detect screen width (cleaner than window.innerWidth)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // check immediately
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

export default function WaitlistForm({ open, setOpen }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isDesktop = useIsDesktop();

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can connect this to a backend or email API here
    setSubmitted(true);

    // Auto-close after 3 seconds
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const form = (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <Input
        placeholder="Your name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        required
      />
      <Input
        placeholder="Your email"
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        required
      />
      <Textarea
        placeholder="Your message (optional)"
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />
      <Button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white"
      >
        Join Waitlist
      </Button>
    </form>
  );

  const successMessage = (
    <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
      <CheckCircle2 className="text-green-600 w-12 h-12" />
      <h2 className="text-lg font-semibold">🎉 Congratulations!</h2>
      <p className="text-gray-600">You’ve been added to the waitlist!</p>
    </div>
  );

  // ✅ Render different component for mobile/desktop
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-8 flex flex-col items-center justify-center">
          <DialogTitle className="text-xl font-semibold mb-2">
            Join Waitlist
          </DialogTitle>
          {!submitted ? form : successMessage}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="p-6">
        <SheetTitle className="text-lg font-semibold mb-2">
          Join Waitlist
        </SheetTitle>
        {!submitted ? form : successMessage}
      </SheetContent>
    </Sheet>
  );
}
