import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import type { DiamEvent } from "@/data/events";

interface EventCardProps {
  event: DiamEvent;
}

const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_1px_2px_rgba(10,22,40,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]"
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-surface-100">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-accent">
          <Calendar size={13} />
          {formatDate(event.date)}
        </div>

        <h3 className="mt-3 text-base font-semibold leading-snug text-navy-900">
          {event.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
          {event.description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-500">
          <MapPin size={13} className="shrink-0 text-ink-500" />
          {event.location}
        </div>

        <p className="mt-1 text-xs text-ink-500">{event.organizer}</p>

        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            En savoir plus
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
