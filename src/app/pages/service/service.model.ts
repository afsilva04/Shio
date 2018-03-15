export class Service {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public codbar: string,
        public commission,
        public active,
        public price,
        public time
    ) { }
}