// Photography shoots shown on /our-work/ (Photography & Videography).
// Picked from the full shoot folders in Fielmente's Google Drive (Saraaya, Stone Hedge) and saved as
// 1400 px WebP in public/our-work/photography/<key>-<n>.webp.

export type Span = "feature" | "wide" | "tall";

export interface Photo {
  src: string;
  w: number;
  h: number;
  alt: string;
  /** Larger tile in the gallery grid. */
  span?: Span;
}

export interface Shoot {
  key: string;
  name: string;
  place: string;
  /** What we shot. */
  work: string;
  photos: Photo[];
}

const p = (key: string, n: number, alt: string, span?: Span, w = 1400, h = 934): Photo => ({
  src: `/our-work/photography/${key}-${n}.webp`,
  w,
  h,
  alt,
  span,
});

export const SHOOTS: Shoot[] = [
  {
    key: "saraaya",
    name: "Saraaya Glamps",
    place: "Glamping retreat, Dharamshala",
    work: "Tents, interiors, food and the guest experiences that sell the stay: candlelit riverside dinners, stargazing, picnics and movie nights, shot from blue hour into the night.",
    photos: [
      p("saraaya", 1, "Saraaya tents and lounge lit with fairy lights and lanterns at blue hour", "feature"),
      p("saraaya", 2, "Inside a Saraaya luxury tent with a brass chandelier and canopy bed"),
      p("saraaya", 3, "Telescope stargazing set-up with lanterns under a moonlit sky"),
      p("saraaya", 4, "Moonrise over the snow-capped Dhauladhar range above the forest"),
      p("saraaya", 5, "Candlelit riverside dinner for two with a host serving at the table", "wide"),
      p("saraaya", 6, "Fairy-lit canopy and lounge set up beside the river at night"),
      p("saraaya", 7, "Meadow picnic with cushions and wine as a horse grazes behind"),
      p("saraaya", 8, "Cheese board, crackers and white wine at a picnic table"),
      p("saraaya", 9, "Bell tents rising above a field of yellow mustard flowers"),
      p("saraaya", 10, "Tent deck with umbrellas and loungers in the pine forest"),
      p("saraaya", 11, "Two glasses of red wine raised at an open-air movie night"),
      p("saraaya", 12, "Sunburst over a tent deck with lounge chairs and valley views"),
    ],
  },
  {
    key: "stonehedge",
    name: "Stone Hedge",
    place: "Hotels and experiences across Ladakh",
    work: "Hotel exteriors, rooms, pools, food and signature experiences for Stone Hedge and its sister hotels: dune dinners and camel picnics in Nubra, stargazing, Hemis festival, Pangong, cooking sessions, spa and yoga.",
    photos: [
      p("stonehedge", 1, "Private dinner for two on the Nubra sand dunes at sunset", "feature", 1400, 1050),
      p("stonehedge", 2, "Guests with feet in the stream at a camel picnic in Nubra Valley", "wide", 1400, 933),
      p("stonehedge", 3, "Lantern-lit seating on the dunes under a starry Ladakh sky", "wide"),
      p("stonehedge", 4, "Stone Hedge lit at night beneath the mountains and stars"),
      p("stonehedge", 5, "Top-down breakfast spread with fruit, bowls and coffee", "tall", 1333, 1999),
      p("stonehedge", 6, "Hotel facade glowing at dusk with every balcony lit"),
      p("stonehedge", 7, "Stone Hedge reflected in the pond at blue hour", "wide"),
      p("stonehedge", 8, "Aerial view of the hotel among poplars with mountains at sunset", undefined, 1400, 1115),
      p("stonehedge", 9, "Indoor pool under a glass roof"),
      p("stonehedge", 10, "Guest room with a window seat and big mountain-view windows"),
      p("stonehedge", 11, "Freestanding bathtub with a picture window onto the valley", undefined, 1400, 926),
      p("stonehedge", 12, "Breakfast spread with fresh juices served on the lawn"),
      p("stonehedge", 13, "Guests around a bonfire on the courtyard at night"),
      p("stonehedge", 14, "Long dinner table set in the garden below the mountains"),
      p("stonehedge", 15, "Ladakhi dancers in traditional dress performing around a bonfire"),
      p("stonehedge", 16, "Masked cham dancers at the Hemis monastery festival", "wide"),
      p("stonehedge", 17, "Yoga pose on the sand dunes with mountains behind"),
      p("stonehedge", 18, "Guests cycling through a stream on battery-assisted bikes"),
      p("stonehedge", 19, "Aerial view of Pangong Lake's blue water and mountains", "wide", 1400, 1050),
      p("stonehedge", 20, "Evening at the artisan market with lantern-lit seating"),
      p("stonehedge", 21, "Guests at a Ladakhi cooking session with the hotel chefs"),
      p("stonehedge", 22, "Face massage at the hotel spa"),
      p("stonehedge", 23, "Restaurant terrace set for lunch beneath rocky peaks"),
    ],
  },
];

export const PHOTO_COUNT = SHOOTS.reduce((n, s) => n + s.photos.length, 0);
