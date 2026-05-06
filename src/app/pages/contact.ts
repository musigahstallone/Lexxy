import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-40 pb-32 bg-brand-paper">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <!-- Contact Info -->
          <div class="lg:col-span-5 space-y-16">
            <div class="max-w-md">
              <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">Get in Touch</span>
              <h1 class="text-5xl md:text-7xl font-serif font-bold leading-[0.9] mb-10">
                Begin Your <br> <span class="italic font-medium text-brand-gold">Consultation</span>
              </h1>
              <p class="text-lg opacity-80 leading-relaxed font-light">
                Professional, discreet, and decisive. We are here to listen and provide the legal leadership your situation demands.
              </p>
            </div>

            <div class="space-y-10">
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-white flex items-center justify-center text-brand-gold shadow-sm">
                   <mat-icon>location_on</mat-icon>
                </div>
                <div>
                  <h4 class="font-serif text-xl font-bold uppercase tracking-wide mb-2 italic">Headquarters</h4>
                  <p class="text-sm opacity-60 leading-relaxed">
                    1200 Avenue of the Americas,<br>
                    Suite 4500,<br>
                    New York, NY 10036
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-white flex items-center justify-center text-brand-gold shadow-sm">
                   <mat-icon>phone</mat-icon>
                </div>
                <div>
                  <h4 class="font-serif text-xl font-bold uppercase tracking-wide mb-2 italic">Phone</h4>
                  <p class="text-sm opacity-60 leading-relaxed">
                    Main Office: +1 (212) 555-0198<br>
                    Emergencies: +1 (212) 555-0190
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-white flex items-center justify-center text-brand-gold shadow-sm">
                   <mat-icon>email</mat-icon>
                </div>
                <div>
                  <h4 class="font-serif text-xl font-bold uppercase tracking-wide mb-2 italic">Electronic</h4>
                  <p class="text-sm opacity-60 leading-relaxed">
                    contact&#64;lexpartners.com<br>
                    press&#64;lexpartners.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="lg:col-span-7 bg-white p-12 shadow-2xl shadow-brand-ink/5 border border-brand-ink/5">
             <div class="mb-12">
               <h3 class="font-serif text-3xl font-bold mb-4">Request a Case Review</h3>
               <p class="text-sm opacity-60">All communications are privileged and confidential.</p>
             </div>

              <form [formGroup]="contactForm" class="space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-2">
                    <label for="name" class="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                    <input id="name" type="text" formControlName="name" class="w-full border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-serif text-lg">
                  </div>
                  <div class="space-y-2">
                    <label for="email" class="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                    <input id="email" type="email" formControlName="email" class="w-full border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-serif text-lg">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-2">
                    <label for="phone" class="text-[10px] uppercase tracking-widest font-bold opacity-40">Phone Number</label>
                    <input id="phone" type="tel" formControlName="phone" class="w-full border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-serif text-lg">
                  </div>
                  <div class="space-y-2">
                    <label for="area" class="text-[10px] uppercase tracking-widest font-bold opacity-40">Practice Area</label>
                    <select id="area" formControlName="area" class="w-full border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-serif text-lg bg-transparent">
                       <option value="">Select an Area</option>
                       <option value="corporate">Corporate Law</option>
                       <option value="ip">Intellectual Property</option>
                       <option value="litigation">Civil Litigation</option>
                       <option value="family">Family & Private Wealth</option>
                       <option value="realestate">Real Estate Law</option>
                       <option value="criminal">Criminal Defense</option>
                    </select>
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="message" class="text-[10px] uppercase tracking-widest font-bold opacity-40">Preliminary Message</label>
                  <textarea id="message" formControlName="message" rows="4" class="w-full border-b border-brand-ink/10 py-3 focus:outline-none focus:border-brand-gold transition-colors font-serif text-lg resize-none"></textarea>
                </div>

               <div class="pt-6">
                 <button type="submit" class="w-full py-5 bg-brand-ink text-white text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-all duration-500 shadow-lg" [disabled]="contactForm.invalid">
                    Send Request Securely
                 </button>
               </div>
               
               <p class="text-[10px] opacity-40 leading-relaxed text-center italic">
                 Disclaimer: Submitting this form does not establish an attorney-client relationship. Please do not send sensitive or time-critical information via this form.
               </p>
             </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section Placeholder/Graphic -->
    <section class="h-96 relative overflow-hidden grayscale contrast-125">
       <div class="absolute inset-0 bg-brand-accent/20 z-10 pointer-events-none"></div>
       <img src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover" alt="City Map" referrerpolicy="no-referrer">
       <div class="absolute inset-0 flex items-center justify-center z-20">
          <div class="bg-brand-ink p-8 text-white flex items-center gap-4 shadow-2xl animate-pulse">
             <mat-icon class="text-brand-gold">place</mat-icon>
             <span class="font-serif text-xl tracking-wide">Lex & Partners Headquarters</span>
          </div>
       </div>
    </section>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    area: [''],
    message: ['', Validators.required]
  });
}
