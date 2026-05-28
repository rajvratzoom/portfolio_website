'use client';

import FadeIn from '@/components/FadeIn';

const education = [
  {
    school: 'National University of Singapore',
    degree: 'BSc (Hons) Data Science and Analytics',
    detail: 'Special Program in Science (SPS) multidisciplinary research program',
    date: "Aug '23 – Present",
  },
  {
    school: 'Stanford University',
    degree: 'Management Science & Engineering',
    detail: 'NUS Overseas Entrepreneurship Program',
    date: "Aug '25 – Dec '25",
  },
];

const experience = [
  {
    role: 'Product Manager Intern - AI Applications',
    company: 'Workato Inc',
    location: 'Palo Alto',
    date: "Aug '25 – Present",
    highlights: [
      'Built and owned the retrieval pipeline and evaluation framework for Workato GO, an AI-powered enterprise workflow automation platform; improved search quality by 23% through graph database-backed retrieval and operationalized NDCG as the core metric.',
      "Deployed automated daily evaluation pipelines on EC2 with regression-aware quality gates and structured source provenance tracking, directly informing feature rollout decisions.",
      "Led GO's MCP client product strategy, authoring full PRDs and designing the connections page architecture; conducted structured competitive test matrices against leading AI platforms.",
      "Leading the complete upgrade of Workato GO's model infrastructure to Anthropic Claude; designed a surrogate routing system benchmarking Claude Sonnet/Opus/Haiku against GPT-4.1.",
      "Took ownership of GO's bug fixes and feature enhancements, coordinating across UI, engineering, security, and documentation teams.",
    ],
  },
  {
    role: 'ML Researcher',
    company: 'Satellite Technology and Research (STAR) Centre',
    location: '',
    date: "Jan '25 – May '25",
    highlights: [
      'Redesigned physics-informed neural networks for large-scale satellite trajectory propagation across 8000+ Starlink satellites using a 90GB orbital dataset, reducing orbital deviation error by up to 81%.',
      'Refactored and parallelized a satellite trajectory propagator originally trained on A100 cluster infrastructure, reducing end-to-end training time from 71 days to 13 minutes on a personal GPU.',
      'Led architecture design, ablation studies, and error-envelope validation; awarded Best Research Project at NUS SPS Showcase; manuscript in preparation for publication.',
    ],
  },
  {
    role: 'ML Engineer',
    company: 'OnSchool EdTech Group',
    location: '',
    date: "May '24 – Jul '24",
    highlights: [
      'Built XGBoost and Prophet ensemble forecasting models and designed a constrained budget allocation optimizer.',
      'Increased L1 customer acquisition by 73% within one month by optimizing multi-channel marketing spend.',
    ],
  },
];

const projects = [
  {
    name: 'StarGuard - Autonomous Orbital Defense',
    award: "Treehacks '26 NVIDIA Track Finalist",
    date: "Feb '26",
    highlights: [
      'Fine-tuned two YOLOv8 models on synthetic star-tracker images for satellite detection in low-light orbital conditions.',
      'Implemented custom Unscented Kalman Filter for trajectory estimation; integrated convex optimization for evasive manoeuvre planning.',
      'Integrated vision-language model for contextual adversarial satellite risk assessment; GPU-parallelized orbital simulations.',
      "Invited by NVIDIA's Physical AI team to demo the project for GTC 2026.",
    ],
  },
  {
    name: 'SiteOps - AI Construction Safety Platform',
    award: 'HackHarvard Winner',
    date: "Nov '25",
    highlights: [
      'Built real-time computer vision pipeline for worker proximity monitoring and fall detection using object detection models with spatial distance estimation.',
      'Designed event inference system to translate model outputs into structured safety signals, detecting incidents such as unsafe proximity, fallen workers, and overcrowding.',
    ],
  },
];

const skills = {
  'Machine Learning & Modeling': ['PyTorch', 'YOLOv8', 'XGBoost', 'Optuna', 'Hugging Face'],
  'LLMs & GenAI': ['OpenAI API', 'LangChain', 'RAG pipelines', 'Vector databases', 'Agent orchestration'],
  'Cloud & Infrastructure': ['AWS EC2/S3', 'REST APIs', 'Linux', 'Snowflake'],
  'Programming': ['Python (primary)', 'SQL', 'Java', 'TypeScript'],
  'Scientific Computing': ['NumPy', 'SciPy', 'pandas', 'scikit-learn'],
  'Product & Business': ['Product Management', 'PRD Authoring', 'Cross-functional Team Management', 'Presentation & Public Speaking', 'Tableau'],
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
      <span className="w-8 h-0.5 bg-accent" />
      {children}
    </h2>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-surface border border-border rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}

export default function ResumeContent() {
  return (
    <div className="space-y-12">
      {/* Education */}
      <FadeIn delay={0.1}>
        <section>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-text-primary">{edu.school}</h3>
                  <span className="text-sm text-accent font-medium whitespace-nowrap">{edu.date}</span>
                </div>
                <p className="text-text-primary">{edu.degree}</p>
                {edu.detail && (
                  <p className="text-text-secondary text-sm mt-1">{edu.detail}</p>
                )}
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Work Experience */}
      <FadeIn delay={0.2}>
        <section>
          <SectionTitle>Work Experience</SectionTitle>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <Card key={index}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                    <p className="text-accent">
                      {exp.company}
                      {exp.location && <span className="text-text-secondary"> ({exp.location})</span>}
                    </p>
                  </div>
                  <span className="text-sm text-accent font-medium whitespace-nowrap">{exp.date}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Projects */}
      <FadeIn delay={0.3}>
        <section>
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                    <p className="text-accent text-sm">{project.award}</p>
                  </div>
                  <span className="text-sm text-accent font-medium whitespace-nowrap">{project.date}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        <svg className="w-1.5 h-1.5 fill-current" viewBox="0 0 6 6">
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Skills */}
      <FadeIn delay={0.4}>
        <section>
          <SectionTitle>Skills</SectionTitle>
          <Card>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-background text-text-secondary rounded-full border border-border hover:border-accent/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </FadeIn>
    </div>
  );
}
