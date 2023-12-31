export interface profile {
  _id: string;
  username: string;
  email: string;
  Bio: string;
  profilePicture: string;
  name: string;
}

export interface user{
  _id: string;
  username: string;
  email: string;
  Bio: string;
  profilePicture: string;
  name: string;
  isBlocked : boolean
}



export interface Contact {
  id: string;
  name: string;
  checked: boolean;
}

export interface ContactGroup {
  groupLetter: string;
  contacts: Contact[];
}

export interface content {
  content : string,
  createdAt : Date,
  _id : string
}


export interface messages {
  messages : [content],
  recipient : user,
  sender : user,
  _id: string
}
