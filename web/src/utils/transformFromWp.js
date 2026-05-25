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

export const transformProject = (data, defaultImg) => {
  return data?.map((item) => ({
    id: item.id,
    title: item.title?.rendered || "",
    description: (item.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim(),
    status: item.acf?.status || "",
    category: item.acf?.category_label || item.acf?.category || "",
    categoryLabel: item?.acf?.category_label || item.acf?.category || "",
    startDate: item.acf?.launch_date || "",
    participants: item.acf?.participants?.split(";").map(item => { 
      item = item.split(",");
      return {
        name: item[0] || 'Admin',
        role: item[1] || 'Mentor',
        profileLink: `${process.env.NEXT_PUBLIC_SITE_URL}/team/1`
      }
    }),
    coverImage: item.acf?.cover_image || item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg,
    imageUrl: item.acf?.cover_image || item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg,
  }));
}