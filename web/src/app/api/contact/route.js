import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, surname, email, phone, message, type } = body;

        if (!name || !surname || !email || !message || !type) {
            return Response.json({ error: "Заповніть усі обов'язкові поля" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Цифрова кафедра" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `[${type}] Нове звернення від ${name} ${surname}`,
            html: `
                <h2>Нове звернення з сайту</h2>
                <p><strong>Тип звернення:</strong> ${type}</p>
                <p><strong>Ім'я:</strong> ${name} ${surname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Телефон:</strong> ${phone || "не вказано"}</p>
                <hr />
                <p><strong>Повідомлення:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return Response.json({ error: "Не вдалося надіслати повідомлення" }, { status: 500 });
    }
}
