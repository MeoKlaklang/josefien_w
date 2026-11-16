import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.dejowa.be";

const SEO_BY_PATH = {
  "/": {
    title: "Psycholoog in Herent | Dejowa",
    description:
      "Psychologische begeleiding in Herent voor jongeren, volwassenen en koppels. Ontdek de praktijk, werkwijze en praktische informatie.",
  },
  "/over-mij": {
    title: "Over Josefien | Psycholoog in Herent | Dejowa",
    description:
      "Maak kennis met Josefien en haar visie op psychologische begeleiding in Herent.",
  },
  "/werkwijze": {
    title: "Werkwijze | Psychologische begeleiding in Herent | Dejowa",
    description:
      "Lees hoe een begeleidingstraject verloopt en hoe Josefien gedragsgericht werkt met aandacht voor jouw bredere context.",
  },
  "/praktisch": {
    title: "Praktische info & tarieven | Psycholoog Herent | Dejowa",
    description:
      "Bekijk praktische informatie over consultaties, tarieven, annuleren en bereikbaarheid van de praktijk in Herent.",
  },
  "/contact": {
    title: "Contact | Psycholoog in Herent | Dejowa",
    description:
      "Neem contact op met de praktijk voor een vraag over psychologische begeleiding in Herent.",
  },
  "/afspraak": {
    title: "Afspraak maken | Psycholoog in Herent | Dejowa",
    description:
      "Plan een kennismakingsgesprek of vervolggesprek bij de praktijk in Herent.",
  },
};

function setMeta(name, content, attribute = "name") {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[pathname] || SEO_BY_PATH["/"];
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = seo.title;
    document.documentElement.lang = "nl-BE";

    setMeta("description", seo.description);
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("twitter:card", "summary_large_image");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default SeoManager;
