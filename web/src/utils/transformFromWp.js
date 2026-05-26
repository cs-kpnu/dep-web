const parseCSV = (str, mapper = (s) => s.trim()) =>
  str ? str.split(",").map((s) => s.trim()).filter(Boolean).map(mapper) : [];

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
      ? parseCSV(event.acf?.links, (item) => ({ url: item, text: "Посилання на публікацію" }))
      : [],
  }));
};

export const transformProject = (item, defaultImg) => {
  const coverImage = item.acf?.cover_image || item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg;
  return {
    id: item.id,
    slug: item.slug || "",
    title: item.title?.rendered || "",
    description: item.content?.rendered || "",
    status: item.acf?.status || "",
    category: item.acf?.category_label || item.acf?.category || "",
    categoryLabel: item.acf?.category_label || item.acf?.category || "",
    launchDate: item.acf?.launch_date || "",
    technologies: item.acf?.technologies || "",
    participants: item.acf?.participants
      ? item.acf?.participants?.split(";").map((entry) => {
        const [name, role, profileLink] = parseCSV(entry);
        return {
          name: name || "",
          role: role || "",
          profileLink: profileLink || `${process.env.NEXT_PUBLIC_SITE_URL}/team`,
        };
      })
      : [],
    coverImage,
    imageUrl: coverImage,
  };
}

export const transformProjects = (data, defaultImg) => {
  return data?.map((item) => transformProject(item, defaultImg))
}

export const transformMember = (item, defaultImg) => {
  const acf = item.acf || {};

  const parseSlashItems = (str, mapper) =>
    str ? str.split("/").map((s) => s.trim()).filter(Boolean).map(mapper) : [];

  return {
    id: item.id,
    slug: item.slug || "",
    name: item.title?.rendered || "",
    photo: item.acf?.cover_image || item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || defaultImg,
    bio: item.content?.rendered || "",
    birthDate: acf.birth_date || "",
    role: acf.role || "",
    status: acf.status || "",
    degree: acf.degree || "",
    joinDate: acf.join_date || "",
    skills: {
      hard: parseCSV(acf.skills_hard),
      soft: parseCSV(acf.skills_soft),
    },
    languages: parseSlashItems(acf.languages, (entry) => {
      const [name, level] = parseCSV(entry);
      return { name: name || "", level: level || "" };
    }),
    publications: parseSlashItems(acf.publications, (entry) => {
      const [name, url] = parseCSV(entry);
      return { name: name || "", url: url || "" };
    }),
    projects: parseSlashItems(acf.member_projects, (entry) => {
      const [name, id] = parseCSV(entry);
      return { id: id || "", name: name || "" };
    }),
  };
}

export const transformMembers = (data, defaultImg) => {
  return data?.map((item) => transformMember(item, defaultImg))
}
