// --------------Bai ------------------
/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - Luong 1 ngay lam: 100000
 *  - So ngay lam nhap vao
 *
 * Xử lý:
 *  - So ngay lam * luong mot ngay
 *
 * Đầu ra
 *  - Thông báo số lương làm được.
 */
// khai báo biến
function total() {
  // dau vao
  var number1 = document.getElementById("number1").value * 1;
  var salary = 100000;
  // Xu ly
  var wage = salary * number1;

  // Đầu ra

  var result = "<p>Tong tien luong: " + wage + "</p>";
  document.getElementById("showInfoTotal").innerHTML = result;
  document.getElementById("showInfoTotal").className =
    "card-footer bg-success text-center text-white";
}
// --------------Bai 2------------------

/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - Nhap vao 5 so thuc
 *
 * Xử lý:
 *  - gia tri trug binh la tong cua 5 so thuc chia cho 5
 *
 * Đầu ra
 *  - Thông báo gia tri trug binh cua 5 so thuc
 */
function trungBinh() {
  // dau vao
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;
  var so5 = document.getElementById("so5").value * 1;

  // Xu ly
  var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

  // Đầu ra

  var result = "<p>Trung binh 5 so thuc: " + trungBinh + "</p>";
  document.getElementById("showTB").innerHTML = result;
  document.getElementById("showTB").className =
    "card-footer bg-success text-center text-white";
}
//   ------------------bai 3--------------------
/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - Gia 1 USD: 23.500
 *  - USD nhap vao
 *
 * Xử lý:
 *  - Gia 1 USD * So USD
 *
 * Đầu ra
 *  - Thông báo số tien quy quy doi ra VND
 */
function USD() {
  // dau vao
  var soUSD = document.getElementById("soUSD").value * 1;
  var soVND = 23500;
  // Xu ly
  var tien = soUSD * soVND;

  // Đầu ra

  var result = "<p>Tien qui doi sang VND: " + tien + "</p>";
  document.getElementById("showUSD").innerHTML = result;
  document.getElementById("showUSD").className =
    "card-footer bg-success text-center text-white";
}
// -------------Bai 4 -------------
/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - nhap 2 bien chieu dai va chieu rong hinh chu nhat
 *
 * Xử lý:
 *  - chieu dai * chieu rong
 *  - (chieu dai + chieu rong)*2
 *
 * Đầu ra
 *  - Thông báo chu vi va dien tich hinh chu nhat
 */
function hcn() {
  // dau vao
  var cd = document.getElementById("cd").value * 1;
  var cr = document.getElementById("cr").value * 1;
  // Xu ly
  var chuvi = (cd + cr) * 2;
  // dien tich hinh chu nhat
  var dientich = cd * cr;

  // Đầu ra

  var result =
    "<p>Chu vi hcn: " + chuvi + " Dien tich hcn: " + dientich + "</p>";
  document.getElementById("showhcm").innerHTML = result;
  document.getElementById("showhcm").className =
    "card-footer bg-success text-center text-white";
}
//   -----------------bai 5---------------
/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - nhap so co 2 chu so
 *
 * Xử lý:
 *  - a=n%10 lay hang don vi
 *  - b=n/10 lay hang chuc
 *  - tong =a + b
 *
 * Đầu ra
 *  - Thông báo tong cua so co 2 chu so
 */
function showTatol() {
  // dau vao
  var number2 = document.getElementById("number2").value * 1;
  // Xu ly
  // lay so hang don vi
  var a = number2 % 10;
  //  lay so hang chuc
  var b = number2 / 10;
  // tong so co 2 chu so
  var tong = Math.floor(a + b);

  // Đầu ra

  var result ="<p>Tong 2 ky so: " + tong +"</p>";
  document.getElementById("showinfor5").innerHTML = result;
  document.getElementById("showinfor5").className =
    "card-footer bg-success text-center text-white";
}
