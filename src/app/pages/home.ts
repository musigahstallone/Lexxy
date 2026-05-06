import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { animate } from 'motion';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <!-- Background Graphic -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 skew-x-[-15deg] translate-x-20"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div class="space-y-10 animate-fade-in">
          <div class="space-y-4">
            <span class="text-[12px] uppercase tracking-[0.4em] font-semibold text-brand-gold opacity-80">Est. 1984 — New York</span>
            <h1 class="text-6xl md:text-8xl leading-[0.9] font-serif font-bold tracking-tight">
              Sophisticated <br> <span class="italic text-brand-gold font-medium">Counsel</span> for a <br> Changing World
            </h1>
          </div>
          
          <p class="text-lg opacity-80 max-w-lg leading-relaxed font-light">
            Lex & Partners provides elite legal representation across corporate, intellectual property, and international law, helping visionaries navigate complex global landscapes.
          </p>

          <div class="flex flex-wrap gap-6 pt-4">
            <a routerLink="/contact" class="px-8 py-4 bg-brand-ink text-white text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-all duration-300 shadow-xl shadow-brand-ink/10">
              Get Started
            </a>
            <a routerLink="/practices" class="px-8 py-4 border border-brand-ink/20 text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-brand-ink hover:text-white transition-all duration-300">
              Our Expertise
            </a>
          </div>

          <div class="grid grid-cols-3 gap-10 pt-16 border-t border-brand-ink/10">
            <div>
              <div class="text-3xl font-serif font-bold mb-1">40+</div>
              <div class="text-[10px] uppercase tracking-widest opacity-60">Years Excellence</div>
            </div>
            <div>
              <div class="text-3xl font-serif font-bold mb-1">200+</div>
              <div class="text-[10px] uppercase tracking-widest opacity-60">Legal Experts</div>
            </div>
            <div>
              <div class="text-3xl font-serif font-bold mb-1">15</div>
              <div class="text-[10px] uppercase tracking-widest opacity-60">Global Offices</div>
            </div>
          </div>
        </div>

        <div class="hidden lg:block relative">
          <div class="aspect-[4/5] bg-brand-ink overflow-hidden rounded-sm relative group">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
              alt="Law Firm Office" 
              class="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerpolicy="no-referrer">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-10 left-10 right-10">
              <div class="w-12 h-px bg-brand-gold mb-6"></div>
              <p class="font-serif italic text-2xl text-white">"Justice is the constant and perpetual will to allu everyone their due."</p>
              <p class="text-[10px] uppercase tracking-widest text-brand-gold mt-4 font-bold">— Ulpian</p>
            </div>
          </div>
          <!-- Decorative element -->
          <div class="absolute -bottom-10 -right-10 w-40 h-40 border border-brand-gold/30 -z-10 rounded-sm"></div>
        </div>
      </div>
    </section>

    <!-- Services Highlights -->
    <section class="py-32 bg-white relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div class="space-y-6">
            <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Our Expertise</span>
            <h2 class="text-4xl md:text-5xl font-serif font-bold leading-tight max-w-xl">
              Tailored Legal Solutions for <span class="italic font-normal">Complex Challenges</span>
            </h2>
          </div>
          <a routerLink="/practices" class="group flex items-center gap-3 text-[12px] uppercase tracking-widest font-bold">
            View All Practices 
            <mat-icon class="text-brand-gold group-hover:translate-x-2 transition-transform">arrow_forward</mat-icon>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (practice of highlightPractices; track practice.title) {
            <div class="p-10 border border-brand-ink/5 hover:border-brand-gold transition-all duration-500 group relative overflow-hidden">
               <div class="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
               <mat-icon class="text-4xl text-brand-accent mb-8">{{ practice.icon }}</mat-icon>
               <h3 class="text-2xl font-serif font-bold mb-4">{{ practice.title }}</h3>
               <p class="text-sm opacity-60 leading-relaxed mb-8">
                 {{ practice.description }}
               </p>
               <a routerLink="/practices" class="text-[11px] uppercase tracking-widest font-bold border-b border-brand-gold pb-1">Learn More</a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-32 bg-brand-paper">
       <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
         <div class="lg:col-span-5 relative">
            <div class="aspect-[3/4] rounded-sm overflow-hidden border border-brand-ink/10">
               <img src="https://images.unsplash.com/photo-1544717297-fa154da097c1?auto=format&fit=crop&q=80&w=1000" 
                class="w-full h-full object-cover grayscale" alt="Attorney" referrerpolicy="no-referrer">
            </div>
            <div class="absolute -bottom-10 -left-10 bg-brand-ink p-10 text-white max-w-xs shadow-2xl">
               <p class="text-lg font-serif italic mb-4">"We don't just solve legal problems; we protect our clients' future."</p>
               <p class="text-[11px] uppercase tracking-widest text-brand-gold font-bold">— Marcus Thorne, Founding Partner</p>
            </div>
         </div>
         <div class="lg:col-span-7 space-y-10">
            <div class="space-y-6">
              <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Why Lex & Partners</span>
              <h2 class="text-4xl md:text-6xl font-serif font-bold leading-tight">
                A Legacy of <span class="italic font-normal">Integrity</span> and <span class="italic font-normal">Victory</span>
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="space-y-4">
                <h4 class="font-serif text-xl font-bold italic">Strategy First</h4>
                <p class="text-sm opacity-60 leading-relaxed">
                  Every case begins with a deep analysis of your goals, ensuring our legal tactics align with your broader ambitions.
                </p>
              </div>
              <div class="space-y-4">
                <h4 class="font-serif text-xl font-bold italic">Global Reach</h4>
                <p class="text-sm opacity-60 leading-relaxed">
                  With offices in key financial hubs, we provide seamless representation across borders and jurisdictions.
                </p>
              </div>
              <div class="space-y-4">
                <h4 class="font-serif text-xl font-bold italic">Tech Driven</h4>
                <p class="text-sm opacity-60 leading-relaxed">
                  We utilize advanced legal tech for discovery and research, giving our clients a precision edge in every dispute.
                </p>
              </div>
              <div class="space-y-4">
                <h4 class="font-serif text-xl font-bold italic">Unwavering Ethics</h4>
                <p class="text-sm opacity-60 leading-relaxed">
                  Our reputation for integrity is our most valuable asset, ensuring our word carries weight in and out of the courtroom.
                </p>
              </div>
            </div>
            <a routerLink="/team" class="inline-block px-10 py-4 bg-brand-accent text-white text-[12px] uppercase tracking-widest font-bold hover:shadow-lg transition-all">Meet Our Firm</a>
         </div>
       </div>
    </section>
  `
})
export class HomeComponent implements AfterViewInit {
  highlightPractices = [
    {
      title: 'Corporate & M&A',
      icon: 'business',
      description: 'Navigating domestic and international transactions with precision and strategic foresight.'
    },
    {
      title: 'Intellectual Property',
      icon: 'copyright',
      description: 'Protecting your most valuable innovations through robust patent, trademark, and litigation strategies.'
    },
    {
      title: 'Dispute Resolution',
      icon: 'gavel',
      description: 'Aggressive yet professional advocacy in arbitration, mediation, and courtroom litigation.'
    }
  ];

  ngAfterViewInit() {
    const el = document.querySelector('.animate-fade-in');
    if (el) {
       animate(el, { opacity: [0, 1], y: [20, 0] }, { duration: 1, ease: 'easeOut' });
    }
  }
}
