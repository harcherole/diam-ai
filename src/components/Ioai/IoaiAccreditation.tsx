import { useState } from "react";
import { ShieldCheck, ZoomIn } from "lucide-react";
import { ioaiAccreditation, ioaiGabonConfig } from "@/data/ioaiGabon";
import ImageLightbox from "@/components/ui/ImageLightbox";

/**
 * Bloc visuel de l'accréditation officielle IOAI — utilisé dans le Hero.
 * Le certificat affiché est l'image réelle fournie (voir
 * public/assets/ioai/ioai-gabon-accreditation.png), jamais recréé ou
 * généré artificiellement.
 */
export default function IoaiAccreditation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      {/* Badge "Officially Accredited" */}
      <div className="absolute -top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-cyan px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy-950 shadow-lg sm:left-6 sm:translate-x-0">
        <ShieldCheck size={14} strokeWidth={2.5} />
        Officially Accredited
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Voir l'accréditation officielle en grand"
        className="group relative block w-full -rotate-2 cursor-zoom-in rounded-2xl border border-white/15 bg-white/[0.06] p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-transform duration-300 hover:-rotate-1 hover:scale-[1.015]"
      >
        <div className="overflow-hidden rounded-xl bg-white">
          <img
            src={ioaiAccreditation.imageSrc}
            alt="Certificat d'accréditation IOAI de DIAM-AI pour le Gabon"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-navy-950/0 opacity-0 transition-all duration-300 group-hover:bg-navy-950/20 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-navy-900 shadow-lg">
            <ZoomIn size={14} />
            Agrandir
          </span>
        </span>
      </button>

      <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
        <ShieldCheck size={16} className="mt-0.5 shrink-0 text-cyan" strokeWidth={2} />
        <p className="text-xs leading-relaxed text-white/70">
          Certificat n°{ioaiAccreditation.certificateNumber} — délivré le {ioaiAccreditation.issuedDate}.{" "}
          {ioaiAccreditation.validity}.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 text-xs font-semibold text-cyan underline-offset-4 hover:underline"
      >
        Voir l'accréditation officielle
      </button>

      <a
        href={ioaiGabonConfig.officialSite}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 block text-xs text-white/50 underline-offset-4 hover:text-white/80 hover:underline"
      >
        Vérifier le statut sur ioai-official.org →
      </a>

      <ImageLightbox
        src={ioaiAccreditation.imageSrc}
        alt="Certificat d'accréditation IOAI de DIAM-AI pour le Gabon"
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
