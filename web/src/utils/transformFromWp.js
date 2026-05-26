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

export const transformProject = (item, defaultImg) => {
  return {
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
  };
}

export const transformProjects = (data, defaultImg) => {
  return data?.map((item) => transformProject(item, defaultImg))
}

export const transformMember = (item, defaultImg) => {
  const acf = item.acf || {};

  const parseCSV = (str) =>
    str ? str.split(",").map((s) => s.trim()).filter(Boolean) : [];

  const parseSlashItems = (str, mapper) =>
    str ? str.split("/").map((s) => s.trim()).filter(Boolean).map(mapper) : [];

  return {
    id: item.id,
    slug: item.slug || "",
    name: item.title?.rendered || "",
    bio: (item.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim(),
    birthDate: acf.birth_date || "",
    role: acf.role || "",
    status: acf.status || "",
    degree: acf.degree || "",
    joinDate: acf.join_date || "",
    photo: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg,
    skills: {
      hard: parseCSV(acf.skills_hard),
      soft: parseCSV(acf.skills_soft),
    },
    languages: parseSlashItems(acf.languages, (entry) => {
      const [name, level] = entry.split(",").map((s) => s.trim());
      return { name: name || "", level: level || "" };
    }),
    publications: parseSlashItems(acf.publications, (entry) => {
      const [name, url] = entry.split(",").map((s) => s.trim());
      return { name: name || "", url: url || "" };
    }),
    projects: parseSlashItems(acf.member_projects, (entry) => {
      const [name, id] = entry.split(",").map((s) => s.trim());
      return { id: id || "", name: name || "" };
    }),
  };
}

export const transformMembers = (data, defaultImg) => {
  return data?.map((item) => transformMember(item, defaultImg))
}
