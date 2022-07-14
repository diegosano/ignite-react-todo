import styles from './Checkbox.module.css'

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export function Checkbox( { checked, onChange }: CheckboxProps) {
  return (
  <label className={styles.container}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span className={styles.checkmark}></span>
  </label>
  )
}