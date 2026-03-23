import { useState,  useRef, useEffect  } from "react";
import styles from './custom-select.module.css'


export default function CustomSelect({ value, onChange, options, placeholder }) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabel = options.find((o) => o.value === value)?.label;

    return (
        <div ref={wrapperRef} className={styles["custom-select-wrapper"]}>
            <div
                className={`${styles["custom-select-trigger"]} ${value ? styles["selected"] : ""} ${open ? styles["open"] : ""}`}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span>{selectedLabel || placeholder}</span>
                <svg
                    className={`${styles["custom-select-arrow"]} ${open ? styles["open"] : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
            {open && (
                <div className={styles["custom-select-dropdown"]}>
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            className={`${styles["custom-select-option"]} ${value === opt.value ? styles["active"] : ""}`}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}