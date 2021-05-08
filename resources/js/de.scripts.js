//============================================================================================================
//script cho phần chấm điểm

function kiem_tra() {
    w3.hide("#xac_nhan_nop_bai");
    w3.hide("#quay_lai");
    var diem = 0.0;
    var i = 0;
    for (i = 0; i < 40; i++) {
        if (dap_an_nguoi_choi_chon[i] == dap_an_dung[i]) {
            diem = diem + 1;
        }
    }
    document.getElementById('diem_thi').innerHTML = "Điểm: " + String(diem * 0.2)
    nop_bai = 1
}

var dap_an_nguoi_choi_chon = ["f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f"];

function click_dap_an(dap_an_vua_click, cau) {
    if (dap_an_nguoi_choi_chon[parseInt(cau) - 1] == dap_an_vua_click) {
        document.getElementById('cau_' + cau + '_dap_an_' + dap_an_vua_click).style.background = 'white';
        dap_an_nguoi_choi_chon[parseInt(cau) - 1] = "f";
    } else {
        if (dap_an_nguoi_choi_chon[parseInt(cau) - 1] != "f") { document.getElementById('cau_' + cau + '_dap_an_' + dap_an_nguoi_choi_chon[parseInt(cau) - 1]).style.background = 'white'; }
        document.getElementById('cau_' + cau + '_dap_an_' + dap_an_vua_click).style.background = 'pink';
        dap_an_nguoi_choi_chon[parseInt(cau) - 1] = dap_an_vua_click;
    }
}

function nop_bai_thi() {
    w3.hide("#nop_bai_thi");
    w3.show("#xac_nhan_nop_bai");
    w3.show("#quay_lai");
}

function quay_lai() {
    w3.hide("#xac_nhan_nop_bai");
    w3.hide("#quay_lai");
    w3.show("#nop_bai_thi");
}
//===============================================================================================================
// script cho đồng hồ bấm thời gian 50 phút
var nop_bai = 0

function baogio() {
    num = document.the_form.kq.value;
    phut = document.the_form.kq2.value;
    num = eval(num) + 1;

    if (num == 60) {
        phut = eval(phut) + 1;
        num = 0;
    }
    document.the_form.kq.value = num;
    document.the_form.kq2.value = phut;
    if (phut == 40) {
        document.getElementById("nhac_nho").innerHTML = "Còn 10 phút, mau chuẩn bị nộp bài"
    }
    if (phut == 50) {
        kiem_tra()
    }
    if (nop_bai == 0) {
        hengio = setTimeout("baogio();", 1000);
    }

}

function bat_dau_thi() {
    w3.hide("#bat_dau_thi")
    baogio()
}