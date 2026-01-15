import { FC, useState } from 'react'
import styles from './Projects.module.css'
import { SECTIONS } from '@/const/sections'
import { ProjectCard } from '@/components/ui'
import { projects } from '@/components/layout/Projects/projects.data'
import { CaseModal } from '@/components/layout/CaseModal/CaseModal'

interface Props {}

export const Projects: FC<Props> = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null)

  const handleProjectClick = (id: number) => {
    setActiveProjectId(id)
    setModalOpen(true)
  }

  return (
    <section className={'section'} id={SECTIONS.projects}>
      <h2 className={styles.title}>Проекты</h2>
      <div className={styles.projectList}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </div>

      {isModalOpen && activeProjectId && (
        <CaseModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          id={activeProjectId}
        />
      )}
    </section>
  )
}
