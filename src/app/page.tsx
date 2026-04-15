"use client";

import { useRef } from "react";

const DISCORD_LINK = "https://discord.gg/aG3rdPuV";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const muteIconRef = useRef<HTMLSpanElement>(null);

  function toggleMute() {
    const video = videoRef.current;
    const icon = muteIconRef.current;
    if (!video || !icon) return;
    if (video.muted) {
      video.muted = false;
      icon.textContent = "volume_up";
    } else {
      video.muted = true;
      icon.textContent = "volume_off";
    }
  }
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl bg-neutral-900/50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <a
            href="/"
            aria-label="Vynlo home"
            className="text-2xl font-bold tracking-tighter text-white font-display"
          >
            V<span className="text-accent">y</span>nlo
          </a>
          <div className="hidden md:flex items-center gap-8 font-display font-bold text-sm tracking-tight" />
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00FF85] text-[#003919] px-5 py-2.5 rounded-lg text-sm font-bold scale-95 active:scale-90 transition-transform hover:opacity-90 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join the Community
          </a>
        </div>
      </nav>

      <main className="min-h-screen pt-24 pb-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 md:py-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight leading-[1.0]">
                  Create unlimited{" "}
                  <span className="text-accent underline decoration-4 underline-offset-8">
                    UGC Ads.
                  </span>
                  <br />
                  <span className="text-accent">Instantly.</span>
                </h1>
                <p className="text-on-surface-variant text-lg md:text-xl font-body max-w-lg leading-relaxed">
                  Turn any product into a scroll-stopping ad in seconds. Our
                  AI-powered engine crafts authentic high-performance creative at
                  scale.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover"
                        alt="Portrait of a young smiling professional woman"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuABRYMAjOFp3jpVrfgkp_x84jGuNnWxLumMwyjjyY-hqL55jDFpXFMFcOdToGV2bqDTTovJ2iu52ejZA9Jo_u9rWr-_Ys-b6ddvi9vzbtUk8o3NRFNEyuUoDJgA-duUQ5zo6Iyo-xjl34duzoGoMWt71qF_pgsvs_VcMiS4Fop8Y8CvQba76TvNP-OsZChf81NEMO-KbhUs8ytkyuGzW8cch42HuYL2sTFGpPw7davzFyi15ONArOmWDT9oZ_kYWpEPfbOSVWNwOR2B"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover"
                        alt="Headshot of a young creative man"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNa79Klm93wWbhcSb-pnXu5VmsbELrlZz0hYKJib0W4sspDM-xq4W8wFWX-EOFSAF_lta9lr6uhig0HET6TT4dGwua5ezeQs9RqnzgVHQKYXIrM02lY-CAosfD-CB_maXnzrvusdfc7j1J4mVd7qEz5XxhS8mx5qWW7vLpb7eMdAEJ8FhS4jshpSOM9H2kuE6Rdjz7s0shr04wr5308zTKyrAZOELQH4eSlOmxaxHLn2xXbS1LfzIE-uVbYFRe1fdGdx0YnuNrHeQ3"
                      />
                    </div>
                    <div className="h-10 px-3 rounded-xl border-2 border-[#0A0A0A] bg-[#2a2a2a] flex items-center justify-center text-xs font-bold">
                      +500
                    </div>
                  </div>
                  <span className="text-sm font-label uppercase tracking-widest text-neutral-400">
                    <span className="text-accent">●</span> 500+ brands already
                    scaling with Vynlo
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content: UGC Cluster */}
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center py-12 md:py-0">
              <div className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center">
                {/* BG Glow */}
                <div className="absolute inset-0 bg-primary-container/10 blur-[120px] rounded-full" />
                {/* Staggered Frames */}
                <div className="flex items-center justify-center w-full relative">
                  {/* Frame 1 (Left) */}
                  <div className="absolute left-0 w-1/2 aspect-[9/16] bg-surface-container-high rounded-xl overflow-hidden -rotate-6 z-10 border border-white/5 shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover opacity-80"
                      alt="Aesthetic product shot of white wireless headphones"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhyGqKkQQemVKt0r4c1_lpw3sYmCPmvs9RYmzqrno4R0j7BsT4Bzb7hvI1Ew8162c3R0x8WzhygOiP-K4CYVrbBe6XDLQex2JcHaNqaGKHNrYXU-WOMd5tCYWZPEYp4TgZK0h_wjpjZ7ITdPH3H5DUdwQ_3VpaLS6pNLHdVRQuK1idAHRnu5ur0V7TP6VfZ_MlNS1jgErXxJe34utuJL5FKPT4x41IWEOn9LuwKHSZZ8ACi_CMuOPvMGmLYBy6-EiQspaA_Eew08y"
                    />
                  </div>
                  {/* Frame 2 (Center, Active) */}
                  <div className="relative w-[55%] aspect-[9/16] bg-surface-container-highest rounded-2xl overflow-hidden z-30 border-2 border-accent/30 green-glow-shadow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      alt="Model holding a supplement product"
                      src="/model_holding_supplement.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="material-symbols-outlined text-accent text-sm"
                          style={{
                            fontVariationSettings: '"FILL" 1',
                          }}
                        >
                          play_circle
                        </span>
                        <span className="text-[10px] font-label font-bold uppercase tracking-tighter">
                          AI Processing Hooks...
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Frame 3 (Right) */}
                  <div className="absolute right-0 w-1/2 aspect-[9/16] bg-surface-container-high rounded-xl overflow-hidden rotate-6 z-10 border border-white/5 shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover opacity-80"
                      alt="Young creator unboxing a skincare product"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2tMKundspG2tAi3WraxAeOF2hZrZP-jNwQ9UloEbEltm-xpTErVQaJdHOcuY4XE39wWkxQ_YEZRyU3HmiRv5_oH2lUT2zg33NG1IkkF76JwS5jgwPBI1bei4_Cf9BOjSx7XuXPkuWNAQ_HVdr_A53k6s1t4ZXUsK-MMc9DKiuhCyP0XksQWR6BXa8DPLeCjiYlUge1UNTTP6OXKtZmHzRmh8bG-jujRfF4So0mJF7iFJUkx2KocBj2_sJSPi4fwBcCcxOwL7macJb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured UGC Highlight Section */}
        <section className="w-full bg-[#0A0A0A] py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[12px] border border-white/10 featured-video-shadow">
              <div className="w-full h-full rounded-[12px] overflow-hidden bg-surface-container">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://gohzjlehzwgusqsebigj.supabase.co/storage/v1/object/public/app-videos/perfume_ad.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Video Overlay Controls */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <button
                className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all active:scale-90 pointer-events-auto"
                onClick={toggleMute}
                title="Toggle Mute"
              >
                <span
                  ref={muteIconRef}
                  className="material-symbols-outlined text-xl"
                >
                  volume_off
                </span>
              </button>
              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#00FF85]/10 border border-[#00FF85]/20 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#00FF85] uppercase tracking-wider">
                    Live UGC Ad
                  </span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 md:mt-32 max-w-3xl mx-auto px-6 text-center">
          <div className="bg-surface-container-low p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-[60px] rounded-full" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Ready to scale your creative?
                </h2>
                <p className="text-neutral-500 font-body">
                  Join the elite performance marketers using Vynlo.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-10 py-5 bg-[#00FF85] text-[#0A0A0A] font-bold rounded-xl text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#00FF85]/10 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join the Community
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <p className="text-xs font-label uppercase tracking-widest text-neutral-600">
                  Free to join. No credit card.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 glass-nav z-50">
        <a
          href={DISCORD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#00FF85] text-[#0A0A0A] font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#00FF85]/20"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          Join the Community
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </>
  );
}
