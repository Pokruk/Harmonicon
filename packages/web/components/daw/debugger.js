import { useState } from 'react';

import styles from '../../styles/daw.debugger.module.css';

export function Debugger ({ controller }) {
  const [ loaded, setLoaded ] = useState(false);
  const [ error, setError ] = useState();

  if (!loaded) {
    controller.on('error', setError);
    setLoaded(true);
  }

  if (!error) {
    return '';
  }

  const details = error.error ? error.error.stack.split("\n") : [];

  return (
    <div
      className={styles.debugger}
      onClick={() => (setError())}
    >
      <div className={styles.debuggerSummary}>
        {error.message}
      </div>
      <div className={styles.debuggerDetails}>
        {details.slice(1, 3).map((line) => {
          return (
            <div>{line}</div>
          );
        })}
      </div>
    </div>
  )
}