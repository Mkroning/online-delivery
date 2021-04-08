import { Address } from 'expo-location'

export interface Category {
  title: String,
  icon: String
}

export interface Service{
  _id:string;
  name:string;
  description:string;
  category:string;
  price:number;
  readyTime:number;
  image: [string]
}

export interface Provider{
  _id:string;
  name:string;
  serviceType:string;
  address: string;
  phone:string;
  images:string;
  foods:[Service]
}

export interface ServiceAvailability{
  categories: [Category];
  providers: [Provider];
  services:[Service];
}


export interface UserModel {
  firstName: string;
  lastName:string;
  contactNumber: string;
  token:string
}

export interface UserState{
  user:UserModel;
  location: Address
}
