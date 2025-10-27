"use client";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export default function WaitlistForm({ open, setOpen }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to your backend or email API here
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000); // auto-close after 3 seconds
  };

  const form = (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <Input
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <Input
        placeholder="Your email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <Textarea
        placeholder="Your message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
        Join Waitlist
      </Button>
    </form>
  );

  const successMessage = (
    <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
      <CheckCircle2 className="text-green-600 w-12 h-12" />
      <h2 className="text-lg font-semibold">Congratulations 🎉</h2>
      <p className="text-gray-600">You’ve been added to the waitlist!</p>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-[85%] sm:w-[400px] p-6">
            <h2 className="text-xl font-semibold">Join Waitlist</h2>
            {!submitted ? form : successMessage}
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Modal */}
      <div className="hidden md:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md p-8">
            <h2 className="text-xl font-semibold">Join Waitlist</h2>
            {!submitted ? form : successMessage}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
