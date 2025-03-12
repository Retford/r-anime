export interface SeasonsList {
    pagination: Pagination;
    data:       DataSeasonsList[];
}

export interface DataSeasonsList {
    year:    number;
    seasons: Season[];
}

export enum Season {
    Fall = "fall",
    Spring = "spring",
    Summer = "summer",
    Winter = "winter",
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
}
