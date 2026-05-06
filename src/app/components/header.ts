import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-50 bg-white border-b border-brand-border">
      <div class="max-w-7xl mx-auto px-12 h-16 flex items-center justify-between">
        <a routerLink="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-brand-ink flex items-center justify-center text-white font-serif text-lg font-bold">L</div>
          <span class="font-serif text-[15px] font-semibold tracking-tight uppercase">Lex & Partners</span>
        </a>

        <nav class="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-widest font-medium text-brand-muted">
          <a routerLink="/" routerLinkActive="nav-link-active" [routerLinkActiveOptions]="{exact: true}" class="hover:text-brand-ink transition-colors">Home</a>
          <a routerLink="/practices" routerLinkActive="nav-link-active" class="hover:text-brand-ink transition-colors">Practices</a>
          <a routerLink="/team" routerLinkActive="nav-link-active" class="hover:text-brand-ink transition-colors">Team</a>
          <a routerLink="/contact" routerLinkActive="nav-link-active" class="hover:text-brand-ink transition-colors">Contact</a>
        </nav>

        <div class="flex items-center gap-4">
          <a routerLink="/contact" class="hidden lg:block px-5 py-2 border border-brand-ink text-brand-ink text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white transition-all">
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
