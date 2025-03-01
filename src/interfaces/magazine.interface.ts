export interface Magazines {
    pagination: Pagination;
    data:       DataMagazine[];
}

export interface DataMagazine {
    mal_id: number;
    name:   string;
    url:    string;
    count:  number;
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
    current_page:      number;
    items:             Items;
}

export interface Items {
    count:    number;
    total:    number;
    per_page: number;
}
