import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { BeforeAfter } from './components/BeforeAfter';
import { Delivery } from './components/Delivery';
import { Contact } from './components/Contact';
import { MobileCallBtn } from './components/MobileCallBtn';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 relative selection:bg-red-600 selection:text-white font-sans text-zinc-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <BeforeAfter />
        <Delivery />
        <Contact />
        <MobileCallBtn />
      </main>
    </div>
  );
}

export default App;