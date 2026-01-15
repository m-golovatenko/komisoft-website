import { FC, useEffect, useMemo, useRef, useState } from 'react'
import { Modal } from '@/components/ui/Modal/Modal'
import styles from './CaseModal.module.css'
import { projects } from '@/components/layout/Projects/projects.data'
import Close from '@/assets/img/icons/cancel.svg?react'
import classNames from 'classnames'
import { ProjectCard } from '@/components/ui'

interface CaseModalProps {
  isOpen: boolean
  onClose: () => void
  id: number
}

export const CaseModal: FC<CaseModalProps> = ({ isOpen, onClose, id }) => {
  const [activeProjectId, setActiveProjectId] = useState(id)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const projectCase = useMemo(
    () => projects.find(p => p.id === activeProjectId),
    [activeProjectId]
  )

  const currentIndex = projects.findIndex(
    project => project.id === activeProjectId
  )

  const nextProject =
    currentIndex !== -1 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null

  const handleNextProjectClick = (id: number) => {
    setActiveProjectId(id)
  }

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [activeProjectId])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div ref={contentRef} className={styles.content}>
        <div className={styles.header}>
          <p className={classNames('p-32', styles.caseName)}>
            {projectCase?.title}
          </p>
          <div className={styles.iconContainer} onClick={onClose}>
            <Close className={styles.close} />
          </div>
        </div>

        <div className={styles.hero}>
          <div className={styles.mainImg}></div>
        </div>

        {projectCase?.meta && (
          <div className={styles.meta}>
            {projectCase.meta.map(meta => (
              <div key={meta.id} className={styles.metaItem}>
                <p className={'p-16'}>{meta.label}</p>
                <p className={classNames('p-32', styles.metaValue)}>
                  {meta.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {projectCase?.summary && (
          <div className={styles.summary}>
            <div className={styles.textContainer}>
              <p className={'p-24'}>{projectCase.summary.description}</p>
              <a
                className={classNames(styles.link, 'p-16')}
                href={projectCase.summary.cta?.url}
              >
                <span>{projectCase.summary.cta?.label}</span>
              </a>
            </div>
            {projectCase.summary.img && (
              <div className={styles.summaryImg}></div>
            )}
          </div>
        )}

        {projectCase?.gallery && (
          <div className={styles.gallery}>
            {projectCase.gallery.map(img => (
              <div key={img.id} className={styles.imgItem}></div>
            ))}
          </div>
        )}

        {nextProject && (
          <div
            className={styles.nextProject}
            onClick={() => setActiveProjectId(nextProject.id)}
          >
            <h3 className={styles.nextProjectTitle}>Следующий проект</h3>
            <ProjectCard
              project={nextProject}
              onClick={() => handleNextProjectClick(nextProject?.id)}
              className={styles.nextProjectCard}
            />
          </div>
        )}
      </div>
    </Modal>
  )
}
