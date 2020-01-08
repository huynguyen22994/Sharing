var jsonString = '{ "name": "Nguyen Thi Teo"}';

// Parse json từ String sang Object
var jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name);

// Parse json Object sang String => có thể lưu string vào file hoặc records trong database
var jsonStringCopy = JSON.stringify(jsonObj);
console.log(jsonStringCopy);