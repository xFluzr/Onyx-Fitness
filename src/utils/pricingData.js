//IMAGES
import Basic from '../assets/svgicons/basic.svg'
import Standard from '../assets/svgicons/standard.svg'
import Premium from '../assets/svgicons/premium.svg'
import Early from '../assets/svgicons/early.svg'
import Couple from '../assets/svgicons/couple.svg'
import Senior from '../assets/svgicons/senior.svg'

export const pricingSectionPlans=[
  {
    planName:"Basic",
    logo:Basic,
    price:29,
    description:"Basic Plan",
    additons:{
      "unlimited gym access":true,
      "personal trainer":false,
      "one class a week":true,
      "pool, sauna, salt cave":false,
      "free training towel":true
    }
  },
  {
    planName:"Standard",
    logo:Standard,
    price:40,
    description:"Standard Plan",
    additons:{
      "unlimited gym access":true,
      "personal trainer":false,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":true
    }
  },
  {
    planName:"Premium",
    logo:Premium,
    price:69,
    description:"Premium Plan",
    additons:{
      "unlimited gym access":true,
      "personal trainer":true,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":true
    }
  }
]

export const offerSectionPlans=[
  {
    planName:"Basic",
    logo:Basic,
    price:29,
    description:"Basic Plan",
    additons:{
      "unlimited gym access":true,
      "personal trainer":false,
      "one class a week":true,
      "pool, sauna, salt cave":false,
      "free training towel":true
    }
  },
  {
    planName:"Standard",
    logo:Standard,
    price:40,
    description:"Standard Plan",
    additons:{
      "unlimited gym access":true,
      "personal trainer":false,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":true
    }
  },
  {
    planName:"Premium",
    logo:Premium,
    price:69,
    description:"Premium Plan",
    additons:{
      "unlimited gym access":true,
      "personal trainer":true,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":true
    }
  },
  {
    planName:"Early Hours",
    logo:Early,
    price:19,
    description:"Early Hours Plan",
    additons:{
      "unlimited gym access":false,
      "personal trainer":false,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":false
    }
  },
  {
    planName:"Fitness Couple",
    logo:Couple,
    price:49,
    description:"Fitness Couple Plan",
    additons:{
      "unlimited gym access":true,
      "entry only with partner":true,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":false
    }
  },
  {
    planName:"Senior",
    logo:Senior,
    price:25,
    description:"Senior Plan",
    additons:{
      "unlimited gym access":false,
      "personal trainer":true,
      "one class a week":true,
      "pool, sauna, salt cave":true,
      "free training towel":true
    }
  }

]