import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-practices',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-32 pb-20 bg-brand-paper">
      <div class="max-w-7xl mx-auto px-12">
        <div class="max-w-2xl mb-24">
          <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-6 block">Practice Specializations</span>
          <h1 class="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
            Sophisticated Counsel for <br> <span class="italic font-normal">Global Interests.</span>
          </h1>
          <p class="text-sm text-brand-muted leading-relaxed font-light max-w-lg">
            Our firm specializes in protecting corporate integrity and individual legacy through meticulous litigation and strategic advisory across multi-jurisdictional boundaries.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white border border-brand-border divide-x divide-y divide-brand-border">
          @for (area of practiceAreas; track area.title) {
            <div class="p-16 flex flex-col justify-between hover:bg-slate-50 transition-colors">
              <div>
                <h3 class="text-sm font-serif font-bold text-brand-ink mb-4 uppercase tracking-widest">{{ area.title }}</h3>
                <p class="text-[12px] text-brand-muted leading-relaxed mb-10 max-w-md">
                  {{ area.details }}
                </p>
                <div class="grid grid-cols-1 gap-4">
                  @for (service of area.services; track service) {
                    <div class="flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] font-bold text-brand-ink/70">
                      <div class="w-1 h-1 bg-brand-border rounded-full"></div>
                      {{ service }}
                    </div>
                  }
                </div>
              </div>
              <a href="#" class="text-[10px] uppercase font-bold tracking-tighter hover:underline mt-12 flex items-center gap-2">View Areas of Focus &rarr;</a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Simple CTA -->
    <section class="py-32 bg-white border-b border-brand-border">
       <div class="max-w-4xl mx-auto px-12 text-center space-y-10">
          <h2 class="text-3xl md:text-5xl font-serif font-bold">
            Secure Your <span class="italic font-normal">Legacy.</span>
          </h2>
          <p class="text-sm text-brand-muted max-w-sm mx-auto">
            Our Client Services team is available for confidential discussions regarding global representation.
          </p>
          <a routerLink="/contact" class="inline-block px-10 py-3 border border-brand-ink text-brand-ink text-[10px] uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white transition-all">
            Contact Client Services
          </a>
       </div>
    </section>
  `
})
export class PracticesComponent {
  practiceAreas = [
    {
      title: 'Corporate & Finance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      details: 'Comprehensive support for business formations, mergers, acquisitions, and cross-border financial transactions.',
      services: ['Mergers & Acquisitions', 'Commercial Lending', 'Securities Regulation']
    },
    {
      title: 'Real Estate Law',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      details: 'Navigating property acquisition, land use, zoning, and high-value commercial leasing disputes.',
      services: ['Commercial Leasing', 'Zoning & Land Use', 'Real Estate Financing']
    },
    {
      title: 'Employment Law',
      image: 'https://images.unsplash.com/photo-1454165833767-1306fbc90623?auto=format&fit=crop&q=80&w=800',
      details: 'Expert counsel on labor relations, workplace discrimination, executive contracts, and regulatory compliance.',
      services: ['Labor Relations', 'HR Compliance', 'Wrongful Termination']
    },
    {
      title: 'Family & Private Wealth',
      image: 'https://images.unsplash.com/photo-1581578731522-74550514b917?auto=format&fit=crop&q=80&w=800',
      details: 'Discreet and professional management of high-net-worth divorce, trusts, estates, and succession planning.',
      services: ['Estate Planning', 'Divorce Litigation', 'Asset Protection']
    },
    {
      title: 'Civil Litigation',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
      details: 'Aggressive representation in multi-district litigation, class actions, and personal injury cases.',
      services: ['Class Action', 'Personal Injury', 'Contract Disputes']
    },
    {
      title: 'Criminal Defense',
      image: 'https://images.unsplash.com/photo-1453723855331-7bc36248cc81?auto=format&fit=crop&q=80&w=800',
      details: 'Strategic defense against white-collar crimes, fraud investigations, and high-profile felony charges.',
      services: ['White Collar Defense', 'Fraud Investigations', 'Federal Charges']
    }
  ];
}
