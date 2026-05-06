import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-32 pb-32 bg-brand-paper">
      <div class="max-w-7xl mx-auto px-12">
        <div class="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
          <div class="max-w-xl">
            <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-6 block">Our Legal Team</span>
            <h1 class="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
              Strategic <span class="italic font-normal">Advocacy</span> by Senior <span class="italic font-normal">Partners.</span>
            </h1>
            <p class="text-sm text-brand-muted leading-relaxed font-light">
              Our partners bring a wealth of experience from prestigious global backgrounds, united by a shared commitment to meticulous legal excellence and client legacy.
            </p>
          </div>
          <div class="hidden lg:block text-right">
             <div class="text-brand-ink font-serif italic text-3xl mb-4">"Leadership is protecting the integrity of the law."</div>
             <div class="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Lex & Partners Core Value</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-brand-border divide-x divide-y md:divide-y-0 divide-brand-border">
          @for (member of teamMembers; track member.name) {
            <div class="p-10 flex flex-col group hover:bg-slate-50 transition-colors">
              <div class="aspect-[3/4] overflow-hidden mb-8 border border-brand-border grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700">
                 <img [src]="member.image" class="w-full h-full object-cover" alt="{{member.name}}" referrerpolicy="no-referrer">
              </div>
              <div class="space-y-2">
                 <h3 class="text-sm font-serif font-bold tracking-widest uppercase">{{ member.name }}</h3>
                 <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted">{{ member.role }}</p>
                 <p class="text-[11px] text-brand-muted italic pt-4 leading-relaxed">{{ member.specialty }}</p>
              </div>
              <a href="#" class="text-[9px] uppercase font-bold tracking-widest hover:underline mt-12 block">Full Biography &rarr;</a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Professional Foundations -->
    <section class="py-32 bg-white border-y border-brand-border">
       <div class="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div class="space-y-10">
             <h2 class="text-3xl md:text-5xl font-serif font-bold">Academic <br/> <span class="italic font-normal text-brand-muted">Foundations</span></h2>
             <p class="text-sm text-brand-muted font-light leading-relaxed max-w-md">
               Our attorneys are graduates of the world's most rigorous legal institutions, ensuring a high-level theoretical framework for every practical challenge.
             </p>
             <div class="flex flex-wrap gap-x-12 gap-y-8 opacity-20 contrast-0 grayscale">
                <span class="font-serif text-xl font-bold">HARVARD</span>
                <span class="font-serif text-xl font-bold">YALE</span>
                <span class="font-serif text-xl font-bold">OXFORD</span>
                <span class="font-serif text-xl font-bold">COLUMBIA</span>
             </div>
          </div>
          <div class="bg-brand-paper p-16 space-y-12 border border-brand-border">
             <div class="flex items-start gap-8">
                <div class="text-brand-ink font-serif text-2xl font-bold border-b border-brand-ink">01</div>
                <div class="space-y-2">
                   <h4 class="font-serif text-sm font-bold uppercase tracking-widest">Multi-Jurisdictional</h4>
                   <p class="text-[12px] text-brand-muted leading-relaxed">Attorneys qualified in multiple international jurisdictions, primarily serving global financial capitals.</p>
                </div>
             </div>
             <div class="flex items-start gap-8">
                <div class="text-brand-ink font-serif text-2xl font-bold border-b border-brand-ink">02</div>
                <div class="space-y-2">
                   <h4 class="font-serif text-sm font-bold uppercase tracking-widest">Industry Specific</h4>
                   <p class="text-[12px] text-brand-muted leading-relaxed">Deep specialization within high-stakes markets ensures that no nuance of your industry is overlooked.</p>
                </div>
             </div>
          </div>
       </div>
    </section>
  `
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Marcus Thorne',
      role: 'Founding Partner',
      specialty: 'Corporate Strategy & International Law',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Eleanor Vance',
      role: 'Senior Partner',
      specialty: 'Intellectual Property & Patents',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Julian Blackwood',
      role: 'Partner',
      specialty: 'Complex Civil Litigation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Managing Director',
      specialty: 'Employment & Labor Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
    },
    {
       name: 'David Rosetti',
       role: 'Senior Associate',
       specialty: 'Real Estate & Land Use',
       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800'
    },
    {
       name: 'Amara Okafor',
       role: 'Associate',
       specialty: 'Family Law & Private Wealth',
       image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800'
    },
    {
       name: 'Thomas Wu',
       role: 'Associate',
       specialty: 'Criminal Defense & White Collar',
       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'
    },
    {
       name: 'Isabella Conti',
       role: 'Legal Counsel',
       specialty: 'International Arbitration',
       image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
    }
  ];
}
