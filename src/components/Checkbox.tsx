import styles from './Checkbox.module.css';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
}

export function Checkbox({ id, checked, onChange }: CheckboxProps) {
  return (
    <label htmlFor={id} className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
      />
      <span className={styles.checkmark} />
    </label>
  );
}
