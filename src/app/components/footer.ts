import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-brand-ink text-brand-paper pt-20 pb-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-brand-gold flex items-center justify-center text-brand-ink rounded-sm">
              <span class="font-serif text-lg font-bold">L</span>
            </div>
            <span class="font-serif text-xl font-bold tracking-tight">LEX & PARTNERS</span>
          </div>
          <p class="text-sm opacity-60 leading-relaxed max-w-xs">
            Providing exceptional legal counsel with integrity, expertise, and a commitment to our clients' success across global markets.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-ink transition-all">
               <mat-icon class="text-lg">facebook</mat-icon>
            </a>
            <a href="#" class="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-ink transition-all">
               <mat-icon class="text-lg">public</mat-icon>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-serif text-lg font-bold mb-8 uppercase tracking-widest text-brand-gold">Quick Links</h4>
          <ul class="space-y-4">
            <li><a routerLink="/" class="text-sm opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Home</a></li>
            <li><a routerLink="/practices" class="text-sm opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Our Practices</a></li>
            <li><a routerLink="/team" class="text-sm opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Legal Team</a></li>
            <li><a routerLink="/contact" class="text-sm opacity-60 hover:opacity-100 hover:text-brand-gold transition-all">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-lg font-bold mb-8 uppercase tracking-widest text-brand-gold">Contact</h4>
          <ul class="space-y-4 text-sm opacity-60">
            <li class="flex items-start gap-3">
              <mat-icon class="text-brand-gold scale-75">location_on</mat-icon>
              <span>1200 Avenue of the Americas,<br>New York, NY 10036</span>
            </li>
            <li class="flex items-center gap-3">
              <mat-icon class="text-brand-gold scale-75">phone</mat-icon>
              <span>+1 (212) 555-0198</span>
            </li>
            <li class="flex items-center gap-3">
              <mat-icon class="text-brand-gold scale-75">email</mat-icon>
              <span>contact&#64;lexpartners.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-serif text-lg font-bold mb-8 uppercase tracking-widest text-brand-gold">Newsletter</h4>
          <p class="text-sm opacity-60 mb-6 leading-relaxed">
            Stay informed with our latest legal insights and firm updates.
          </p>
          <form class="relative group">
            <input type="email" placeholder="Email Address" 
              class="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors">
            <button class="absolute right-2 top-2 bg-brand-gold text-brand-ink p-1.5 rounded-sm hover:bg-white transition-colors">
              <mat-icon class="text-sm">chevron_right</mat-icon>
            </button>
          </form>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[11px] uppercase tracking-widest opacity-40">
          © 2024 LEX & PARTNERS. ALL RIGHTS RESERVED.
        </p>
        <div class="flex gap-8 text-[11px] uppercase tracking-widest opacity-40">
          <a href="#" class="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" class="hover:opacity-100 transition-opacity">Terms of Service</a>
          <a href="#" class="hover:opacity-100 transition-opacity">Sitemap</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
