import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '@/components/Reveal';
import { certifications } from '@/data/certifications';

export function CertificationsPage() {
  return (
    <>
      <Seo
        title="Certifications"
        description="Professional certifications and hackathon credentials earned by Utkarsh Maheshwari — IBM AI, Full Stack, Adobe, Flipkart GRiD, and more."
        path="/certifications"
      />
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the work."
          description="Certifications and competitive recognitions — proof of learning, not a substitute for it."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group surface-card flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-subtle text-accent-500 ring-1 ring-soft dark:text-accent-400">
                  <Award size={20} />
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
                  <Calendar size={13} /> {cert.date}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-balance">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-soft bg-subtle px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-500 transition-colors hover:text-accent-400 dark:text-accent-400"
                >
                  View credential <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  );
}
