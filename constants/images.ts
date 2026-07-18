

export const IMAGES: Record<string, string> = {
  PROJECT_NORTHWIND: "/80b80db9-5472-4e5c-91e1-09bfcef8ccc4.jpg",
  PROJECT_LUMEN: "/f4326ad9-4fb9-488e-9fcd-c2dffa3c2af8.jpg",
  PROJECT_VERTEX: "/3d4a654d-d018-4e89-98dd-8db47647ae36.jpg",
  PROJECT_CASCADE: "/1fa0da71-de38-41c2-b608-577a61facba6.jpg"
};

export function img(key: string): string {
  return IMAGES[key] ?? key;
}