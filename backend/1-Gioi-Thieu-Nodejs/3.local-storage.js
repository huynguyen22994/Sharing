// Using local storage in nodejs
// step 1: npm install node-persist@0.0.8 --save
// step 2: var storage = require('node-persist');
// step 3: 
//   storage.initSync();
//      hoặc
//   storage.init().then(promise);
//
//   storage.init({
//       dir : "path/to/save", // đường dẫn lưu trừ dữ liệu, đường dẫn mặc định node-modules/node-persist/storage/persist
//                             // Nếu thiết lập thì đường dẫn là node-modules/node-persist/storage/duong_dan 
//       ttl : false           // time to live, thời gian sống của dữ liệu. Nếu là false thì là vĩnh viễn
//   });
//   storage.initSync({
//       dir : "path/to/save",
//       ttl : false
//   });
// Lưu ý:
// Hàm nào có chữ sync tức là đồng bộ, còn không có chữ sync là bất động bộ
// Khi bạn khởi tạo bằng hàm init() thì các hàm còn lại phải sử dụng không Sync, còn khi bạn sử dụng initSync() thì các hàm còn lại phải sử dụng có Sync. Điều này có nghĩa là khởi tạo hàm nào thì các hàm còn lại phải dùng ở chế độ tương tự.
// Nếu thiết lập dạng Sync thì dữ liệu sẽ lưu trên disk, vì vậy bạn có thể sử dụng ở các request tiếp theo.
// Nếu thiết lập dạng không Sync thì dữ liệu sống trong request đó thôi.

// step 4: Cách dùng Ref: https://github.com/simonlast/node-persist
