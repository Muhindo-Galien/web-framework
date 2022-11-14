import { User } from "./models/User";


const user = new User({name:"Galien",age:23})
user.eventing.on("click",()=>{console.log(`Hey Galien!\ni am changed`);
})
user.eventing.trigger('click')
// user.set({name:"Muhindo",age:23})

// user.save()
// user.fetch()

// setTimeout(()=>{
//   console.log(user);
// },4000)