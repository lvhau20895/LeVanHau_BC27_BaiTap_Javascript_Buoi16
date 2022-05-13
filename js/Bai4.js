function bai4() {
    // B1: Tạo biến content chứa danh sách các thẻ div
    var content = document.getElementsByClassName("taoThe");
    // B2: Tạo vòng lặp for xử lý in thẻ div
    // Sử dụng length để đếm số thẻ div trong content
    for(var i = 0; i < content.length; i++) {
        // Vì mảng bắt đầu từ 0 nên (i phải + 1) sau đó mới chia lấy dư để tính chẵn lẻ
        // Nếu (i + 1) chia 2 dư 0 thì in ra div chẵn màu đỏ, ngược lại thì in ra div lẻ màu xanh
        if((i + 1) % 2 === 0) {
            // Truy cập vào phần tử của mảng qua từng lần lặp và in kết quả ra trình duyệt nếu là div chẵn
            content[i].style.display = "block";
            content[i].style.background = "red";
        } else {
            // Truy cập vào phần tử của mảng qua từng lần lặp và in kết quả ra trình duyệt nếu là div lẻ
            content[i].style.display = "block";
            content[i].style.background = "blue";
        }
    }
}