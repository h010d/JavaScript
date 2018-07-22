var nums = [[1, 2, 3],[-1, -2, -3], [4, 6, 8]]
, users = [
  {"name" : "ivon"
  , "age" : 34
   }
    ,{"name" : "mils"
  , "age" : 41
   }
]
,clothes = {
  "QSC123" : {
    "title" : "платье"
    , "brand" : "Dior"
    , "size" : ["S", "M"]
    , "price" : 40000
  }
   ,"ZDT456" : {
    "title" : "юбка"
    , "brand" : "Chanel"
    , "size" : ["XS","L"]
    , "price" : 35000
  }
}
;
console.log(nums);
console.log("\"nums[1][2]\" = ", nums[1][2]);
console.log(users);
console.log("\"users[0] [\"name\"]\" = ", users[0] ["name"]);
console.log(clothes);
console.log(clothes["ZDT456"]);
console.log("\"clothes[\"ZDT456\"][\"brand\"]\" = ", clothes["ZDT456"]["brand"]);

console.log("expected => 2 : ", nums[0][1]);
console.log("expected => 41 : ", users[1]["age"]);
console.log("expected =>  \"QSC123\" : ", clothes["QSC123"]["title"], clothes["QSC123"]["price"]);

console.log(clothes["ZDT456"]["size"][0]);
clothes["ASD456"] =
 {
    "title" : "блуза"
    , "brand" : "Red Valentino"
    , "size" : ["XS", "M", "L"]
    , "price" : 48000
  };
  console.log(clothes);
  clothes["QSC123"]["price"] = 50000;
  console.log(clothes["QSC123"]);
  var clothesList = "";
  for(var id in clothes){
    console.log(id, clothes[id]["title"], clothes[id]["brand"], clothes[id]["size"], clothes[id]["price"]);
    clothesList += "\n " + id + " " + clothes[id]["title"]  + " " +  clothes[id]["brand"]  + " " +  clothes[id]["size"]  + " " +  clothes[id]["price"] + "";
  }
  console.log(clothesList);

