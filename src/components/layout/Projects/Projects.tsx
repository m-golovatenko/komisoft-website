import { FC } from 'react'
import styles from './Projects.module.css'
import classNames from 'classnames'

interface Project {
  id: string
  title: string
  tags: string[]
}

interface Props {}

export const Projects: FC<Props> = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Synchro',
      tags: ['GameDev']
    },
    {
      id: '2',
      title: 'Атм альянс',
      tags: ['B2B', 'Enterprise', 'Fullstask']
    },
    {
      id: '3',
      title: 'CLOUDMAPS',
      tags: ['Enterprise', 'Mobile']
    },
    {
      id: '4',
      title: 'deeptasker',
      tags: ['Fullstack']
    },
    {
      id: '5',
      title: 'Сушиман',
      tags: ['B2B']
    },
    {
      id: '6',
      title: 'Cобрать русь',
      tags: ['Enterprise', 'Mobile']
    }
  ]
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Проекты</h2>
      <div className={styles.projectList}>
        {projects.map(project => (
          <div key={project.id} className={styles.project}>
            <div className={styles.content}>
              <div className={styles.img}></div>
              <div className={styles.footer}>
                <p className={classNames('p-32', styles.projectTitle)}>
                  {project.title}
                </p>
                <div className={styles.tagList}>
                  {project.tags.map((tag, index) => (
                    <p key={index} className={classNames(styles.tag, 'p-16')}>
                      {tag}
                    </p>
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