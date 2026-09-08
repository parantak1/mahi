export interface HighlightItem {
  id: string;
  title: string;
  category: 'COLLABS' | 'Vrindavan 📍' | 'PR' | 'her.';
  doodle: string;
  iconName: string;
  coverImage: string;
  tapeColor: string;
  rotation: number;
  date: string;
  caption: string;
  stories: {
    id: string;
    image: string;
    caption: string;
    timeAgo: string;
    tag?: string;
  }[];
}

export interface MediaPost {
  id: string;
  type: 'reel' | 'instagram' | 'youtube';
  title: string;
  caption: string;
  thumbnail: string;
  views?: string;
  likes?: string;
  comments?: string;
  duration?: string;
  isViral?: boolean;
  link: string;
  date: string;
  aspectRatio?: 'portrait' | 'square' | 'video';
  tags: string[];
  tapeColor?: string;
  pinColor?: string;
  rotation?: number;
}

export interface VisitorNote {
  id: string;
  name: string;
  message: string;
  sticker: string;
  color: string;
  rotation: number;
  date: string;
}
