import Client from '@/components/Client';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonial from '@/components/Testominial';
import WeAre from '@/components/WeAre';
import WhatsNew from '@/components/WhatsNew';

export default function Home() {
  return (
    <div>
      <Hero />
      <WeAre />
      <Services />
      <Testimonial />
      <WhatsNew />
      <ContactForm/>
      <Client/>
      <Footer className="mt-70"/>
    </div>
  );
}
