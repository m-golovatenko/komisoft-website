import { FC } from 'react'
import styles from './Projects.module.css'
import classNames from 'classnames'
import { SECTIONS } from '@/const/sections'
import { Tag } from '@/components/ui'
import Arrow from '@/assets/img/icons/arrow.svg?react'
import { projects } from '@/components/layout/Projects/projects.data'

interface Props {}

export const Projects: FC<Props> = () => {
  return (
    <section className={'section'} id={SECTIONS.projects}>
      <h2 className={styles.title}>Проекты</h2>
      <div className={styles.projectList}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <div className={styles.content}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.img}
              />
              <div className={styles.footer}>
                <p className={classNames('p-40', styles.projectTitle)}>
                  {project.title}
                </p>
                <div className={styles.tagList}>
                  {project.tags.map((tag, index) => (
                    <Tag
                      text={tag}
                      isSmall
                      key={`${project.id}-${tag}-${index}`}
                    />
                  ))}
                </div>
                <div className={styles.iconContainer}>
                  <Arrow className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}