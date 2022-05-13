function bai3() {
    // B1: Lấy input đầu vào
    // Tạo biến soN gán giá trị số nhập từ bàn phím
    var soN = +document.getElementById("nhapSoN").value;
    // B2: Tạo biến ketQua tính giai thừa 1*2*3...*n
    var ketQua = 1;
    // B3: Tạo vòng lặp for xử lý tính giai thừa
    for(var i = 1; i <= soN; i++) {
        // Duyệt từ 1 -> n và nhân dồn vào biến ketQua đến khi i <= soN nhập từ bàn phím thì ngưng lặp
        ketQua *= i;
    }
    // B4: In kết quả ra trình duyệt
    var tinhGiaiThua = document.getElementById("tinhGiaiThua");
    tinhGiaiThua.style.display = "block";
    tinhGiaiThua.innerHTML = `Giai thừa: ${ketQua}`;
}