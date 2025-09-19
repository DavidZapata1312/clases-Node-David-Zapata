import axios from "axios";

export const getRandomArtwork = async () => {
    const res = await axios.get("https://api.artic.edu/api/v1/artworks?page=1&limit=100");
    const artworks = res.data.data;

    if (!artworks || artworks.length === 0) {
        throw new Error("No artworks found");
    }

    const randomIndex = Math.floor(Math.random() * artworks.length);
    const artwork = artworks[randomIndex];

    // La API separa la imagen: necesitamos `image_id` para armar la URL
    const imageUrl = artwork.image_id
        ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
        : null;

    return {
        title: artwork.title,
        artist: artwork.artist_title || "Unknown",
        date: artwork.date_display || "Unknown",
        medium: artwork.medium_display || "Unknown",
        dimensions: artwork.dimensions || "Unknown",
        place_of_origin: artwork.place_of_origin || "Unknown",
        imageUrl,
        apiLink: artwork.api_link,
    };
};
