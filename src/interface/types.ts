interface Hitzone {
  x: string;
  y: string;
  goto: number;
}

export interface Scene {
  id: number;
  background_url: string;
  hitzones: Hitzone[];
}

export const Scenes = [
  {
    id: 0,
    background_url: "/img/m1.jpg",
    hitzones: [{ x: "21%", y: "20%", goto: 1 }],
  },
  {
    id: 1,
    background_url: "/img/m2.jpg",
    hitzones: [
      { x: "68%", y: "80%", goto: 0 },
      { x: "25%", y: "20%", goto: 2 },
    ],
  },
  {
    id: 2,
    background_url: "/img/m3.jpg",
    hitzones: [
      { x: "74%", y: "80%", goto: 1 },
      { x: "12%", y: "20%", goto: 3 },
    ],
  },
  {
    id: 3,
    background_url: "/img/m4.jpg",
    hitzones: [
      { x: "23%", y: "80%", goto: 2 },
      { x: "70%", y: "20%", goto: 4 },
    ],
  },
  {
    id: 4,
    background_url: "/img/m5.jpg",
    hitzones: [
      { x: "15%", y: "80%", goto: 3 },
      { x: "70%", y: "20%", goto: 5 },
    ],
  },
  {
    id: 5,
    background_url: "/img/m6.jpg",
    hitzones: [
      { x: "12%", y: "80%", goto: 4 },
      { x: "50%", y: "20%", goto: 6 },
      { x: "80%", y: "20%", goto: 7 },
    ],
  },
  {
    id: 6,
    background_url: "/img/m7.jpg",
    hitzones: [{ x: "18%", y: "20%", goto: 5 }],
  },
  {
    id: 7,
    background_url: "/img/m8.jpg",
    hitzones: [
      { x: "27%", y: "80%", goto: 6 },
      { x: "80%", y: "20%", goto: 9 },
      { x: "63%", y: "20%", goto: 8 },
    ],
  },
  {
    id: 8,
    background_url: "/img/m9.jpg",
    hitzones: [
      { x: "10%", y: "20%", goto: 9 },
      { x: "45%", y: "80%", goto: 7 },
    ],
  },
  {
    id: 9,
    background_url: "/img/m10.jpg",
    hitzones: [
      { x: "32%", y: "30%", goto: 7 },
      { x: "48%", y: "30%", goto: 8 },
    ],
  },
];
