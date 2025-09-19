import cron from "node-cron";
import { getRandomArtwork } from "../services/artServices.ts";
import { sendMail } from "../services/mailServices.ts";

cron.schedule("*/5 * * * *", async () => {
    console.log("🎨 Running daily artwork job...");

    try {
        const artwork = await getRandomArtwork();

        const htmlContent = `
      <h2>🎨 Obra del día</h2>
      <p><strong>Título:</strong> ${artwork.title}</p>
      <p><strong>Artista:</strong> ${artwork.artist}</p>
      <p><strong>Fecha:</strong> ${artwork.date}</p>
      <p><strong>Técnica:</strong> ${artwork.medium}</p>
      <p><strong>Dimensiones:</strong> ${artwork.dimensions}</p>
      <p><strong>Origen:</strong> ${artwork.place_of_origin}</p>
      ${artwork.imageUrl ? `<img src="${artwork.imageUrl}" alt="${artwork.title}" width="400"/>` : ""}
      <p>🔗 <a href="${artwork.apiLink}" target="_blank">Ver más en el AIC</a></p>
    `;

        await sendMail({
            to: "destinatario@test.com",
            subject: `Obra del día: ${artwork.title}`,
            html: htmlContent,
        });

        console.log(`✅ Email sent: ${artwork.title}`);
    } catch (error) {
        console.error("❌ Error in daily artwork job:", error);
    }
});
