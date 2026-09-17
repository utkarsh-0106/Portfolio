import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { PageShell } from '@/components/layout/PageShell';
import { profile } from '@/data/profile';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l2.268 2.268 3.946-4.32 8.14 8.14-8.14 8.14-3.946-4.32-2.268 2.268 5.406 5.788a1.374 1.374 0 0 0 1.96 0l9.21-9.21a1.374 1.374 0 0 0 0-1.96L14.444.438A1.374 1.374 0 0 0 13.483 0zM4.4 8.4 1.2 11.6a1.2 1.2 0 0 0 0 1.7l3.2 3.2 2.3-2.3-2.35-2.35 2.35-2.35z" />
  </svg>
);

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg('Please fill in every field.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, subject, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.reset();
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg('Unable to send your message.');
      }
      setStatus('error');
    }
  };

  const contactCards = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'utkarsh-0106', href: profile.github },
    { icon: LeetCodeIcon, label: 'LeetCode', value: 'utkarsh_mah0106', href: profile.leetcode },
    { icon: MapPin, label: 'Location', value: profile.city, href: undefined as string | undefined },
    { icon: FileText, label: 'Resume', value: 'View resume', href: profile.resumeUrl },
  ];

  return (
    <>
      <Seo title="Contact" description="Get in touch with Utkarsh Maheshwari." path="/contact" />
      <PageShell>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="I am looking for opportunities where backend engineering and AI work meet a real product. If you have a system to build, let's talk."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-3">
              {contactCards.map((c) => {
                const Card = (
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="glass-panel flex items-center gap-4 p-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-subtle text-accent-500 ring-1 ring-soft">
                      <c.icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">{c.label}</p>
                      <p className="truncate text-sm font-medium">{c.value}</p>
                    </div>
                  </motion.div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={c.label}>{Card}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input id="name" name="name" type="text" autoComplete="name" required className={inputCls} placeholder="Your name" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" autoComplete="email" required className={inputCls} placeholder="you@example.com" />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" htmlFor="subject">
                  <input id="subject" name="subject" type="text" required className={inputCls} placeholder="Subject" />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" htmlFor="message">
                  <textarea id="message" name="message" rows={6} required className={inputCls} placeholder="Tell me about the role or system." />
                </Field>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" disabled={status === 'submitting'}>
                  <Send size={16} />
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-sm text-emerald-500"
                    >
                      <CheckCircle2 size={16} />
                      Message sent. I will get back to you soon.
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-sm text-rose-500"
                    >
                      <AlertCircle size={16} />
                      {errorMsg}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </PageShell>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-subtle">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  'w-full rounded-xl border border-soft bg-subtle px-4 py-3 text-sm text-[var(--text)] placeholder:text-subtle transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';

