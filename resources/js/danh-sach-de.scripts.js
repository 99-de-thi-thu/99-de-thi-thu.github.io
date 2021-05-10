function pagination(trang_chuyen_den, data) {
    n = data[length]
    if (trang_chuyen_den + 4 < n) {
        document.getElementById('position_1').href = data[parseInt(trang_chuyen_den) - 1][0]
        document.getElementById('position_2').href = data[parseInt(trang_chuyen_den)][0]
        document.getElementById('position_3').href = data[parseInt(trang_chuyen_den) + 1][0]
        document.getElementById('position_4').href = data[parseInt(trang_chuyen_den) + 2][0]
        document.getElementById('position_5').href = data[parseInt(trang_chuyen_den) + 3][0]
        document.getElementById('position_6').href = data[parseInt(trang_chuyen_den) + 4][0]
    } else {
        document.getElementById('position_1').href = data[n - 6][0]
        document.getElementById('position_2').href = data[n - 5][0]
        document.getElementById('position_3').href = data[n - 4][0]
        document.getElementById('position_4').href = data[n - 3][0]
        document.getElementById('position_5').href = data[n - 2][0]
        document.getElementById('position_6').href = data[n - 1][0]
    }
}
