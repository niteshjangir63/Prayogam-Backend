import mongoose from "mongoose";
import Millet from "../models/Millet.js";

const millets = [

{
name:"Organic Ragi",
description:"Fresh chemical-free ragi grown naturally",
category:"Ragi",
price:60,
quantity:100,
location:"Surat",
organic:true,
images:["uploads/ragi1.jpg"]
},

{
name:"Premium Bajra",
description:"High quality bajra perfect for rotis",
category:"Bajra",
price:45,
quantity:150,
location:"Ahmedabad",
organic:false,
images:["uploads/bajra1.jpg"]
},

{
name:"Farm Fresh Jowar",
description:"Healthy jowar directly from farmer",
category:"Jowar",
price:50,
quantity:120,
location:"Rajkot",
organic:true,
images:["uploads/jowar1.jpg"]
},

{
name:"Foxtail Millet",
description:"Highly nutritious millet",
category:"Foxtail Millet",
price:90,
quantity:80,
location:"Vadodara",
organic:true,
images:["uploads/foxtail1.jpg"]
},

{
name:"Little Millet",
description:"Best for healthy diet",
category:"Little Millet",
price:85,
quantity:60,
location:"Bhavnagar",
organic:false,
images:["uploads/little1.jpg"]
},

{
name:"Kodo Millet",
description:"Rich in fiber and minerals",
category:"Kodo Millet",
price:95,
quantity:70,
location:"Junagadh",
organic:true,
images:["uploads/kodo1.jpg"]
},

{
name:"Barnyard Millet",
description:"Light and nutritious millet",
category:"Barnyard Millet",
price:100,
quantity:50,
location:"Surendranagar",
organic:true,
images:["uploads/barnyard1.jpg"]
},

{
name:"Natural Ragi",
description:"Freshly harvested ragi",
category:"Ragi",
price:65,
quantity:110,
location:"Amreli",
organic:true,
images:["uploads/ragi2.jpg"]
},

{
name:"Local Bajra",
description:"Traditional bajra from village farms",
category:"Bajra",
price:40,
quantity:200,
location:"Morbi",
organic:false,
images:["uploads/bajra2.jpg"]
},

{
name:"Jowar Premium",
description:"Clean and high quality jowar",
category:"Jowar",
price:55,
quantity:90,
location:"Gandhinagar",
organic:true,
images:["uploads/jowar2.jpg"]
},

{
name:"Organic Foxtail",
description:"Naturally grown foxtail millet",
category:"Foxtail Millet",
price:92,
quantity:75,
location:"Patan",
organic:true,
images:["uploads/foxtail2.jpg"]
},

{
name:"Little Millet Premium",
description:"Rich in protein and fiber",
category:"Little Millet",
price:88,
quantity:65,
location:"Mehsana",
organic:true,
images:["uploads/little2.jpg"]
},

{
name:"Kodo Millet Organic",
description:"Healthy millet option",
category:"Kodo Millet",
price:98,
quantity:55,
location:"Banaskantha",
organic:true,
images:["uploads/kodo2.jpg"]
},

{
name:"Barnyard Special",
description:"Nutritious millet for healthy diet",
category:"Barnyard Millet",
price:105,
quantity:45,
location:"Kutch",
organic:false,
images:["uploads/barnyard2.jpg"]
},

{
name:"Village Ragi",
description:"Traditional ragi crop",
category:"Ragi",
price:62,
quantity:95,
location:"Dahod",
organic:true,
images:["uploads/ragi3.jpg"]
},

{
name:"Bajra Organic",
description:"High nutrition millet",
category:"Bajra",
price:48,
quantity:140,
location:"Panchmahal",
organic:true,
images:["uploads/bajra3.jpg"]
},

{
name:"Jowar Healthy",
description:"Rich in vitamins",
category:"Jowar",
price:52,
quantity:130,
location:"Anand",
organic:false,
images:["uploads/jowar3.jpg"]
},

{
name:"Foxtail Gold",
description:"Premium grade foxtail millet",
category:"Foxtail Millet",
price:96,
quantity:70,
location:"Navsari",
organic:true,
images:["uploads/foxtail3.jpg"]
},

{
name:"Little Millet Farm",
description:"Direct from local farms",
category:"Little Millet",
price:87,
quantity:68,
location:"Valsad",
organic:false,
images:["uploads/little3.jpg"]
},

{
name:"Kodo Natural",
description:"Healthy millet grown naturally",
category:"Kodo Millet",
price:99,
quantity:58,
location:"Dang",
organic:true,
images:["uploads/kodo3.jpg"]
}

];

export default millets;