function bai1() {
    // B1: Tạo biến sum xử lý kết quả cộng dồn từ 1 -> n sao cho > 10.000
    var sum = 0;
    // B2: Khởi tạo biến bước nhảy
    var i = 0;
    // B3: Xử lý cộng dồn
    // Điều kiện xử lý cộng dồn sum < 10.000
    while(sum < 10000) {
        // Tăng biến bước nhảy +1 cho i
        i++;
        // Duyệt từ 1 -> n và cộng dồn vào biến sum đến khi sum > 10.000 thì dừng lặp
        sum += i;
    }
    // for(var i = 0; sum < 10000;) {
    //     i++;
    //     sum += i;
    // }
    // B4: In kết quả ra trình duyệt
    var xuat = document.getElementById("xuatKetqua");
    xuat.style.display = "block";
    xuat.innerHTML = `Số nguyên dương nhỏ nhất: ${i}`;
}