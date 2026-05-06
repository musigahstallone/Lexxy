import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="pt-32 pb-32 bg-brand-paper">
      <div class="max-w-7xl mx-auto px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <!-- Contact Info -->
          <div class="lg:col-span-5 space-y-16">
            <div class="max-w-md">
              <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-6 block">Contact Client Services</span>
              <h1 class="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10">
                Begin Your <br> <span class="italic font-normal">Consultation.</span>
              </h1>
              <p class="text-sm text-brand-muted leading-relaxed font-light">
                Professional, discreet, and decisive. We are here to listen and provide the legal leadership your situation demands.
              </p>
            </div>

            <div class="space-y-10">
              <div class="flex items-start gap-8 border-l border-brand-border pl-8">
                <div>
                  <h4 class="font-serif text-sm font-bold uppercase tracking-widest mb-2 italic">Headquarters</h4>
                  <p class="text-[12px] text-brand-muted leading-relaxed uppercase tracking-tighter">
                    1200 Avenue of the Americas,<br>
                    Suite 4500,<br>
                    New York, NY 10036
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-8 border-l border-brand-border pl-8">
                <div>
                  <h4 class="font-serif text-sm font-bold uppercase tracking-widest mb-2 italic">Direct Line</h4>
                  <p class="text-[12px] text-brand-muted leading-relaxed uppercase tracking-widest font-bold">
                    +1 (212) 555-0198
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-8 border-l border-brand-border pl-8">
                <div>
                  <h4 class="font-serif text-sm font-bold uppercase tracking-widest mb-2 italic">Inquiries</h4>
                  <p class="text-[12px] text-brand-muted leading-relaxed uppercase tracking-widest font-bold">
                    contact&#64;lexpartners.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Area -->
          <div class="lg:col-span-7 bg-white p-16 border border-brand-border shadow-sm">
             <div class="mb-12">
               <h3 class="font-serif text-2xl font-bold mb-4 uppercase tracking-widest">Case Review Request</h3>
               <p class="text-[11px] text-brand-muted uppercase tracking-widest font-bold">All communications are privileged and confidential.</p>
             </div>

             <form [formGroup]="contactForm" class="space-y-10">
               <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div class="space-y-2">
                   <label for="name" class="text-[9px] uppercase tracking-widest font-bold text-brand-muted">Full Name</label>
                   <input id="name" type="text" formControlName="name" class="w-full border-b border-brand-border py-4 focus:outline-none focus:border-brand-ink transition-colors font-serif text-base bg-transparent">
                 </div>
                 <div class="space-y-2">
                   <label for="email" class="text-[9px] uppercase tracking-widest font-bold text-brand-muted">Email Address</label>
                   <input id="email" type="email" formControlName="email" class="w-full border-b border-brand-border py-4 focus:outline-none focus:border-brand-ink transition-colors font-serif text-base bg-transparent">
                 </div>
               </div>

               <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div class="space-y-2">
                   <label for="phone" class="text-[9px] uppercase tracking-widest font-bold text-brand-muted">Phone Number</label>
                   <input id="phone" type="tel" formControlName="phone" class="w-full border-b border-brand-border py-4 focus:outline-none focus:border-brand-ink transition-colors font-serif text-base bg-transparent">
                 </div>
                 <div class="space-y-2">
                   <label for="area" class="text-[9px] uppercase tracking-widest font-bold text-brand-muted">Practice Area</label>
                   <select id="area" formControlName="area" class="w-full border-b border-brand-border py-4 focus:outline-none focus:border-brand-ink transition-colors font-serif text-base bg-transparent">
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
                 <label for="message" class="text-[9px] uppercase tracking-widest font-bold text-brand-muted">Preliminary Message</label>
                 <textarea id="message" formControlName="message" rows="4" class="w-full border-b border-brand-border py-4 focus:outline-none focus:border-brand-ink transition-colors font-serif text-base bg-transparent resize-none"></textarea>
               </div>

               <div class="pt-10">
                 <button type="submit" class="px-12 py-4 bg-brand-ink text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-slate-800 transition-all border border-brand-ink disabled:opacity-30" [disabled]="contactForm.invalid">
                    Submit Secure Request
                 </button>
               </div>
               
               <p class="text-[9px] text-brand-muted leading-relaxed italic pt-4">
                 Note: Submitting this form does not establish an attorney-client relationship. Please do not send sensitive or time-critical information via this form.
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
