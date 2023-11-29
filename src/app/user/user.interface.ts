
export type Address = {
    street:string,
    city:string,
    country:string,
}

export type Users = {
    userId:number,
    username:string,
    password:string,
    fullName:{
        firstName:string,
        lastName:string,
    },
    email:string,
    isactive:boolean,
    hobbies:string[],
    address:Address
}