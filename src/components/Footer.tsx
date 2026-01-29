"use client";

import { profile } from "@/data/timeline";
import { Github, Linkedin, Mail, Heart, Bot } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [isHoveringHeart, setIsHoveringHeart] = useState(false);

  return (
    <footer className="relative py-16 border-t border-stone-900">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-medium text-white mb-4">
            Let&apos;s build something together
          </h3>
          <p className="text-stone-300 max-w-md mx-auto mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-stone-900">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p
            onMouseEnter={() => setIsHoveringHeart(true)}
            onMouseLeave={() => setIsHoveringHeart(false)}
            className="text-stone-400 text-sm flex items-center gap-1 cursor-default"
          >
            Made with{" "}
            {isHoveringHeart ? (
              <Bot size={12} className="text-emerald-500" />
            ) : (
              <Heart size={12} className="text-emerald-500" />
            )}{" "}
            by {profile.name} &copy; {new Date().getFullYear()}
          </p>

          {/* Location */}
          <p className="text-stone-400 text-sm">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
}
