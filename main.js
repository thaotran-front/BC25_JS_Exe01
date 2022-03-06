/*console.log("Hello Cybersoft");
console.log('Thao');
alert("Welcome"); //hàm

/*Variable-Biến 2 cách*/
var username ="Nguyen";
console.log(username);

var address;
address = "123 CMT8";
console.log(address);

var numberStudent = 30;
console.log(numberStudent);

var isLogin = true; //true/false

/*5 Kiểu dữ liệu
có chữ nên là: string (chuỗi)
có số nên là: number
có true/false nên là: boolean
ko có giá tri nên là: undefined
có chứa giá trị rỗng thì là:null*/

var age = null;
console.log(age);


/*Các loại toán tử
+ - * /,%

*/
var number1 = 10;
var number2 = 5;

var tong = number1 + number2;
var kqTong ="Day la Total: " + tong;
console.log(kqTong);

var hieu = number1 - number2;
var kqHieu = "Day la Minus: " + hieu;
console.log(kqHieu);

var nhan = number1 * number2;
var kqNhan = "Day la Multiple: " + nhan;
console.log(kqNhan);

var chia = number1/ number2;
var kqChia = "Day la Divide: " + chia;
console.log(kqChia);

var chiaPhanDu = number1 % number2;
var kqChiaPhanDu = "Phần dư là: " + chiaPhanDu;
console.log(kqChiaPhanDu);

// ++: là tăng 1 đơn vị
var count = 0;
// count = count + 1;
var newCount = ++count;
console.log(count);

var count = 0;
// count = count + 1;
var newCount = count++;
console.log(newCount);
console.log(count);

var total = 0;
total += 1; //total = total +1
console.log(total);

var a; //a = undefined
var b = 2; // a= undefined; b = 2
a = 4; // a =4, b= 2
b= ++b + ++a; // b = 3 + 5 = 8, a=5
console.log(a,b)

var a = 3;
var b = 1;
a += b // a= a +b. vậy a=4 ; b= 1
b = b++ + a++ // b= 1 + 4 =5, a= 5
//sau dòng 81 thì a đã tăng lên 1.
console.log(a,b)

a -=b //a = a- b

/*Hằng Số*/
const PI = 3.15;


/* Mô hình 3 khối_Tính cạnh huyền
- Đầu vào: biết 2 cạnh góc vuông.
    + canh1: có giá trị bằng 3
    + canh2: có giá trị băng 4

- Xử lý: canhHuyen = Căn bậc 2 của Tổng bình phương 2 cạnh góc vuông 
    + Tạo biến canhHuyen
    + (canh1 * canh1) + (canh2 * canh2)
    + Math.sqrt(): Căn bậc 2

- Đầu ra: show canhHuyen*/

var canh1 = 3;
var canh2 = 4;
var canhHuyen = Math.sqrt((canh1 * canh1) + (canh2 * canh2));
var kqCanhHuyen = "Cạnh Huyền bằng: " + canhHuyen
console.log(kqCanhHuyen);

/*Tính tổng 3 ký số:
- Giả sử n = 123
=> 1 + 2 + 3 = 6
- Đầu vào:
 Tạo biến n

 - Xử lý:
    +Lấy hàng đơn vị: n%10
    +Lấy hàng chục: n%100/10
    +Lấy hàng trăm: Math.floor(n/100) làm tròn số không lẻ.
    + tính tổng 3 ký sô = đvi + chục + trăm.

-Đầu ra: hiển thị kết quả tổng.*/

var n = 456;
var unit = n % 10;
var ten = Math.floor((n % 100) / 10);
var hundred = Math.floor(n/100)
var tong = unit + ten + hundred;
var kqTong = "Tổng 3 ký số là: " + tong;
console.log(kqTong);


var a = 3;
var b = 4;
a = b-- // a = 4, b =3
b = (--b) + (++a) // a= 5, b = 2 + 5 = 7
console.log(a,b);

