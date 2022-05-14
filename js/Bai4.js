function getId(id) {
    return document.getElementById(id);
}

// B1: Tạo hàm bai4() xử lý hiẹn 10 thẻ div
function bai4() {
    var showDiv = getId("showDiv");
    // B2: Tạo biến content chứa danh sách các thẻ div
    var content = "";
    // Tạo biến divChan gán div chẵn màu đỏ
    var divChan = `<div style="background: red;">Div chẵn</div>`;
    // Tạo biến divLe gán div lẻ màu xanh dương
    var divLe = `<div style="background: blue;">Div lẻ</div>`;
    // B3: Tạo vòng lặp for xử lý in ra 10 thẻ div qua từng lần lặp
    for(var i = 1; i <= 10; i++) {
        // Xử lý trường hợp
        // Nếu i chia 2 có dư = 0 thì cộng dồn divChan vào content
        // Ngược lại nếu chia 2 có dư != 0 thì cộng dồn divLe vào content
        if(i % 2 === 0) {
            content += divChan;
        } else {
            content += divLe;
        }
        // B4: In kết quả ra trình duyệt
        showDiv.innerHTML = content;
    }
}