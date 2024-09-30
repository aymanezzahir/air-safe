import {
  rent_blackPlan,
  rent_RedPlan,
  water_RedPlan,
  rent_speedPlan,
  rent_WhitePlan,
  water_bg,
  speed_bg,
  company3,
  company4,
  company1,
  company5,
  company6,
  company2,
  company7,
} from "../image/rent";

let Mydata = {
  airplan: [
    {
      id: 19,
      name: "Classic Black Jet",
      imgSrc: rent_blackPlan,
      status: {
        speed: "888",
        capacity: "14",
        desc: " This classic jet is a symbol of timeless elegance and sophistication. Its sleek black exterior exudes an aura of power and refinement, making it a favorite among discerning aviation enthusiasts.",
        rate: "4",
      },
      isSold: true,
      price: "2007",
      forRent: true,
      type: ["black","popular"],
      
      myStyle:{
        bgColor:'#0C040C',
        bgImg:''
      }
    },
    {
      id: 88,
      name: "Classic Red Jet",
      imgSrc: rent_RedPlan,
      status: {
        speed: "699",
        capacity: "16",
        desc: "The classic red jet is a vibrant and attention-grabbing aircraft. Its striking red color not only makes it visually appealing but also adds a touch of excitement to the skies.",
        rate: "6",
      },
      isSold: true,
      price: "2622",
      forRent: true,
      type: ["red"],

      myStyle:{
        bgColor:"#FC0404",
        bgImg:''
      }
    },
    {
      id: 25,
      name: "Classic White Jet",
      imgSrc: rent_WhitePlan,
      status: {
        speed: "705",
        capacity: "14",
        desc: "The classic white jet exudes purity and simplicity. Its clean and timeless appearance is synonymous with grace and style, making it a popular choice for those who appreciate classic aesthetics.",
        rate: "5",
      },
      isSold: true,
      price: "2317",
      forRent: true,
      type: ["classical"],

      myStyle:{
        bgColor:'#CACACA',
        bgImg:''
      }
    },
    {
      id: 100,
      name: "Water Jet One",
      imgSrc: water_RedPlan,
      status: {
        speed: "664",
        capacity: "4",
        desc: "This water jet is designed for aquatic adventures. With the ability to seamlessly transition from water to air, it offers thrill-seekers the opportunity to explore both above and below the waves, making it perfect for island-hopping and coastal exploration.",
        rate: "6",
      },
      isSold: true,
      price: "2050",
      forRent: true,
      type: ["water", "popular"],

      myStyle:{
        bgColor:'#4A769A',
        bgImg:water_bg
      }
    },
    {
      id: 64,
      name: "Super Speed Jet",
      imgSrc: rent_speedPlan,
      status: {
        speed: "1230",
        capacity: "75",
        desc: "The super speed jet is a marvel of aquatic engineering. With its powerful propulsion system, it can achieve remarkable speeds on water, providing an exhilarating experience for water sports enthusiasts and thrill-seekers alike.",
        rate: "4",
      },
      isSold: true,
      price: "4854",
      forRent: true,
      type: ["speed", "popular"],
      myStyle:{
        bgColor:'#F46C14',
        bgImg:speed_bg
      }
    },
  ],
  company: [
    {
      id: 32,
      name: "boeing 787",
      imgSrc: company3,
      status: {
        speed: "622",
        capacity: "269",
        desc: " Cargo planes are designed to handle massive loads. They can transport goods with substantial weight, making them suitable for heavy machinery, equipment, and large shipments.",
        rate: "5",
        capacityProduct: "6644",
      },
      isSold: true,
      price: "29374",
      forRent: true,
    },
    {
      id: 89,
      name: "boeing c-17",
      imgSrc: company4,
      status: {
        speed: "594",
        capacity: "146",
        desc: "Cargo planes have the capability to operate on international routes, connecting different parts of the world. They play a pivotal role in global trade and logistics, ensuring that goods can be shipped across continents efficiently.",
        rate: "2",
        capacityProduct: "8320",
      },
      isSold: false,
      price: "24683",
      forRent: false,
    },
    {
      id: 3181,
      name:"Boeing-747" ,
      imgSrc:company1,
      status: {
        speed: "535",
        capacity: "292",
        desc: "Cargo planes often strike a balance between speed, cargo capacity, and altitude. They are versatile in meeting a range of cargo transportation needs, making them a reliable choice for various industries and applications.",
        rate: "2",
        capacityProduct: "3748",
      },
      isSold: false,
      price: "22316",
      forRent: true,
    },
    {
      id: 44,
      name: "boom-3",
      imgSrc: company5,
      status: {
        speed: "378",
        capacity: "195",
        desc: " Cargo planes are engineered for speed, allowing them to swiftly transport goods and cargo to their destinations. With powerful engines and streamlined designs, they excel in reducing delivery times.",
        rate: "6",
        capacityProduct: "6864",
      },
      isSold: true,
      price: "24717",
      forRent: true,
    },
    {
      id: 90,
      name: "boeing 787",
      imgSrc: company6,
      status: {
        speed: "434",
        capacity: "178",
        desc: " Cargo planes are designed to handle massive loads. They can transport goods with substantial weight, making them suitable for heavy machinery, equipment, and large shipments.",
        rate: "4",
        capacityProduct: "3858",
      },
      isSold: false,
      price: "51433",
      forRent: false,
    },
    {
      id: 74,
      name: "Airbus Beluga XL",
      imgSrc: company2,
      status: {
        speed: "520",
        capacity: "111",
        desc: "Cargo planes are renowned for their vast cargo-holding capacity. These aircraft can carry enormous quantities of goods, making them indispensable for the transportation of heavy or bulky items.",
        rate: "6",
        capacityProduct: "2367",
      },
      isSold: true,
      price: "61620",
      forRent: false,
    },
    {
      id: 78,
      name: "Liquid Hydrogen Plane Uk",
      imgSrc: company7,
      status: {
        speed: "450",
        capacity: "115",
        desc: " Some cargo planes are specifically designed for the transportation of specialized cargo, such as perishable goods, hazardous materials, or oversized items. These planes are equipped with features and technology tailored to the unique requirements of these cargo types.",
        rate: "4",
        capacityProduct: "6517",
      },
      isSold: true,
      price: "21117",
      forRent: false,
    },
  ],
};

export default Mydata;
