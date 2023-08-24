export interface group {
    _id : string,
    name:string,
    profilePicture : string,
    members : [],
    createdBy : string,
    createdAt : Date
}


export interface createGroup {
    name : String;
    members : [],
    description : string
}