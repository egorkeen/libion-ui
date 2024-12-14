enum GenreType {
  COMEDY = 1,
  MECH = 2,
  PSYCHOLOGICAL = 3,
  SHOUNEN = 4,
  SEINEN = 5,
  THRILLER = 6,
  SCHOOL = 7,
  DRAMA = 8,
  MYSTIC = 9,
  EVERYDAY_LIFE = 10,
  ROMANCE = 11,
  SPORT = 12,
  HORRORS = 13,
  ACTION = 14,
  MARTIAL_ARTS = 15,
  DEMONS = 16,
  GAMES = 17,
  MAGIC = 18,
  MUSIC = 19,
  SHOUJO = 20,
  SUPER_STRENGTH = 21,
  FICTION = 22,
  ETTY = 23,
  VAMPIRES = 24,
  DETECTIVE = 25,
  HISTORICAL = 26,
  ADVENTURE = 27,
  SUPERNATURAL = 28,
  FANTASY = 29,
  CYBERPUNK = 30,
  SHOUJO_AI = 31,
  HAREM = 32,
  JOSEI = 33,
  ISEKAI = 34,
  PARODY = 36,
}

interface OptimizedImage {
  preview: string;
  thumbnail: string;
}

interface GenreImage {
  preview: string;
  thumbnail: string;
  optimized: OptimizedImage;
}

interface Genre {
  id: GenreType;
  name: string;
  image: GenreImage;
  total_releases: number;
}

export { GenreType };
export type { Genre };
