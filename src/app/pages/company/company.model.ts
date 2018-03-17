export class Company {
    constructor(
        public id: number,
        public name: string,
        public rfc: string,
        public certificate: string,
        public location: string,
        public colony: string,
        public address: string,
        public zip: string,
        public countryId: number,
        public countryName: string,
        public stateId: number,
        public stateName: string,
        public cityId: number,
        public cityName: string
    ) { }
}