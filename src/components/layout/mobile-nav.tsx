"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { KlaimosLogo } from "@/components/shared/klaimos-logo";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="text-white" />}>
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetTitle>
          <KlaimosLogo height={24} />
        </SheetTitle>
        <nav className="mt-8 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-all hover:bg-navy/5 hover:text-navy">
              {item.label}
            </a>
          ))}
          <div className="mt-4 border-t pt-4 flex justify-center">
            <InteractiveHoverButton
              text="Book appointment"
              href="#schedule"
              onClick={() => setOpen(false)}
              className="w-48 text-sm border-navy/20 bg-white text-navy"
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
