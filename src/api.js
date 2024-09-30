//-! don't remove the comment is actually a great example of how to deal with react router
import data from "./dataBase/mydata";
import { citiesData } from "./dataBase/myTrip";
export async function fetchingTickets() {
  // let res = await fetch("https://api.teleport.org/api/urban_areas/");
  // if (!res.ok) {
  //   // eslint-disable-next-line no-throw-literal
  //   throw { message: "Error fetching Tickets", status: res.status };
  // }
  // let data = await res.json();
  // let myArrayData = data._links["ua:item"];


  // Initialize an array to store the fetched data

  // Return fetchedData as a result of the initial fetch or false if the generator is done

  // let dataTickets  = await HaveTheLoop(200, myArrayData)
  // console.log(myArrayData.length);
  // console.log(dataTickets)
  return citiesData;
}
// async function checkUrlIfExist(nameHttpRequestCity, index, nameCity,letter) {
//   let objectHandle = {
//     id: index + 1,
//     name: nameCity,
//   };
//   let res = await fetch(`${nameHttpRequestCity}images/`);
//   if (res.ok && nameCity[0]!== letter) {
//     let datas = await res.json();
//     objectHandle.url = datas.photos[0].image.web;
//     console.log(nameCity)
//     letter = nameCity[0]
//     return {objectHandle , letter};
//   }
//   return null;
// }



// async function HaveTheLoop(numberOfItem, array) {
//   let eventually = [];
//   let letter = '';
//   let ObjectNewData;
//   for (let i = 0; i < numberOfItem; i++) {
//     let item = array[i];
//     let theData = await checkUrlIfExist(item.href, i, item.name , letter);
//     if(theData != null){
//       ({objectHandle : ObjectNewData, letter} = await checkUrlIfExist(item.href, i, item.name , letter))
//       eventually = [...eventually, ObjectNewData];
//     }

//     console.log(letter)
//   }
//   return eventually;
// }

export async function GetRent() {
  return data;
}
