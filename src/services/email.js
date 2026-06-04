const nodemailer = require('nodemailer');

function configured() {
    return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

async function sendCodesEmail(userEmail, order, codes) {
    if (!configured()) {
        console.log('[Email] SMTP not configured; skipping delivery email.');
        return false;
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: Number(process.env.SMTP_PORT || 587) === 465,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });

        const lines = codes.map((item) => `${item.product_name}: ${item.code}`).join('\n');
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: userEmail,
            subject: `Your KeyVault order #${order.id}`,
            text: `Thanks for your order.\n\n${lines}\n\nYou can also view your keys in your KeyVault order history.`,
        });
        return true;
    } catch (err) {
        console.error('[Email] Delivery failed:', err.message);
        return false;
    }
}

module.exports = { sendCodesEmail };
