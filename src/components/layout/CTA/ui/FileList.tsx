import { FC } from 'react'
import classNames from 'classnames'
import PDF from '@/assets/img/icons/formats/pdf.svg?react'
import Cancel from '@/assets/img/icons/cancel.svg?react'
import styles from '../CTA.module.css'

interface FileListProps {
  files: File[]
  removeFile: (index: number) => void
}

export const Files: FC<FileListProps> = ({ files, removeFile }) => {
  if (!files.length) return null

  return (
    <ul className={styles.fileList}>
      {files.map((file, index) => (
        <li key={`${file.name}-${index}`} className={styles.fileItem}>
          <div className={styles.formatIconContainer}>
            <PDF className={styles.formatIcon} />
          </div>
          <p className={classNames(styles.fileName, 'p-16')}>{file.name}</p>
          <button
            type='button'
            className={styles.cancelContainer}
            onClick={() => removeFile(index)}
          >
            <Cancel className={styles.cancelIcon} />
          </button>
        </li>
      ))}
    </ul>
  )
}
