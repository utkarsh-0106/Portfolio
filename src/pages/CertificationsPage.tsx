import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { PageShell } from '@/components/layout/PageShell';
import { staggerContainer, staggerItem } from '@/components/Reveal';
import { certifications } from '@/data/certifications';

export function CertificationsPage() {
  return (
    <>
      <Seo
        title="Certifications"
        description="Credentials and recognitions earned by Utkarsh Maheshwari."
        path="/certifications"
      />
      <PageShell>
        <SectionHeading
          eyebrow="Certifications"
          title="Verification, not decoration."
          description="Credentials that support the engineering work. They do not replace it."
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
              whileHover={{ y: -3 }}
              className="glass-panel flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-soft bg-subtle font-display text-sm text-accent-500">
                  {cert.issuer.slice(0, 1)}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
                  <Calendar size={13} /> {cert.date}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-sm text-accent-500"
                >
                  View credential
                </a>
              ) : (
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-subtle">
                  <Award size={13} /> Credential on file
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </PageShell>
    </>
  );
}
