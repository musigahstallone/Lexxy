import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-50 bg-brand-paper/80 backdrop-blur-md border-b border-brand-ink/5">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a routerLink="/" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-brand-accent flex items-center justify-center text-white rounded-sm transform group-hover:rotate-45 transition-transform duration-500">
            <span class="font-serif text-xl font-bold">L</span>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="font-serif text-xl font-bold tracking-tight">LEX & PARTNERS</span>
            <span class="text-[10px] uppercase tracking-[0.2em] opacity-60">Legal Excellence</span>
          </div>
        </a>

        <nav class="hidden md:flex items-center gap-10">
          <a routerLink="/" routerLinkActive="text-brand-gold" [routerLinkActiveOptions]="{exact: true}" class="text-[13px] font-medium uppercase tracking-widest nav-link-underline">Home</a>
          <a routerLink="/practices" routerLinkActive="text-brand-gold" class="text-[13px] font-medium uppercase tracking-widest nav-link-underline">Practices</a>
          <a routerLink="/team" routerLinkActive="text-brand-gold" class="text-[13px] font-medium uppercase tracking-widest nav-link-underline">Team</a>
          <a routerLink="/contact" routerLinkActive="text-brand-gold" class="text-[13px] font-medium uppercase tracking-widest nav-link-underline">Contact</a>
        </nav>

        <div class="flex items-center gap-4">
          <a routerLink="/contact" class="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-brand-ink text-white text-[12px] uppercase tracking-widest font-semibold hover:bg-brand-accent transition-colors duration-300">
            Consultation
          </a>
          <button class="md:hidden text-brand-ink">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
