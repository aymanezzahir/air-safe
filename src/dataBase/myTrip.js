function getRandomPrice(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

export const citiesData = [
    {
      id: 1,
      name: "Aarhus",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/aarhus_web-1462c370b8.jpg",
      description: "Aarhus is a vibrant city in Denmark known for its rich cultural history and contemporary art scene.",
      takeOffAirplane: "XYZ Airlines",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-01"
    },
    {
      id: 15,
      name: "Baku",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/baku_web-71bcbddb43.jpg",
      description: "Baku, the capital of Azerbaijan, beautifully combines modern architecture with historic sites along the Caspian Sea.",
      takeOffAirplane: "ABC Airways",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-11-25"
    },
    {
      id: 49,
      name: "Cairo",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cairo_web-52946f68c1.jpg",
      description: "Cairo, the bustling capital of Egypt, showcases a blend of ancient wonders like the Pyramids of Giza with vibrant modern life.",
      takeOffAirplane: "DEF Airlines",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-11-30"
    },
    {
      id: 73,
      name: "Dallas",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/dallas_web-1b0ab83512.jpg",
      description: "Dallas, a major city in Texas, offers a mix of arts, culture, and a thriving culinary scene in the heart of the Lone Star State.",
      takeOffAirplane: "GHI Airways",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-05"
    },
    {
      id: 84,
      name: "Edinburgh",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/edinburgh_web-18ebc57174.jpg",
      description: "Edinburgh, the capital of Scotland, boasts a historic charm with its stunning medieval and Georgian architecture.",
      takeOffAirplane: "JKL Flights",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-11-28"
    },
    {
      id: 88,
      name: "Florence",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/florence_web-9bdb5ab7cf.jpg",
      description: "Florence, in the heart of Italy's Tuscany region, is renowned for its art, history, and architectural masterpieces.",
      takeOffAirplane: "MNO Airlines",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-02"
    },
    {
      id: 93,
      name: "Galway",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/gaillimh_web-059ef82df4.jpg",
      description: "Galway, a city on Ireland's west coast, charms visitors with its vibrant arts scene, traditional pubs, and scenic beauty.",
      takeOffAirplane: "PQR Flights",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-03"
    },
    {
      id: 102,
      name: "Halifax",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/halifax_web-92b02d4873.jpg",
      description: "Halifax, in Nova Scotia, Canada, offers a maritime history, stunning coastal views, and a lively waterfront.",
      takeOffAirplane: "STU Airways",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-07"
    },
    {
      id: 115,
      name: "Jacksonville",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/jacksonville_web-cc69395f3f.jpg",
      description: "Jacksonville, in Florida, boasts beautiful beaches, a vibrant arts scene, and a thriving culinary landscape.",
      takeOffAirplane: "VWX Airlines",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-09"
    },
    {
      id: 118,
      name: "Kansas City",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kansas-city_web-d977356d14.jpg",
      description: "Kansas City, straddling the Kansas-Missouri border, offers barbecue, jazz heritage, and a lively arts scene.",
      takeOffAirplane: "YZA Flights",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-11"
    },
    {
      id: 127,
      name: "Lagos",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/lagos_web-7f21edd9c4.jpg",
      description: "Lagos, Nigeria's largest city, is a bustling metropolis known for its vibrant markets, music, and energetic atmosphere.",
      takeOffAirplane: "BCD Airways",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-14"
    },
    {
      id: 145,
      name: "Madison",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/madison_web-c8769a2784.jpg",
      description: "Madison, the capital of Wisconsin, charms visitors with its lakes, bike trails, and a vibrant cultural scene.",
      takeOffAirplane: "EFG Airlines",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-18"
    },
    {
      id: 167,
      name: "Nairobi",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/nairobi_web-1d43d8c0ec.jpg",
      description: "Nairobi, the capital of Kenya, offers a mix of wildlife, culture, and a burgeoning modern cityscape.",
      takeOffAirplane: "HIJ Flights",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-22"
    },
    {
      id: 175,
      name: "Oklahoma City",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/oklahoma-city_web-2d2437c3f2.jpg",
      description: "Oklahoma City, in the heart of the U.S. Midwest, boasts cowboy culture, heritage sites, and a growing arts scene.",
      takeOffAirplane: "KLM Airways",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-25"
    },
    {
      id: 183,
      name: "Palo Alto",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/palo-alto_web-c5d0b34c18.jpg",
      description: "Palo Alto, in California's Silicon Valley, is renowned for its tech industry, Stanford University, and a relaxed lifestyle.",
      takeOffAirplane: "NOP Flights",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-28"
    },
    {
      id: 198,
      name: "Quebec",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/quebec_web-21a4ca0a12.jpg",
      description: "Quebec City, in Canada, is known for its European charm, historic sites, and picturesque Old Town.",
      takeOffAirplane: "QRS Airlines",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2023-12-31"
    },
    {
      id: 200,
      name: "Raleigh",
      url: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/raleigh_web-2909c09abe.jpg",
      description: "Raleigh, the capital of North Carolina, is a hub for technology, education, and southern charm.",
      takeOffAirplane: "TUV Airways",
      price:getRandomPrice(200 , 1000),
      arrivalDate: "2024-01-03"
    }
  ];  