export class Subsidiary {
    constructor(public id: number,
                public name: string,
                public email: string,
                public phone: string,
                private mobile: string,
                private location: string,
                private colony: string,
                private address: string,
                private zip: string,
                private active: string,
                private companyId: number,
                private companyName: string,
                private countryId: number,
                private countryName: string,
                private stateId: number,
                private stateName: string,
                private cityId: number,
                private cityName: string
                ) { }
} 