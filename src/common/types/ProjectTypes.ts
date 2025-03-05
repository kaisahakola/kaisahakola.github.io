export interface ProjectItem {
    title: string;
    links: { url: string; text: string }[];
    images?: {url: string; width: string; height: string; type: ImageType}[];
    technologies: string[];
    myRole?: string;
    description: string;
}

export type ImageType = "desktop" | "mobile";