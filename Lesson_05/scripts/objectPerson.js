function Person(weight, height, year) {
    var p = this;
    p.weight = weight || 0;
    p.height = height || 0;
    p.year = year || 0;
  
    var age = 0
      , name = ""
      ;
    p.getAge = function () {
      var today = new Date()
        , currentYear = today.getFullYear()
        ;
      age = currentYear - p.year;
      return age;
    }
    p.setName = function (sName) {
      name = sName;
      return name;
    }
  }
  var person1 = new Person(10, 10, 1982);
  console.log(person1);
  console.log(person1.getAge());
  console.log(person1.setName("Kate"));
  
  
  var person2 = new Person(10, 10);
  console.log(person2);
  console.log(person2.setName("Kate"));