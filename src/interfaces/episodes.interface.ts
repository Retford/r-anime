export interface Episodes {
    pagination: Pagination;
    data:       DataEpisodes[];
}

export interface DataEpisodes {
    mal_id:         number;
    url:            string;
    title:          string;
    title_japanese: string;
    title_romanji:  string;
    aired:          Date;
    score:          number;
    filler:         boolean;
    recap:          boolean;
    forum_url:      string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
}
