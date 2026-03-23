"use client";

import { useState} from "react";
import Image from "next/image";
import TextImg from "@/assets/img/Text.svg";
import styles from "./page.module.css";

import CustomSelect from './CustomSelect';



const TYPE_OPTIONS = [
    { value: "Запит на послуги", label: "Запит на послуги" },
    { value: "Приєднуйтесь до команди", label: "Приєднуйтесь до команди" },
    { value: "Інший запит", label: "Інший запит" },
];

export default function ContactForm() {
    const [type, setType] = useState("");
    const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            type,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
            phone: form["phone-num"].value,
            message: form.message.value,
        };

        if (!type) {
            setErrorMsg("Будь ласка, оберіть тип звернення");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || "Помилка");
            setStatus("success");
            form.reset();
            setType("");
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message);
        }
    }

    return (
        <form className={styles["form"]} onSubmit={handleSubmit}>
            <label htmlFor="type-select">ТИП ЗВЕРНЕННЯ<Image className={styles.img} src={TextImg} alt="Text" /></label>
            <CustomSelect
                value={type}
                onChange={setType}
                options={TYPE_OPTIONS}
                placeholder="Оберіть тип звернення"
            />

            <label htmlFor="name">Ім'я<Image className={styles.img} src={TextImg} alt="Text" /></label>
            <input type="text" id="name" name="name" placeholder="Введіть ваше ім'я" required />

            <label htmlFor="surname">Прізвище<Image className={styles.img} src={TextImg} alt="Text" /></label>
            <input type="text" id="surname" name="surname" placeholder="Введіть ваше прізвище" required />

            <label htmlFor="email">Адреса електронної пошти<Image className={styles.img} src={TextImg} alt="Text" /></label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

            <label htmlFor="phone-num">Мобільний телефон</label>
            <input type="tel" id="phone-num" name="phone-num" placeholder="+38 XX XXX XX XX" />

            <label htmlFor="message">Зміст послуги на яку створюється запит<Image className={styles.img} src={TextImg} alt="Text" /></label>
            <textarea id="message" name="message" required></textarea>

            <div className={styles["checkbox-container"]}>
                <input type="checkbox" id="checkbox" name="checkbox" required />
                <label htmlFor="checkbox">Надаю згоду на обробку персональних даних</label>
            </div>

            {status === "success" && (
                <p className={styles["form-success"]}>Повідомлення успішно надіслано!</p>
            )}
            {status === "error" && (
                <p className={styles["form-error"]}>{errorMsg || "Виникла помилка. Спробуйте ще раз."}</p>
            )}

            <button
                className={styles["form-button"]}
                type="submit"
                disabled={status === "loading"}
            >
                {status === "loading" ? "Надсилання..." : "Надіслати"}
            </button>
        </form>
    );
}
