import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Activity } from "@/data/activities";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const Icon = activity.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-8 shadow-[0_1px_2px_rgba(10,22,40,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-accent">
        <Icon size={22} strokeWidth={1.75} />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-navy-900">{activity.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
        {activity.description}
      </p>

      <Link
        to={activity.path}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
      >
        {activity.cta}
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </motion.div>
  );
}
