import { FC } from 'react'
import { Project } from '@/components/layout/Projects/projects.data'
import styles from './ProjectCard.module.css'
import classNames from 'classnames'
import { Tag } from '@/components/ui'
import Arrow from '@/assets/img/icons/arrow.svg?react'

interface ProjectCardProps {
  project: Project
  onClick: () => void
  className?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  onClick,
  className
}) => {
  return (
    <div className={classNames(styles.project, className)} onClick={onClick}>
      <div className={styles.content}>
        <img src={project.mainImg} alt={project.title} className={styles.img} />
        <div className={styles.footer}>
          <p className={classNames('p-40', styles.projectTitle)}>
            {project.title}
          </p>
          <div className={styles.tagList}>
            {project.tags.map((tag, index) => (
              <Tag text={tag} isSmall key={`${project.id}-${tag}-${index}`} />
            ))}
          </div>
          <div className={styles.iconContainer}>
            <Arrow className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}
