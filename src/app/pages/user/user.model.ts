export class User {
    constructor(public id: string,
                public name: string,
                public email: string,
                public phone: string,
                public role: string,
                public subsidiary: string,
                public password: string,
                public password1: string,
                public active: boolean
                ) { }
} 