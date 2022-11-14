import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserProps{
  id?:number;
  name?:string;
  age?:number;
}

export class User{
  public eventing: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>()

  constructor(private data: UserProps){}

  get(propName: string):number|string{
    return this.data[propName]
  }
  set(updateUser: UserProps):void{
    Object.assign(this.data, updateUser) 
  }

}