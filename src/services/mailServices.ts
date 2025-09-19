import nodemailer from "nodemailer";

export const sendMail = async ({
                                   to,
                                   subject,
                                   html,
                               }: {
    to: string;
    subject: string;
    html: string;
}) => {
    const transporter = nodemailer.createTransport({
        service: "gmail", // puedes cambiar si usas otro
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Art Bot 🎨" <${process.env.MAIL_USER}>`,
        to,
        subject,
        html,
    });
};
