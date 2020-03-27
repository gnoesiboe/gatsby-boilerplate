export type PlatformOverviewItem = {
    id: string;
    title: string;
    slug: string;
};

export type PlatformOverviewItemCollection = PaginatedCollection<
    PlatformOverviewItem
>;

export type PaginatedCollection<T> = {
    totalNoOfResults: number;
    items: T[];
    noOfResultsPerPage: number;
    startIndex: number;
};
