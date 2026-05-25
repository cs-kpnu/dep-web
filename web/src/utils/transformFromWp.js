export const transformActivity = (data, defaultImg) => {
  return data?.map((event) => ({
    id: event.id,
    title: event.title?.rendered || "",
    description: (event.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim(),
    category: event.acf?.category || "",
    date: event.acf?.event_date || "",
    rawDate: event.acf?.event_date,
    author: event.acf?.author_name || "",
    publishedAt: event.acf?.published_at || "",
    imageUrl:
      event._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg,
    links: event.acf?.links
      ? event.acf?.links
          .split(",")
          .map((item) => ({ url: item, text: "Посилання на публікацію" }))
      : [],
  }));
};
