import { Hero } from './components/Hero';
import { TheAnchor } from './components/TheAnchor';
import { VIPExclusives } from './components/VIPExclusives';
import { TheMasters } from './components/TheMasters';
import { Investment } from './components/Investment';
import { FinalInvitation } from './components/FinalInvitation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1d]">
      <Hero />
      <TheAnchor />
      <VIPExclusives />
      <TheMasters />
      <Investment />
      <FinalInvitation />
    </div>
  );
}
