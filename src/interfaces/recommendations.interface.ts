export interface Recommendations {
    pagination: Pagination;
    data:       DataRecommendation[];
}

export interface DataRecommendation {
    mal_id:  string;
    entry:   Entry[];
    content: string;
    date:    Date;
    user:    User;
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

export interface User {
    url:      string;
    username: string;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
}
