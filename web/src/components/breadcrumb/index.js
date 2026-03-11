import Link from "next/link";
import PropTypes from "prop-types";
import { ArrowLeft } from "lucide-react";
import styles from "./style.module.css";

export default function Breadcrumb({ to, text }) {
  return (
    <nav className={styles.breadcrumb}>
      <Link className={styles.breadcrumbLink} href={to}>
        <ArrowLeft />
        <span>{text}</span>
      </Link>
    </nav>
  );
}

Breadcrumb.defaultProps = {
  to: "/",
  text: "Назад",
};

Breadcrumb.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};
