// import { motion } from 'framer-motion';
// import { Server, Brain, Code2, GraduationCap, Lightbulb, Boxes } from 'lucide-react';
// import { Seo } from '@/components/Seo';
// import { SectionHeading } from '@/components/ui/SectionHeading';
// import { Reveal } from '@/components/Reveal';
// import { profile } from '@/data/profile';

// const traits = [
//   { icon: Server, title: 'Backend Engineering', text: 'I care about systems that stay calm under load — clean APIs, sensible boundaries, and data models that age well.' },
//   { icon: Boxes, title: 'Software Architecture', text: 'I enjoy drawing the lines between modules. Good architecture is mostly about deciding what does not talk to what.' },
//   { icon: Brain, title: 'Artificial Intelligence', text: 'I build with ML where it earns its place — recommendations, analytics, and small models that solve a real problem.' },
//   { icon: GraduationCap, title: 'Continuous Learning', text: 'Every project is an excuse to go one layer deeper. Lately: distributed systems, ML systems, and clean API design.' },
//   { icon: Lightbulb, title: 'Problem Solving', text: 'I like problems that do not have a tutorial yet. The first working version is the easy part; the third is the real work.' },
//   { icon: Code2, title: 'Craft', text: 'I treat code as communication. Names, structure, and error paths matter as much as the happy path.' },
// ];

// export function AboutPage() {
//   return (
//     <>
//       <Seo
//         title="About"
//         description="About Utkarsh Maheshwari — a backend engineer and full stack developer passionate about architecture, AI, and continuous learning."
//         path="/about"
//       />
//       <section className="container-page py-20 sm:py-28">
//         <SectionHeading
//           eyebrow="About Me"
//           title="Backend Engineer passionate about building reliable software."
//           description="I enjoy designing scalable backend systems, production-ready APIs, and intelligent applications that solve real-world problems. I believe great software is built through clean architecture, thoughtful engineering, and continuous learning."
//         />

//         <div className="mt-14 grid gap-10 lg:grid-cols-3">
//           <Reveal className="lg:col-span-2">
//             <div className="space-y-3">
//     <h3 className="text-2xl font-semibold">My Story</h3>

//     <p className="text-muted leading-8">
//         My journey into software engineering started with curiosity about how modern applications work behind the scenes. As I explored web development, I naturally gravitated toward backend engineering because I enjoyed solving problems involving APIs, databases, and application architecture.
//     </p>
// </div>
//               <div className="space-y-3 pt-8">
//     <h3 className="text-2xl font-semibold">What I Build</h3>

//     <p className="text-muted leading-8">
//         I build full-stack applications with a strong focus on backend development. My projects include scalable REST APIs, AI-powered applications, data analytics systems, and modern web applications using Spring Boot, React, Node.js, Python, MySQL, MongoDB, and Streamlit.
//     </p>
// </div>
//               <div className="space-y-3 pt-8">
//     <h3 className="text-2xl font-semibold">Current Focus</h3>

//     <div className="grid gap-4 sm:grid-cols-2"></div>
//              <div className="surface-card rounded-xl p-5">
//     <h4 className="font-medium">Spring Boot</h4>
//     <p className="mt-2 text-sm text-muted">
//         Building production-ready backend services.
//     </p>
// </div>

// <div className="surface-card rounded-xl p-5">
//     <h4 className="font-medium">System Design</h4>
//     <p className="mt-2 text-sm text-muted">
//         Learning scalable distributed systems.
//     </p>
// </div>

// <div className="surface-card rounded-xl p-5">
//     <h4 className="font-medium">Data Structures</h4>
//     <p className="mt-2 text-sm text-muted">
//         Improving problem solving for software engineering interviews.
//     </p>
// </div>

// <div className="surface-card rounded-xl p-5">
//     <h4 className="font-medium">Artificial Intelligence</h4>
//     <p className="mt-2 text-sm text-muted">
//         Exploring practical AI applications that solve real problems.
//     </p>
// </div>
//             </div>
//           </Reveal>