var a = 3;
var b = 1;
a -= b; // a=2, b=1
b = (b--) + (--a); // a=1 , b = 1 + 1 = 2
console.log(a,b);

var a = 5;
var b = 6;
a = (b++) + 3; // a= 9, b= 7
b = (--b) + (++a); // a = 10 , b = 6 + 10 = 16
c = 2 * a + (++b); // a= 10, b = 17, c = 2*10+17 = 37
console.log(a,b,c);
b = 2 * (++c) - (a++); // c = 38, a=11, b=2*38-10=66
console.log(a,b,c);


var a = 3;
var b = 5;
var c = 14.1;
var sum;
sum = a + b + c;// sum= 22,1
c /= a; b += c - a; // c= 4,7 ; b = b+c-a = 6,7, a = 3
console.log(a,b,c);
a *= 2 + b + c; // c= 4,7 ; b= 6,7; a= a*(2+b+c)= 3*(2+4,7+6,7)=40,2
console.log(a,b,c);


/*Exercise_1_Luong nhan vien
-Đầu vào: 
    + Tạo biến Tiền lương 1 ngày 100.000.
    + Tạo biến Số ngày làm việc.

- Xử lý: đặt biến
    + var perDay = 100.000
    + var Day = 5
    + var tongLuong = perDay * Day

- Đầu ra: xuất tongLuong*/

var perDay = 100000;
var Day = 5;
var tongLuong = perDay * Day;
var kqTongLuong = "1/ Tổng Lương là: " + tongLuong;
console.log(kqTongLuong);


/*Exercise_2_Tính giá trị trung bình
- Đầu vào:
    Tạo biến 5 số thực
- Xử lý:
    + sum = number1+ number2+ number3 + number4 + number5
    + tính giá trị trung bình = sum/5
- Đầu ra:
    xuất giá trị trung bình. */

var number1 = 10;
var number2 = 20;
var number3 = 30;
var number4 = 40;
var number5 = 50;
var sum = number1 + number2 + number3 + number4 + number5;
var average = Math.floor(sum/5);
var kqTrungBinh = "2/ Trung bình tổng là: " + average;
console.log(kqTrungBinh);


/*Exercise_3_Quy đổi tiền:
- Đầu vào: 
    + Tạo biến cho giá trị 1 USD;
- Xử lý:
    + Cho biến 1 USD = 23500
    + Cho số USD = 3
    + Số tiền quy đổi = số USD * giá 1 USD
- Đầu ra:
    Xuất số tiền quy đổi*/
var VND = 23500;
var perUSD = VND;
var inputUsd = 3;
var Total = inputUsd * perUSD;
var kqConvert = "3/ Số tiền VND là: " + Total;
console.log(kqConvert);


/*Exercise_4_Tính hình chữ nhật
- Đầu vào:
    + Đặt biến chiều dài: 24
    + Đặt biến chiều rộng: 12
- Xử lý:
    + Tính diện tích HCN = chiều dài * chiểu rộng
    + Tính chu vi HCN = (chiều dài + chiều rộng)*2
- Đầu ra:
    Xuất diện tích và chu vi. */

var length = 24;
var width = 12;
var area = length * width;
var perimeter = (length+width)*2;
var kqArea = "4/ Diện tích là: " + area;
var kqPerimeter = "5/ Chu vi là: " + perimeter;
console.log(kqArea, kqPerimeter);


/*Exercise_5_Tính tổng 3 ký số:
- Đầu vào:
 Tạo biến n

 - Xử lý:
    +Lấy hàng đơn vị: n%10
    +Lấy hàng chục: Math.floor(n/10)
    + tính tổng 2 ký sô = đvi + chục.

-Đầu ra: hiển thị kết quả tổng.*/
var n = 45;
var unit = n % 10;
var ten = Math.floor(n/10);
var sum = unit + ten;
var kqSum = "6/ Tổng 2 ký số là: " + sum;
console.log(kqSum);

// _______________

