import { motion } from 'framer-motion';
import { FiClock, FiLayers } from 'react-icons/fi';
import { useIsMobile } from '../../hooks/useIsMobile';
import { aboutExperienceData } from '../../content/portfolioMock';
import Pill from '../../components/common/Pill';
import SectionContainer from '../../components/common/SectionContainer';
import SectionHeader from '../../components/common/SectionHeader';
import SectionSubtitle from '../../components/common/SectionSubtitle';

const AboutExperienceSection = () => {
  const isMobile = useIsMobile();

  return (
    <SectionContainer id='experience-about' className='pb-20 md:pb-28'>
      <div className='space-y-10'>
        <SectionHeader
          label={aboutExperienceData.sectionTitle}
          title={aboutExperienceData.aboutTitle}
          lead={aboutExperienceData.sectionLead}
        />

        <div className='grid gap-8 lg:grid-cols-[0.3fr_0.7fr]'>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: isMobile ? 0.05 : 0.25 }}
            transition={{ duration: 0.55 }}
            className='order-2 lg:order-1 overflow-hidden rounded-2xl border border-border/70 bg-panel/70'>
            <img
              src={aboutExperienceData.aboutImage}
              alt={aboutExperienceData.aboutImageAlt}
              className='h-60 w-full object-cover md:h-72'
            />
            <div className='space-y-4 p-6'>
              <Pill icon={<FiLayers />}>About me</Pill>
              <div className='flex flex-col gap-4'>
                {aboutExperienceData.aboutBody.map((paragraph, index) => (
                  <p key={index} className='text-[15px] md:text-base leading-relaxed text-muted'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>

          <div className='order-1 lg:order-2 space-y-4'>
            <SectionSubtitle title={aboutExperienceData.experienceTitle} />
            <div className='grid gap-4'>
              {aboutExperienceData.experiences.map(experience => (
                <motion.article
                  key={experience.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: isMobile ? 0.05 : 0.2 }}
                  transition={{ duration: 0.45 }}
                  className='grid gap-4 py-8 rounded-2xl border border-border/70 bg-panel/70 p-4 sm:grid-cols-[10rem_1fr]'>
                  <img
                    src={experience.image}
                    alt={experience.imageAlt}
                    className='h-36 w-full shrink-0 self-center rounded-xl object-contain p-3 bg-surface/40 sm:h-48'
                  />
                  <div className='space-y-3'>
                    <div className='flex flex-wrap items-start justify-between gap-3'>
                      <h4 className='font-display text-xl leading-tight text-text font-semibold'>
                        {experience.role}{' '}
                        <span className='ml-[3px] text-accent font-medium'>
                          @{' '}
                          {experience.companyUrl ? (
                            <a
                              href={experience.companyUrl}
                              target='_blank'
                              rel='noreferrer'
                              className='underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent hover:text-accentSoft'>
                              {experience.company}
                            </a>
                          ) : (
                            experience.company
                          )}
                        </span>
                      </h4>
                      <Pill icon={<FiClock />}>{experience.period}</Pill>
                    </div>
                    <p className='text-sm leading-relaxed text-muted'>{experience.summary}</p>

                    {experience.achievements && experience.achievements.length > 0 && (
                      <ul className='flex flex-col gap-1.5 list-disc pl-4'>
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className='text-sm leading-relaxed text-muted marker:text-accent'>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className='flex flex-wrap gap-2 pt-1'>
                      {experience.stack.map(skill => (
                        <li
                          key={`${experience.id}-${skill}`}
                          className='rounded-lg border border-border/70 bg-surface/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-muted'>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutExperienceSection;
