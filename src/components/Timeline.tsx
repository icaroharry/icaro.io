"use client";

import { timelineEntries, TimelineEntry, Project, Role } from "@/data/timeline";
import { ExternalLink, Briefcase } from "lucide-react";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="mt-4 rounded-xl bg-stone-900/50 border border-stone-800 overflow-hidden hover:border-stone-700 transition-all duration-300 group/project">
      {/* Project Video */}
      {project.video && (
        <div className="relative aspect-video overflow-hidden">
          <iframe
            src={project.video}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )}

      {/* Project Image */}
      {project.image && !project.video && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-[16/9] overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover/project:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        </a>
      )}

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold text-white">{project.title}</h4>

        {project.subtitle && (
          <p className="text-stone-500 text-xs mt-1 font-mono">
            {project.subtitle}
          </p>
        )}

        <p className="mt-2 text-stone-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-emerald-500 hover:text-emerald-400 transition-colors group/link"
          >
            <span className="link-underline">
              {project.linkText || "View Project"}
            </span>
            <ExternalLink
              size={14}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </div>
  );
}

function RoleItem({ role, isLast }: { role: Role; isLast: boolean }) {
  return (
    <div className={`relative pl-6 ${!isLast ? "pb-4" : ""}`}>
      {/* Role connector line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-px bg-stone-800" />
      )}
      {/* Role dot */}
      <div className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full border-2 border-stone-700 bg-stone-900" />

      <h4 className="font-medium text-stone-100">{role.title}</h4>
      <p className="text-stone-500 text-xs font-mono mt-0.5">{role.date}</p>
      <p className="mt-2 text-stone-400 text-sm leading-relaxed">
        {role.description}
      </p>
    </div>
  );
}

function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const hasProjects = entry.projects && entry.projects.length > 0;
  const hasRoles = entry.roles && entry.roles.length > 0;

  return (
    <div className="group relative grid grid-cols-[1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-8 pb-12 last:pb-0">
      {/* Date - visible on desktop */}
      <div className="hidden md:block text-right">
        <span className="text-stone-500 text-sm font-mono sticky top-24">
          {entry.date}
        </span>
      </div>

      {/* Content */}
      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-800 group-last:bg-gradient-to-b group-last:from-stone-800 group-last:to-transparent" />

        {/* Timeline dot or logo */}
        <div className="absolute left-0 top-1 -translate-x-1/2 z-10">
          {entry.logo ? (
            <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 overflow-hidden flex items-center justify-center">
              <Image
                src={entry.logo}
                alt={entry.subtitle}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-stone-800 border-2 border-stone-600 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all duration-300" />
          )}
        </div>

        {/* Experience content */}
        <div className={entry.logo ? "ml-3" : ""}>
          {/* Mobile date */}
          <div className="md:hidden mb-1">
            <span className="text-stone-500 text-xs font-mono">
              {entry.date}
            </span>
          </div>

          {/* Company name (larger for multi-role) */}
          {hasRoles ? (
            <>
              {entry.website ? (
                <a
                  href={entry.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group/company"
                >
                  {entry.subtitle}
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover/company:opacity-100 transition-opacity"
                  />
                </a>
              ) : (
                <p className="text-lg font-semibold text-emerald-500">
                  {entry.subtitle}
                </p>
              )}
              {entry.title && <p className="text-stone-500 text-sm">{entry.title}</p>}
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-stone-100 group-hover:text-white transition-colors">
                {entry.title}
              </h3>
              <p className="flex items-center gap-2 mt-0.5 text-sm font-medium">
                <Briefcase size={12} className="text-emerald-500" />
                {entry.website ? (
                  <a
                    href={entry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5 group/company"
                  >
                    {entry.subtitle}
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover/company:opacity-100 transition-opacity"
                    />
                  </a>
                ) : (
                  <span className="text-emerald-500">{entry.subtitle}</span>
                )}
              </p>
            </>
          )}

          {/* Description (for single role entries) */}
          {entry.description && (
            <p className="mt-3 text-stone-400 text-sm leading-relaxed">
              {entry.description}
            </p>
          )}

          {/* Multiple roles */}
          {hasRoles && (
            <div className="mt-4 space-y-0">
              {entry.roles!.map((role, idx) => (
                <RoleItem
                  key={idx}
                  role={role}
                  isLast={idx === entry.roles!.length - 1}
                />
              ))}
            </div>
          )}

          {/* Tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-stone-800/80 text-stone-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Nested Projects */}
          {hasProjects && (
            <div className="mt-4">
              {entry.projects!.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  const sortedEntries = [...timelineEntries].sort((a, b) =>
    b.sortDate.localeCompare(a.sortDate)
  );

  return (
    <section id="journey" className="py-24 relative">
      {/* Section header */}
      <div className="mb-16">
        <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          Experience
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-medium text-white">
          My Journey
        </h2>
        <p className="text-stone-400 mt-4 max-w-lg">
          Over a decade of building products, leading teams, and teaching the
          next generation of developers.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {sortedEntries.map((entry, index) => (
          <TimelineItem key={`${entry.sortDate}-${index}`} entry={entry} />
        ))}
      </div>
    </section>
  );
}
