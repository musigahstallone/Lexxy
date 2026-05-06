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
    <section class="relative min-h-[85vh] flex items-center bg-brand-paper border-b border-brand-border">
      <div class="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-0 w-full h-full">
        <div class="lg:col-span-12 py-20 lg:py-32 space-y-12">
          <div class="space-y-6 max-w-4xl">
             <p class="text-[10px] uppercase tracking-[0.3em] text-brand-muted font-bold">Established 1984 &bull; New York &middot; London</p>
             <h1 class="text-5xl md:text-7xl font-serif leading-tight text-brand-ink font-semibold">
               Sophisticated <span class="italic font-normal">Legal Solutions</span> <br> for Complex Global Interests.
             </h1>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <p class="text-sm text-brand-muted leading-relaxed max-w-sm">
              Providing comprehensive counsel across multi-jurisdictional boundaries. Our firm specializes in protecting corporate integrity and individual legacy through meticulous litigation and strategic advisory.
            </p>
            <div class="flex gap-8">
               <div class="border-l border-brand-border pl-6">
                 <p class="text-3xl font-serif text-brand-ink">142</p>
                 <p class="text-[10px] uppercase tracking-wider text-brand-muted font-bold">Client Engagements</p>
               </div>
               <div class="border-l border-brand-border pl-6">
                 <p class="text-3xl font-serif text-brand-ink">38</p>
                 <p class="text-[10px] uppercase tracking-wider text-brand-muted font-bold">Senior Partners</p>
               </div>
            </div>
          </div>

          <div class="flex gap-4 pt-4">
             <a routerLink="/contact" class="px-6 py-3 border border-brand-ink text-brand-ink text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white transition-all">
                Client Services
             </a>
             <a routerLink="/practices" class="px-6 py-3 bg-brand-ink text-white text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-all">
                Practice Areas
             </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Bordered Grid Section -->
    <section class="bg-white border-b border-brand-border h-full">
       <div class="max-w-7xl mx-auto px-0 grid grid-cols-1 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-brand-border">
          @for (practice of highlightPractices; track practice.title) {
            <div class="p-16 flex flex-col justify-between hover:bg-slate-50 transition-colors group">
               <div>
                  <h3 class="text-sm font-serif font-bold text-brand-ink mb-4 uppercase tracking-widest">{{ practice.title }}</h3>
                  <p class="text-[12px] text-brand-muted leading-relaxed">
                    {{ practice.description }}
                  </p>
               </div>
               <a routerLink="/practices" class="text-[10px] uppercase font-bold tracking-widest hover:underline mt-10 flex items-center gap-2">
                 View Details <mat-icon class="scale-50">arrow_forward</mat-icon>
               </a>
            </div>
          }
          <div class="p-16 flex flex-col justify-between bg-brand-paper">
             <div>
                <h3 class="text-sm font-serif font-bold text-brand-ink mb-4 uppercase tracking-widest">Global Reach</h3>
                <p class="text-[12px] text-brand-muted leading-relaxed">
                  Navigating legal complexities across international borders with specialized offices in Zurich, London, and Singapore.
                </p>
             </div>
             <a routerLink="/team" class="text-[10px] uppercase font-bold tracking-widest hover:underline mt-10">Meet Our Team &rarr;</a>
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
