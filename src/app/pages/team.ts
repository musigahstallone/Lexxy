import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-40 pb-32 bg-brand-paper">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
          <div class="max-w-2xl">
            <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">Our Legal Team</span>
            <h1 class="text-5xl md:text-7xl font-serif font-bold leading-[0.9] mb-8">
              Decades of <span class="italic font-medium text-brand-gold">Collective</span> Expertise
            </h1>
            <p class="text-lg opacity-80 leading-relaxed font-light">
              Our partners and associates bring a wealth of experience from prestigious backgrounds, united by a shared commitment to legal excellence.
            </p>
          </div>
          <div class="hidden lg:block text-right">
             <div class="text-brand-gold font-serif italic text-4xl mb-4">"The strength of the firm is in our people."</div>
             <div class="text-[10px] uppercase tracking-widest font-bold opacity-60">Lex & Partners Core Value</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          @for (member of teamMembers; track member.name) {
            <div class="group">
              <div class="aspect-[3/4] overflow-hidden mb-6 rounded-sm border border-brand-ink/5 relative">
                 <img [src]="member.image" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105" alt="{{member.name}}" referrerpolicy="no-referrer">
                 <div class="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div class="space-y-1">
                 <h3 class="text-xl font-serif font-bold">{{ member.name }}</h3>
                 <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">{{ member.role }}</p>
                 <div class="pt-4 h-px bg-brand-ink/10 group-hover:bg-brand-gold group-hover:w-full w-8 transition-all duration-500"></div>
                 <p class="text-sm opacity-60 italic pt-4">{{ member.specialty }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Professional Backgrounds -->
    <section class="py-32 bg-white border-y border-brand-ink/5">
       <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div class="space-y-10">
             <h2 class="text-4xl md:text-5xl font-serif font-bold">Prestigious <br> Academic <span class="italic font-normal">Foundations</span></h2>
             <p class="text-lg opacity-80 font-light leading-relaxed">
               Our attorneys are graduates of some of the world's finest law schools, bringing diverse academic perspectives to every case.
             </p>
             <div class="flex flex-wrap gap-x-12 gap-y-8 opacity-40 grayscale">
                <span class="font-serif text-2xl font-bold">HARVARD</span>
                <span class="font-serif text-2xl font-bold">YALE</span>
                <span class="font-serif text-2xl font-bold">OXFORD</span>
                <span class="font-serif text-2xl font-bold">COLUMBIA</span>
             </div>
          </div>
          <div class="bg-brand-paper p-12 rounded-sm space-y-8">
             <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-brand-ink flex items-center justify-center text-brand-gold font-bold">01</div>
                <div>
                   <h4 class="font-serif text-xl font-bold mb-2 uppercase tracking-wide">Global Insights</h4>
                   <p class="text-sm opacity-60">Over 60% of our team has international legal experience, providing multicultural perspectives.</p>
                </div>
             </div>
             <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-brand-ink flex items-center justify-center text-brand-gold font-bold">02</div>
                <div>
                   <h4 class="font-serif text-xl font-bold mb-2 uppercase tracking-wide">Specialized focus</h4>
                   <p class="text-sm opacity-60">Attorneys are strictly focused on their niches, ensuring deep expertise over generalist approaches.</p>
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
