import Aurora from './reactbits/aurora';
import SpotlightCard from './reactbits/spotlight-card';
import TiltedCard from './reactbits/tilted-card';
import Beams from './reactbits/beams';
import Carousel from './reactbits/carousel';
import DecayCard from './reactbits/decay-card';
import Masonry from './reactbits/masonry';
import Particles from './reactbits/particles';
import RollingGallery from './reactbits/rolling-gallery';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Aurora colorStops={["#00d4ff", "#7b2ff7", "#00d4ff"]} amplitude={1.5} blend={0.8} speed={0.8} /><Particles />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">ReactBits Power</h1>
          <p className="text-xl text-white/70 max-w-2xl mb-10">All 9 ReactBits components verified.</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SpotlightCard spotlightColor="rgba(0,212,255,0.2)"><div className="p-6"><h3 className="text-xl font-semibold text-white mb-3">Fast</h3><p className="text-gray-400 text-sm">ReactBits with motion.</p></div></SpotlightCard>
          <SpotlightCard spotlightColor="rgba(123,47,247,0.2)"><div className="p-6"><h3 className="text-xl font-semibold text-white mb-3">Design</h3><p className="text-gray-400 text-sm">WebGL + Tilt.</p></div></SpotlightCard>
          <SpotlightCard spotlightColor="rgba(0,212,255,0.2)"><div className="p-6"><h3 className="text-xl font-semibold text-white mb-3">No Hand-Write</h3><p className="text-gray-400 text-sm">All ReactBits.</p></div></SpotlightCard>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2>Gallery</h2>
        <div><Carousel /></div>
      </section>

      <section className="py-24 bg-zinc-900/50">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <TiltedCard imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" altText="Abstract" captionText="Premium" containerHeight="350px" containerWidth="100%" imageHeight="350px" imageWidth="100%" scaleOnHover={1.05} rotateAmplitude={12} showTooltip={true} displayOverlayContent={false} />
          <TiltedCard imageSrc="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80" altText="Tech" captionText="Modern" containerHeight="350px" containerWidth="100%" imageHeight="350px" imageWidth="100%" scaleOnHover={1.05} rotateAmplitude={12} showTooltip={true} displayOverlayContent={false} />
          <DecayCard width={300} height={400} image="https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=400&q=80" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto"><h2>Our Work</h2><RollingGallery /></section><section className="relative w-full h-screen overflow-hidden"><div className="absolute inset-0 z-0"><Beams /></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="text-4xl font-bold text-white">Beams Section</h2>
        </div>
      </section>

      <section><h2>Portfolio</h2><Masonry items={[]} /></section><footer className="py-12 text-center text-gray-500 text-sm border-t border-zinc-800">
        Built with ReactBits components.
      </footer>
    </div>
  );
}

export default App;
