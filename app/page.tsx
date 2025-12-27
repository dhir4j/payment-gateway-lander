'use client';

import Navbar from '@/components/layout/Navbar';
import FooterNew from '@/components/layout/FooterNew';
import HeroNew from '@/components/sections/HeroNew';
import FeaturesNew from '@/components/sections/FeaturesNew';
import HowItWorks from '@/components/sections/HowItWorks';
import PaymentMethods from '@/components/sections/PaymentMethods';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroNew />
      <PaymentMethods />
      <FeaturesNew />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FooterNew />
    </main>
  );
}
