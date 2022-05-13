function bai2() {
    // B1: Xác định input đầu vào
    // Tạo biến x, y gán giá trị số nhập từ bàn phím
    var x = +document.getElementById("soX").value;
    var n = +document.getElementById("soN").value;
    // B2: Tạo biến ketQua tính tổng x + x^2 + x^3 ... + x^n
    var ketQua = 0;
    // B3: Xử lý tính tổng
    for(var i = 1; i <= n; i++) {
        // Duyệt số x nhập từ bàn phím ** i và cộng dồn vào biến ketQua đến khi i nhỏ hơn hoặc bằng sô n nhập từ bàn phím thì ngưng lặp
        ketQua += x ** i;
    }
    // B4: In kết quả ra trình duyệt
    var tinhTong = document.getElementById("tinhTong");
    tinhTong.style.display = "block";
    tinhTong.innerHTML = `Tổng: ${ketQua}`;
}