//           <Reveal delay={0.1}>
//             <div className="surface-card rounded-2xl p-6">
//               <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">Quick facts</h3>
//               <dl className="mt-5 space-y-4 text-sm">
//                 <div className="flex justify-between gap-4">
//                   <dt className="text-subtle">Based in</dt>
//                   <dd className="text-right text-[var(--text)]">{profile.city}</dd>
//                 </div>
//                 <div className="flex justify-between gap-4">
//                   <dt className="text-subtle">Focus</dt>
//                   <dd className="text-right text-[var(--text)]">Backend · Full Stack · AI</dd>
//                 </div>
//                 <div className="flex justify-between gap-4">
//                   <dt className="text-subtle">Languages</dt>
//                   <dd className="text-right text-[var(--text)]">Java, Python, JS, C++</dd>
//                 </div>
//                 <div className="flex justify-between gap-4">
//                   <dt className="text-subtle">Email</dt>
//                   <dd className="text-right text-[var(--text)]">{profile.email}</dd>
//                 </div>
//               </dl>
//             </div>
//           </Reveal>
//         </div>

//         <div className="mt-20">
//           <SectionHeading eyebrow="What drives me" title="Six things I care about." />
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {traits.map((t, i) => (
//               <Reveal key={t.title} delay={i * 0.05}>
//                 <motion.div
//                   whileHover={{ y: -4 }}
//                   className="surface-card h-full rounded-2xl p-6"
//                 >
//                   <t.icon size={22} className="text-accent-500 dark:text-accent-400" />
//                   <h3 className="mt-4 text-lg font-medium">{t.title}</h3>
//                   <p className="mt-2 text-sm text-muted text-pretty">{t.text}</p>
//                 </motion.div>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// **********************
// *****************

import { motion } from 'framer-motion';
import {
  Server,
  Brain,
  Code2,
  GraduationCap,
  Lightbulb,
  Boxes,
  Target,
  Rocket,
  Coffee,
} from 'lucide-react';

import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/profile';

const traits = [
  {
    icon: Server,
    title: 'Backend Engineering',
    text: 'I build APIs and backend systems that are maintainable, scalable, and designed with long-term reliability in mind.',
  },
  {
    icon: Boxes,
    title: 'Software Architecture',
    text: 'I enjoy designing clean application architecture with clear module boundaries and reusable components.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    text: 'I explore practical AI applications that improve user experiences through intelligent automation and analytics.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    text: 'Technology evolves quickly, and I enjoy continuously learning new tools, frameworks, and engineering practices.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    text: 'I enjoy breaking complex problems into smaller, manageable solutions that are simple and maintainable.',
  },
  {
    icon: Code2,
    title: 'Software Craftsmanship',
    text: 'I believe clean, readable code is easier to maintain, debug, and extend than clever code.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about Utkarsh Maheshwari, a Backend Engineer passionate about scalable software, AI, and modern application development."
        path="/about"
      />

      <section className="container-page py-20 sm:py-28">

        <SectionHeading
          eyebrow="About Me"
          title="Backend Engineer passionate about building reliable software."
          description="I enjoy designing scalable backend systems, production-ready APIs, and intelligent applications that solve real-world problems. My focus is building software that is clean, maintainable, and delivers long-term value."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-3">

          {/* LEFT CONTENT */}

          <Reveal className="lg:col-span-2">

            <div className="max-w-3xl space-y-14">

              {/* ====================== */}

              {/* MY STORY */}

              {/* ====================== */}

              <section>

                <h2 className="text-2xl font-semibold">
                  My Story
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="my-5 h-px origin-left bg-gradient-to-r from-accent-500/40 to-transparent"
                />

                <p className="leading-8 text-muted">
                  My journey into software engineering started with curiosity about
                  how applications work behind the scenes. As I explored full stack
                  development, I found myself naturally drawn toward backend
                  engineering because I enjoyed designing APIs, managing databases,
                  solving business logic, and building systems that remain reliable
                  as applications grow.
                </p>

              </section>

              {/* ====================== */}

              {/* WHAT I BUILD */}

              {/* ====================== */}

              <section>

                <h2 className="text-2xl font-semibold">
                  What I Build
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="my-5 h-px origin-left bg-gradient-to-r from-accent-500/40 to-transparent"
                />

                <p className="leading-8 text-muted">
                  I build full-stack applications with a backend-first mindset.
                  My projects range from REST APIs and AI-powered systems to
                  analytics dashboards and modern web applications using
                  Spring Boot, React, Node.js, Python, MySQL, MongoDB,
                  Streamlit, and TypeScript.
                </p>

              </section>

              {/* ====================== */}

              {/* CURRENT FOCUS */}

              {/* ====================== */}

              <section>

                <h2 className="text-2xl font-semibold">
                  Current Focus
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="my-5 h-px origin-left bg-gradient-to-r from-accent-500/40 to-transparent"
                />

                <div className="grid gap-5 sm:grid-cols-2">

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="surface-card rounded-2xl p-6"
                  >
                    <Rocket className="text-accent-500" size={22} />

                    <h3 className="mt-4 font-semibold">
                      Spring Boot
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      Building production-ready backend services and scalable REST APIs.
                    </p>

                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="surface-card rounded-2xl p-6"
                  >
                    <Boxes className="text-accent-500" size={22} />

                    <h3 className="mt-4 font-semibold">
                      System Design
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      Learning scalable distributed systems, architecture, caching,
                      and backend design patterns.
                    </p>

                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="surface-card rounded-2xl p-6"
                  >
                    <Target className="text-accent-500" size={22} />

                    <h3 className="mt-4 font-semibold">
                      DSA Practice
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      Strengthening problem-solving skills through consistent Data
                      Structures and Algorithms practice.
                    </p>

                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="surface-card rounded-2xl p-6"
                  >
                    <Brain className="text-accent-500" size={22} />

                    <h3 className="mt-4 font-semibold">
                      Artificial Intelligence
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      Exploring AI applications that combine machine learning with
                      practical software engineering.
                    </p>

                  </motion.div>

                </div>

              </section>
                            {/* ====================== */}

              {/* BEYOND CODING */}

              {/* ====================== */}

              <section>

                <h2 className="text-2xl font-semibold">
                  Beyond Coding
                </h2>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="my-5 h-px origin-left bg-gradient-to-r from-accent-500/40 to-transparent"
                />

                <p className="leading-8 text-muted">
                  Outside software development, I enjoy participating in hackathons,
                  exploring emerging technologies, reading about software
                  architecture, and continuously improving my engineering skills
                  through hands-on projects. I believe the best way to learn is by
                  building real products and solving meaningful problems.
                </p>

              </section>

            </div>

          </Reveal>

          {/* ====================== */}

          {/* SIDEBAR */}

          {/* ====================== */}

          <Reveal delay={0.15}>

            <div className="sticky top-24 space-y-6">

              <div className="surface-card rounded-2xl p-6">

                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  Engineering Snapshot
                </h3>

                <dl className="mt-6 space-y-5 text-sm">

                  <div className="flex justify-between gap-4">
                    <dt className="text-subtle">Location</dt>
                    <dd>{profile.city}</dd>
                  </div>

                  <div className="flex justify-between gap-4">
                    <dt className="text-subtle">Focus</dt>
                    <dd>Backend • Full Stack • AI</dd>
                  </div>

                  <div className="flex justify-between gap-4">
                    <dt className="text-subtle">Languages</dt>
                    <dd>Java • Python • C++</dd>
                  </div>

                  <div className="flex justify-between gap-4">
                    <dt className="text-subtle">Frameworks</dt>
                    <dd>Spring Boot • React</dd>
                  </div>

                  <div className="flex justify-between gap-4">
                    <dt className="text-subtle">Open To</dt>
                    <dd>Software Engineering Roles</dd>
                  </div>

                  <div className="flex justify-between gap-4">
                    <dt className="text-subtle">Email</dt>
                    <dd className="break-all text-right">
                      {profile.email}
                    </dd>
                  </div>

                </dl>

              </div>

              <motion.div

                whileHover={{
                  y: -5,
                }}

                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 22,
                }}

                className="surface-card rounded-2xl p-6"

              >

                <Coffee
                  size={24}
                  className="text-accent-500"
                />

                <h3 className="mt-4 text-lg font-semibold">
                  Philosophy
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  I believe good software is built through simplicity,
                  maintainability, and thoughtful engineering decisions rather
                  than unnecessary complexity.
                </p>

              </motion.div>

            </div>

          </Reveal>

        </div>

        {/* ====================== */}

        {/* ENGINEERING PRINCIPLES */}

        {/* ====================== */}

        <div className="mt-28">

          <SectionHeading

            eyebrow="Engineering Principles"

            title="How I approach software development."

            description="These principles guide how I design, build, and continuously improve software."

          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {traits.map((trait, index) => (

              <Reveal

                key={trait.title}

                delay={index * 0.05}

              >

                <motion.div

                  whileHover={{

                    y: -8,

                    scale: 1.02,

                  }}

                  transition={{

                    type: 'spring',

                    stiffness: 300,

                    damping: 22,

                  }}

                  className="surface-card h-full rounded-2xl p-7"

                >

                  <div className="inline-flex rounded-xl bg-accent-500/10 p-3">

                    <trait.icon

                      size={22}

                      className="text-accent-500"

                    />

                  </div>

                  <h3 className="mt-5 text-lg font-semibold">

                    {trait.title}

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">

                    {trait.text}

                  </p>

                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

    </>

  );

}