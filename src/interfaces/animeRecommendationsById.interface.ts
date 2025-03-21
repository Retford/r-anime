export interface AnimeRecommendationsById {
    data: DataAnimeRecommendationsById[];
}

export interface DataAnimeRecommendationsById {
    entry: Entry;
    url:   string;
    votes: number;
}

export interface Entry {
    mal_id: number;
    url:    string;
    images: { [key: string]: Image };
    title:  string;
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}
