'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Papers', href: '/papers' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'About', href: '/about' },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <a href="/" className="brand-mark" aria-label="Lili Wang home">
          <span className="brand-monogram">LW</span>
          <span className="hidden sm:block">
            <strong>Lili Wang</strong>
            <small>Research journal</small>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="min-h-11 min-w-11 rounded-full lg:hidden"
                  aria-label="Open navigation"
                />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent className="w-[min(24rem,90vw)] bg-background px-5 py-6">
              <SheetHeader className="px-0 pt-6">
                <SheetTitle className="font-heading text-2xl">Explore the journal</SheetTitle>
                <SheetDescription>Research directions, readings, and activity over time.</SheetDescription>
              </SheetHeader>
              <nav className="mt-5 flex flex-col" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<a href={item.href} className="mobile-nav-link" />}
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
