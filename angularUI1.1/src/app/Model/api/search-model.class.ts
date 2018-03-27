export class SearchModel<T>{
    constructor(
        public search: T = undefined,
        public results: T[] = []
    ) { }
}