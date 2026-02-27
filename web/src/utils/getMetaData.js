
export const getMetadata = ({
    description = "Навчайся. Cтворюй. Надихай!",
    title = "Цифрова кафедра!",
    images,
    url,
    pageTitle,
    alternates,
    type = "website",
    ...rest
}) => {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bogemia.ua";
    const imageUrl = "/assets/img/bogemia-opengraph.png";

    // Ensure image URL is absolute
    const resolvedImageUrl = images
        ? images.startsWith("http")
            ? images
            : `${siteUrl}${images.startsWith("/") ? "" : "/"}${images}`
        : `${siteUrl}${imageUrl}`;

    return {
        title: pageTitle ?? title,
        description,
        metadataBase: new URL(siteUrl),
        alternates,
        openGraph: {
            type,
            title,
            description,
            images: [
                {
                    url: resolvedImageUrl,
                    width: 1200,
                    height: 630,
                },
            ],
            url: url ?? siteUrl,
            siteName: "Welcome CS",
            locale: "uk_UA",
        },
        ...rest,
    };
};
