import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
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
        {
          name,
          email,
          subject,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');

      form.reset();
    } catch (error: unknown) {
  console.error("EmailJS Error:", error);

  if (error instanceof Error) {
    setErrorMsg(error.message);
  } else {
    setErrorMsg("Unable to send your message.");
  }

  setStatus("error");
}
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.city,
      href: undefined,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'utkarsh-0106',
      href: profile.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'utkarsh-maheshwari-6b9978266',
      href: profile.linkedin,
    },
  ];

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Utkarsh Maheshwari."
        path="/contact"
      />

      <section className="container-page py-20 sm:py-28">

        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a role, project, or idea? I'd love to hear from you."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
                    {/* Contact Details */}

          <Reveal className="lg:col-span-2">
            <div className="space-y-3">
              {contactCards.map((c) => {
                const Card = (
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="surface-card flex items-center gap-4 rounded-2xl p-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-subtle text-accent-500 ring-1 ring-soft dark:text-accent-400">
                      <c.icon size={18} />
                    </span>

                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                        {c.label}
                      </p>

                      <p className="truncate text-sm font-medium">
                        {c.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={
                      c.href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      c.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
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

          {/* Contact Form */}

          <Reveal
            delay={0.1}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="surface-card rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">

                <Field
                  label="Name"
                  htmlFor="name"
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={inputCls}
                    placeholder="Your Name"
                  />
                </Field>

                <Field
                  label="Email"
                  htmlFor="email"
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                </Field>

              </div>

              <div className="mt-5">

                <Field
                  label="Subject"
                  htmlFor="subject"
                >
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className={inputCls}
                    placeholder="Subject"
                  />
                </Field>

              </div>

              <div className="mt-5">

                <Field
                  label="Message"
                  htmlFor="message"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className={inputCls}
                    placeholder="Tell me about your project..."
                  />
                </Field>

              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'submitting'}
                >
                  <Send size={16} />

                  {status === 'submitting'
                    ? 'Sending...'
                    : 'Send Message'}
                </Button>

                <AnimatePresence>

                  {status === 'success' && (

                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="inline-flex items-center gap-2 text-sm text-emerald-500"
                    >
                      <CheckCircle2 size={16} />

                      Message sent successfully!
                      I'll get back to you soon.

                    </motion.span>

                  )}

                  {status === 'error' && (

                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
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

      </section>

    </>

  );
}
const inputCls =
  'w-full rounded-xl border border-soft bg-subtle px-4 py-3 text-sm text-[var(--text)] placeholder:text-subtle transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';

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
      <span className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-subtle">
        {label}
      </span>

      {children}
    </label>
  );
}