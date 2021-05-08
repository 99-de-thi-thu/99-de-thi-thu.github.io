function pagination(x, data) {
    document.getElementById('position_1').href = data[x - 1][0]
    document.getElementById('position_2').href = data[x - 1][1]
    document.getElementById('position_3').href = data[x - 1][2]
    document.getElementById('position_4').href = data[x - 1][3]
    document.getElementById('position_5').href = data[x - 1][4]
    document.getElementById('position_6').href = data[x - 1][5]
    document.getElementById('position_7').href = data[x - 1][6]
    document.getElementById('position_8').href = data[x - 1][7]
    document.getElementById('position_9').href = data[x - 1][8]
}