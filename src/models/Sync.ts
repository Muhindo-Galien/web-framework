import axios from "axios";

interface HasId{
  id?:number
}

export class Sync<T extends HasId>{
  fetch(id: number):void{
    axios.get(`http://localhost:3000/users/${id}`)
  }
  save(data: T):void{
    const {id} = data;

    if(id){
      axios.put(`http://localhost:3000/users/${id}`, data)
    }
    else{
      axios.post('http://localhost:3000/users', data)
    }
  }
}