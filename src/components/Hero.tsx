"use client";

import { profile } from "@/data/timeline";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20">

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center">
        <div>
        {/* Eyebrow */}
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up">
          Senior Frontend Engineer
        </p>

        {/* Name - Large editorial style */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight mb-8 opacity-0 animate-fade-in-up delay-100">
          <span className="block">Ícaro</span>
          <span className="block text-stone-400">Harry</span>
        </h1>

        {/* Bio */}
        <p className="text-stone-300 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-in-up delay-200">
          {profile.bio}
        </p>

        {/* Social links */}
        <div className="flex items-center gap-1 opacity-0 animate-fade-in-up delay-400">
          {profile.socials.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full hover:bg-stone-900 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github
                size={20}
                className="text-stone-400 group-hover:text-emerald-400 transition-colors"
              />
            </a>
          )}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full hover:bg-stone-900 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={20}
                className="text-stone-400 group-hover:text-emerald-400 transition-colors"
              />
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="group p-3 rounded-full hover:bg-stone-900 transition-all duration-300"
              aria-label="Email"
            >
              <Mail
                size={20}
                className="text-stone-400 group-hover:text-emerald-400 transition-colors"
              />
            </a>
          )}

          {/* Divider */}
          <div className="h-6 w-px bg-stone-800 mx-4" />

          {/* Email text */}
          <a
            href={`mailto:${profile.email}`}
            className="text-stone-300 hover:text-emerald-400 transition-colors text-sm link-underline"
          >
            {profile.email}
          </a>
        </div>
        </div>

        {/* Photo */}
        <div className="relative opacity-0 animate-fade-in delay-300 order-first lg:order-last">
          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl shadow-emerald-500/5">
            <Image
              src="/images/icaro-teaching.webp"
              alt="Ícaro Harry teaching"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
          </div>
          {/* Decorative elements - hidden on mobile */}
          <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border border-emerald-500/20 rounded-2xl -z-10" />
          <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 border border-stone-700/50 rounded-xl -z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToTimeline}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 hover:text-emerald-400 transition-colors opacity-0 animate-fade-in delay-700 cursor-pointer"
        aria-label="Scroll to journey"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
