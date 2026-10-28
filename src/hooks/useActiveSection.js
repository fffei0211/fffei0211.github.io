import { useEffect, useMemo, useState } from 'react';

const DEFAULT_HEADER_OFFSET = 96;

function getHeaderOffset() {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    '--header-offset',
  );
  const parsedValue = Number.parseFloat(value);

  return Number.isFinite(parsedValue) ? parsedValue : DEFAULT_HEADER_OFFSET;
}

export default function useActiveSection(sectionIds = []) {
  const idsKey = JSON.stringify(sectionIds);
  const ids = useMemo(() => {
    try {
      const parsedIds = JSON.parse(idsKey);
      return parsedIds.filter((id) => typeof id === 'string' && id.length > 0);
    } catch {
      return [];
    }
  }, [idsKey]);
  const [activeSection, setActiveSection] = useState(() => ids[0] ?? '');

  useEffect(() => {
    if (ids.length === 0) {
      setActiveSection('');
      return undefined;
    }

    let hashId = '';
    try {
      hashId = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      hashId = window.location.hash.slice(1);
    }
    setActiveSection((currentId) => {
      if (ids.includes(hashId)) return hashId;
      return ids.includes(currentId) ? currentId : ids[0];
    });

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0 || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const headerOffset = getHeaderOffset();
    const latestEntries = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => latestEntries.set(entry.target.id, entry));

        const visibleEntries = ids
          .map((id) => latestEntries.get(id))
          .filter((entry) => entry?.isIntersecting);

        if (visibleEntries.length === 0) return;

        const passedTopEdge = visibleEntries
          .filter((entry) => entry.boundingClientRect.top <= headerOffset + 1)
          .sort(
            (first, second) =>
              second.boundingClientRect.top - first.boundingClientRect.top,
          );
        const upcoming = [...visibleEntries].sort(
          (first, second) =>
            first.boundingClientRect.top - second.boundingClientRect.top,
        );
        const nextEntry = passedTopEdge[0] ?? upcoming[0];

        setActiveSection(nextEntry.target.id);
      },
      {
        rootMargin: `-${headerOffset}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.6, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeSection;
}
