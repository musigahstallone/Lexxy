import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-brand-ink text-slate-400 py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-6 text-[10px] tracking-widest uppercase font-medium">
          <span class="text-white font-serif tracking-normal normal-case text-sm">Lex & Partners LLP</span>
          <span class="w-px h-3 bg-slate-700 hidden md:block"></span>
          <span class="hidden md:block">London / New York / Zurich</span>
          <span class="w-px h-3 bg-slate-700 hidden md:block"></span>
          <span>&copy; 2024 All Rights Reserved.</span>
        </div>
        <div class="flex items-center gap-8 text-[10px] tracking-widest uppercase font-semibold">
          <a routerLink="/contact" class="text-white hover:opacity-70 transition-opacity">Contact</a>
          <a href="#" class="hover:text-white transition-colors">Privacy</a>
          <a href="#" class="hover:text-white transition-colors">Regulatory</a>
          <a href="#" class="hover:text-white transition-colors">Client Login</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
