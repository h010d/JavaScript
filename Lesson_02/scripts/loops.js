var list = "";

for (var i = 0; i < 6; i++) {
  list += i + " ";
}
console.log(list);
var u = 10; // если не подходят значения то выполнится default
switch (u) {
  case u > 10:
    console.log("(i > 10)");
    break;
  case u < 10:
    console.log("(i < 10)");
    break;
  case u == 10:
    console.log("(u == 10)");
  default:
    console.log("section default");
  case u == 25:
    console.log("(u == 25)");
    break;
}
var list = "";

for (var i = 5; i >= 0; i--) {
  list += i + " ";
}
console.log(list);

var nums = [4, -7, 8, 0, 10, 5, -3, 0],
  result = "",
  numLength = nums.length;

for (i = 0; i < numLength; i++) {
  result += nums[i] + " ";
}
console.log(result);

result = "";
var flowers = ["Red", "Green", "Blue", "Dark", "Yellow"],
  flowersLength = flowers.length;

for (var i = 0; i < flowersLength; i++) {
  result += flowers[i] + " ";
}
console.log(result);

result = "";
for (var i = 0; i < numLength; i++) {
  if (nums[i] < 0) {
    result += nums[i] + " ";
  }
}
console.log("Отрицательные числа:", result);

result = "";
for (var i = 0; i < numLength; i++) {
  if (nums[i] > -5 && nums[i] < 7) {
    result += nums[i] + " ";
  }
}
console.log("Числа в диапазоне от -5 до 7:", result);

result = "";
for (var i = 0; i < numLength; i++) {
  if (!(nums[i] % 2)) {
    // nums[i] % 2 == 0
    result += nums[i] + " ";
  }
}
console.log("Числа четные", result);

result = "";
for (var i = 0; i < numLength; i++) {
  if (nums[i] % 2 && nums[i] < 0) {
    result += nums[i] + " ";
  }
}
console.log("Числа нечетные отрицательные", result);

var mul = 1;
for (var i = 0; i < numLength; i++) {
  mul *= nums[i];
}
console.log("Произведение чисел", mul);

var zeroQty = 0;
for (var i = 0; i < numLength; i++) {
  if (nums[i] === 0) {
    zeroQty++;
  }
}
console.log("Количество 0:", zeroQty);
