"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { GlobeIcon, MapPinIcon, SparklesIcon, UsersIcon } from 'lucide-react';

interface ClientCountry {
  id: string;
  name: string;
  flag: string;
  x: number;
  y: number;
  clients: number;
  text: string;
  region: string;
}

const CLIENT_COUNTRIES: ClientCountry[] = [
  { id: 'us', name: 'United States', flag: '🇺🇸', x: 180, y: 390, clients: 14, text: 'Serving enterprise fintech & healthcare clients.', region: 'North America' },
  { id: 'ca', name: 'Canada', flag: '🇨🇦', x: 200, y: 320, clients: 4, text: 'Delivering operational logistics systems.', region: 'North America' },
  { id: 'mx', name: 'Mexico', flag: '🇲🇽', x: 160, y: 460, clients: 2, text: 'Logistics integrations.', region: 'North America' },
  { id: 'gb', name: 'United Kingdom', flag: '🇬🇧', x: 402, y: 376, clients: 8, text: 'Product strategy & SaaS engineering.', region: 'Europe' },
  { id: 'de', name: 'Germany', flag: '🇩🇪', x: 428, y: 388, clients: 3, text: 'Industrial ERP and AI integrations.', region: 'Europe' },
  { id: 'fr', name: 'France', flag: '🇫🇷', x: 410, y: 400, clients: 3, text: 'Digital branding and SaaS studio.', region: 'Europe' },
  { id: 'es', name: 'Spain', flag: '🇪🇸', x: 395, y: 420, clients: 2, text: 'E-commerce platform optimization.', region: 'Europe' },
  { id: 'ae', name: 'United Arab Emirates', flag: '🇦🇪', x: 533, y: 468, clients: 5, text: 'Web3 & high-performance APIs.', region: 'Middle East' },
  { id: 'in', name: 'India', flag: '🇮🇳', x: 600, y: 475, clients: 6, text: 'Enterprise software development partner.', region: 'Asia' },
  { id: 'sg', name: 'Singapore', flag: '🇸🇬', x: 659, y: 527, clients: 7, text: 'Real-time logistics & logistics control towers.', region: 'Asia' },
  { id: 'jp', name: 'Japan', flag: '🇯🇵', x: 715, y: 418, clients: 3, text: 'Automated CRM systems.', region: 'Asia' },
  { id: 'au', name: 'Australia', flag: '🇦🇺', x: 730, y: 620, clients: 4, text: 'SaaS platforms & cloud architecture.', region: 'Oceania' },
  { id: 'za', name: 'South Africa', flag: '🇿🇦', x: 465, y: 600, clients: 2, text: 'Mobile health care solutions.', region: 'Africa' },
  { id: 'br', name: 'Brazil', flag: '🇧🇷', x: 265, y: 550, clients: 2, text: 'Agritech integrations & payment systems.', region: 'South America' },
];

