

export const IMAGES: Record<string, string> = {
  HERO_TEAM: "/ahamic_team_collaboration.jpg",
  HERO_DASHBOARD: "/ahamic_light_dashboard.jpg",
  PROJECT_NORTHWIND: "/ahamic_light_dashboard.jpg",
  PROJECT_LUMEN: "/f4326ad9-4fb9-488e-9fcd-c2dffa3c2af8.jpg",
  PROJECT_VERTEX: "/ahamic_light_dashboard.jpg",
  PROJECT_CASCADE: "/1fa0da71-de38-41c2-b608-577a61facba6.jpg"
};

export function img(key: string): string {
  return IMAGES[key] ?? key;
}