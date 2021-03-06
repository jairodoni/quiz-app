import { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface OptionCardProps {
  id: string;
  correctAnswer: string;
  answerUser: string | undefined;
  content: string;
}

export function AnswerCard({
  id,
  content,
  correctAnswer,
  answerUser,
}: OptionCardProps) {
  const [status, setStatus] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (content === correctAnswer) {
      setStatus(styles.correct);
    }
    if (
      answerUser !== correctAnswer && answerUser === content) {
      setStatus(styles.wrong);
    }
  }, []);

  return (
    <a
      href="#"
      className={`${styles.container} ${status !== undefined ? status : ''}`}
    >
      <label className={styles.alternative}>
        <input
          id={id}
          name="alternative"
          type="radio"
          value={content}
          style={{ display: 'none' }}
        />
        {content}
      </label>
    </a>
  );
}
