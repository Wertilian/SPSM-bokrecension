export class Review {
    id: number | null;
    bokNamn!: string;
    recensionsText!: string;
    foerfattarNamn: string;

    constructor(review: Partial<Review> = {}) {
        this.id = review?.id || null;
        this.bokNamn = review?.bokNamn || "";
        this.recensionsText = review?.recensionsText || "";
        this.foerfattarNamn = review?.foerfattarNamn || "";
    }
}
