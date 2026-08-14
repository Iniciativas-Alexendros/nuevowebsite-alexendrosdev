export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  locale: string;
  navigation: NavigationItem[];
  footerNavigation: NavigationItem[];
}

export const siteConfig: SiteConfig = {
  siteName: "Alexendros",
  siteUrl: "https://alexendros.dev",
  defaultTitle: "Alexendros",
  defaultDescription: "Sitio web de Alexendros.",
  locale: "es",
  navigation: [
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Stack", href: "/stack" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" },
  ],
  footerNavigation: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/privacidad" },
  ],
};
