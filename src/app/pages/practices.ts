import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-practices',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-40 pb-20 bg-brand-paper">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-3xl mb-24">
          <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">Areas of Specialization</span>
          <h1 class="text-5xl md:text-7xl font-serif font-bold leading-[0.9] mb-10">
            Comprehensive <br> <span class="italic font-medium text-brand-gold">Legal Strategies</span>
          </h1>
          <p class="text-lg opacity-80 leading-relaxed font-light">
            Diverse expertise, singular focus. We provide specialized legal counsel across various sectors, ensuring tailored representation for every client's unique needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          @for (area of practiceAreas; track area.title) {
            <div class="group">
              <div class="relative mb-8 overflow-hidden aspect-video bg-brand-ink/5 rounded-sm">
                <img [src]="area.image" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="{{area.title}}" referrerpolicy="no-referrer">
                <div class="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-px bg-brand-gold"></div>
                  <h3 class="text-2xl font-serif font-bold">{{ area.title }}</h3>
                </div>
                <p class="text-sm opacity-60 leading-relaxed min-h-[80px]">
                  {{ area.details }}
                </p>
                <ul class="space-y-2 pt-4">
                  @for (service of area.services; track service) {
                    <li class="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold opacity-80">
                      <mat-icon class="text-[12px] h-[12px] w-[12px] text-brand-gold">check</mat-icon>
                      {{ service }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-32 bg-brand-ink text-brand-paper">
       <div class="max-w-5xl mx-auto px-6 text-center space-y-10">
          <h2 class="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Facing a <span class="italic font-normal text-brand-gold">Legal Challenge?</span>
          </h2>
          <p class="text-lg opacity-60 max-w-2xl mx-auto pb-4">
            Our team is ready to provide the expertise and advocacy you need. Contact us today for a confidential consultation.
          </p>
          <a href="mailto:contact&#64;lexpartners.com" class="inline-block px-12 py-5 bg-brand-gold text-brand-ink text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300">
            Request Consultation
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
