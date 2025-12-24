import { FC } from 'react'
import styles from './Projects.module.css'
import classNames from 'classnames'
import { SECTIONS } from '@/const/sections'
import { Tag } from '@/components/ui'
import { projects } from '@/const/projects'



interface Props {}

export const Projects: FC<Props> = () => {
  return (
    <section className={styles.container} id={SECTIONS.projects}>
      <h2 className={styles.title}>Проекты</h2>
      <div className={styles.projectList}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <div className={styles.content}>
              <div className={styles.img}></div>
              <div className={styles.footer}>
                <p className={classNames('p-40', styles.projectTitle)}>
                  {project.title}
                </p>
                <div className={styles.tagList}>
                  {project.tags.map((tag) => (
                    <Tag text={tag} isSmall key={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}