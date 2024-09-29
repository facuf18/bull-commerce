import { Hero } from '@/components/hero/Hero';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className='container flex flex-col gap-2 w-lg mx-20'>
      <Hero />
      <Separator />
    </div>
  );
}
