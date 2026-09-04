const PATTERNS = [
  /youtu\.be\/([\w-]{11})/,
  /youtube\.com\/watch\?v=([\w-]{11})/,
  /youtube\.com\/shorts\/([\w-]{11})/,
  /youtube\.com\/embed\/([\w-]{11})/,
];

export function getYouTubeId(url: string): string | null {
  for (const pattern of PATTERNS) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function getYouTubeThumbnail(url: string, quality: 'hqdefault' | 'maxresdefault' = 'hqdefault'): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/${quality}.jpg` : null;
}
