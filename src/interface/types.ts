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