export function GlobalMap() {
  const [svgContent, setSvgContent] = useState<string>('');
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<ClientCountry | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load SVG from the public folder
  useEffect(() => {
    fetch('/world-map.svg')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load map');
        return res.text();
      })
      .then((data) => {
        // Find the <svg element and add class/id attributes if missing
        setSvgContent(data);
      })
      .catch((err) => console.error('Error loading world map:', err));
  }, []);

  // Handle country hover inside SVG
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as SVGElement;
    if (target.tagName === 'path') {
      let id = target.id;
      if (!id && target.parentElement?.tagName === 'g') {
        id = target.parentElement.id;
      }
      if (id) {
        // Strip leading underscore if present in SVG ID
        const normalizedId = id.startsWith('_') ? id.substring(1) : id;
        // Only trigger hover state if the country is one of our active client locations
        if (CLIENT_COUNTRIES.some((c) => c.id === normalizedId)) {
          setHoveredCountry(normalizedId);
        }
      }
    }
  };

  const handleMouseOut = () => {
    setHoveredCountry(null);
  };

  // Convert SVG coordinates to relative container percentages
  // viewBox: 30.767 241.591 784.077 458.627
  const getCoordinates = (x: number, y: number) => {
    const left = ((x - 30.767) / 784.077) * 100;
    const top = ((y - 241.591) / 458.627) * 100;
    return { left: `${left}%`, top: `${top}%` };
  };

  // Dynamic CSS injector to style the parsed SVG paths
  const activeStyleRules = CLIENT_COUNTRIES.map(
    (c) => `
      #world-map #${c.id},
      #world-map g#${c.id} path,
      #world-map path[id="_${c.id}"] {
        fill: rgba(0, 149, 255, 0.08) !important;
        stroke: rgba(0, 210, 255, 0.3) !important;
        stroke-width: 1.2px !important;
      }
    `
  ).join('\n');

  const hoverStyleRule = hoveredCountry
    ? `
      #world-map #${hoveredCountry},
      #world-map g#${hoveredCountry} path,
      #world-map path[id="_${hoveredCountry}"] {
        fill: rgba(0, 210, 255, 0.22) !important;
        stroke: rgba(0, 210, 255, 0.85) !important;
        stroke-width: 1.5px !important;
        filter: drop-shadow(0 0 8px rgba(0, 210, 255, 0.5)) !important;
      }
    `
    : '';

  // Get active country matching hover or selection
  const activeDetail =
    CLIENT_COUNTRIES.find((c) => c.id === hoveredCountry) ||
    selectedCountry ||
    CLIENT_COUNTRIES[0];

  return (
    <Section className="py-20 md:py-28 bg-[#02040a] relative overflow-hidden" id="global-presence">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1020_1px,transparent_1px),linear-gradient(to_bottom,#0c1020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Styled SVG inject CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        #world-map {
          width: 100%;
          height: 100%;
        }
        #world-map path {
          fill: #080c18;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 1px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        ${activeStyleRules}
        ${hoverStyleRule}
      `}} />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-xs text-accent font-semibold mb-4 tracking-wide uppercase">
              <GlobeIcon className="w-3.5 h-3.5 animate-pulse" />
              Global Footprint
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl tracking-tight mb-4">
              Where ahamic software <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">runs the world</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted">
              We design and engineer platforms powering industry leaders and fast-growing teams across multiple continents. Move your cursor or click on highlighted countries to explore.
            </p>
          </Reveal>
        </div>

        {/* Map Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
          {/* Map display */}
          <div className="lg:col-span-8 bg-surface/40 backdrop-blur-md border border-border/80 rounded-3xl p-4 md:p-8 relative flex flex-col justify-center items-center">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[784/459] select-none"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {/* World Map SVG */}
              {svgContent ? (
                <div 
                  className="w-full h-full text-zinc-700"
                  dangerouslySetInnerHTML={{ __html: svgContent }} 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface/20 rounded-2xl">
                  <span className="text-sm text-muted animate-pulse">Loading global node network...</span>
                </div>
              )}

              {/* Glowing interactive markers */}
              {CLIENT_COUNTRIES.map((c) => {
                const coords = getCoordinates(c.x, c.y);
                const isHovered = hoveredCountry === c.id;
                const isSelected = selectedCountry?.id === c.id;

                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCountry(isSelected ? null : c)}
                    onMouseEnter={() => setHoveredCountry(c.id)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{ left: coords.left, top: coords.top }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 pointer-events-auto"
                    aria-label={`Show ${c.name} stats`}
                  >
                    {/* Ring Pulse animation */}
                    <span className={`absolute inset-0 w-8 h-8 -left-2 -top-2 rounded-full bg-accent/20 transition-all duration-300 ${
                      isHovered || isSelected ? 'scale-125 bg-accent/40' : 'scale-100'
                    }`}>
                      <span className="absolute inset-0 rounded-full bg-accent/50 animate-ping opacity-75" />
                    </span>

                    {/* Pin center core */}
                    <span className={`relative flex items-center justify-center w-4 h-4 rounded-full border bg-surface transition-all duration-300 ${
                      isHovered || isSelected 
                        ? 'border-accent shadow-[0_0_15px_rgba(0,210,255,0.8)] scale-110' 
                        : 'border-accent/40 shadow-md'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>

                    {/* Pop-up tooltip directly above the pin (Desktop hover) */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-[#0d1324] border border-border/80 text-ink rounded-xl px-3 py-2 text-xs font-semibold whitespace-nowrap shadow-2xl transition-all duration-300 pointer-events-none ${
                      isHovered ? 'opacity-100 translate-y-0 visible scale-100' : 'opacity-0 translate-y-1 invisible scale-95'
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">{c.flag}</span>
                        <span>{c.name}</span>
                        <span className="text-accent bg-accent/10 px-1.5 py-0.5 rounded text-[10px]">
                          {c.clients} {c.clients === 1 ? 'client' : 'clients'}
                        </span>
                      </div>
                      {/* Arrow tail */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0d1324] border-r border-b border-border/80 rotate-45" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details & Sidebar Panel */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Active details card */}
            <div className="bg-surface/50 backdrop-blur-md border border-border/80 rounded-3xl p-6 relative overflow-hidden group min-h-[180px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <UsersIcon className="w-24 h-24 text-accent" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{activeDetail.flag}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">{activeDetail.name}</h3>
                    <p className="text-xs text-muted font-mono uppercase tracking-widest">{activeDetail.region}</p>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {activeDetail.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <UsersIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-ink leading-none">{activeDetail.clients}</div>
                    <div className="text-[10px] text-muted uppercase tracking-wider">Active Partners</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-accent font-semibold bg-accent/5 px-3 py-1.5 rounded-xl border border-accent/10">
                  <SparklesIcon className="w-3.5 h-3.5 text-accent animate-spin-slow" />
                  <span>Production Ready</span>
                </div>
              </div>
            </div>

            {/* List panel */}
            <div className="bg-surface/30 backdrop-blur-md border border-border/50 rounded-3xl p-6 flex-1 flex flex-col min-h-[250px]">
              <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Active Regions</h4>
              <div className="overflow-y-auto h-0 flex-grow pr-1 custom-scrollbar space-y-1">
                {CLIENT_COUNTRIES.map((c) => {
                  const isHovered = hoveredCountry === c.id;
                  const isSelected = selectedCountry?.id === c.id;

                  return (
                    <button
                      key={c.id}
                      onMouseEnter={() => setHoveredCountry(c.id)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(isSelected ? null : c)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                        isHovered || isSelected
                          ? 'bg-surface border-accent/30 text-ink pl-4 shadow-sm'
                          : 'border-transparent text-muted hover:text-ink hover:bg-surface/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{c.flag}</span>
                        <span className="text-sm font-medium">{c.name}</span>
                      </div>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isHovered || isSelected ? 'bg-accent/10 text-accent' : 'bg-surface/50 border border-border'
                      }`}>
                        {c.clients} P
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
