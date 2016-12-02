var PassSec; // 秒数カウント用変数

// 繰り返し処理の中身
function showPassage(){
    PassSec++; // カウントアップ
    var min = Math.floor(PassSec / 60);
    var sec = PassSec % 60;

    var str_min = min;
    var str_sec = sec;

    if(min < 10) str_min = "0" + min;
    if(sec < 10) str_sec = "0" + sec;

    var msg = str_min + "'" + str_sec; // 表示文作成
    document.getElementById("nowSec").innerHTML = msg; // 表示更新

    document.getElementById('Clear').onclick = function() {

	var table = document.getElementById('table');
	var collection = table.rows;

	for(var i = 1; i < 5; i++){

	    var tr = collection.item(i);
	    for(var j = 1; j < 9; j++){

		var td = tr.cells.item(j);
		td.firstChild.nodeValue = "";
	    }
	}
    };

    document.getElementById('Barrier').onclick = function() {

	var cd = ret_CDsec(PassSec, 180);
	document.getElementById("normal_B").innerHTML = cd[0];
	document.getElementById("boots_B").innerHTML = cd[1];
	document.getElementById("insight_B").innerHTML = cd[2];
	document.getElementById("both_B").innerHTML = cd[3];
    };
    document.getElementById('Cleanse').onclick = function() {

	var cd = ret_CDsec(PassSec, 210);
	document.getElementById("normal_C").innerHTML = cd[0];
	document.getElementById("boots_C").innerHTML = cd[1];
	document.getElementById("insight_C").innerHTML = cd[2];
	document.getElementById("both_C").innerHTML = cd[3];
    };
    document.getElementById('Exhaust').onclick = function() {

	var cd = ret_CDsec(PassSec, 210);
	document.getElementById("normal_E").innerHTML = cd[0];
	document.getElementById("boots_E").innerHTML = cd[1];
	document.getElementById("insight_E").innerHTML = cd[2];
	document.getElementById("both_E").innerHTML = cd[3];
    };
    document.getElementById('Flash').onclick = function() {

	var cd = ret_CDsec(PassSec, 300);
	document.getElementById("normal_F").innerHTML = cd[0];
	document.getElementById("boots_F").innerHTML = cd[1];
	document.getElementById("insight_F").innerHTML = cd[2];
	document.getElementById("both_F").innerHTML = cd[3];
    };
    document.getElementById('Ghost').onclick = function() {

	var cd = ret_CDsec(PassSec, 180);
	document.getElementById("normal_G").innerHTML = cd[0];
	document.getElementById("boots_G").innerHTML = cd[1];
	document.getElementById("insight_G").innerHTML = cd[2];
	document.getElementById("both_G").innerHTML = cd[3];
    };
    document.getElementById('Heal').onclick = function() {

	var cd = ret_CDsec(PassSec, 240);
	document.getElementById("normal_H").innerHTML = cd[0];
	document.getElementById("boots_H").innerHTML = cd[1];
	document.getElementById("insight_H").innerHTML = cd[2];
	document.getElementById("both_H").innerHTML = cd[3];
    };
    document.getElementById('Ignite').onclick = function() {

	var cd = ret_CDsec(PassSec, 210);
	document.getElementById("normal_I").innerHTML = cd[0];
	document.getElementById("boots_I").innerHTML = cd[1];
	document.getElementById("insight_I").innerHTML = cd[2];
	document.getElementById("both_I").innerHTML = cd[3];
    };
    document.getElementById('Teleport').onclick = function() {

	var cd = ret_CDsec(PassSec, 300);
	document.getElementById("normal_T").innerHTML = cd[0];
	document.getElementById("boots_T").innerHTML = cd[1];
	document.getElementById("insight_T").innerHTML = cd[2];
	document.getElementById("both_T").innerHTML = cd[3];
    };
    document.getElementById('e_dragon').onclick = function() {

	var cd = ret_CDsec(PassSec, 210);
	document.getElementById("e_dragon_time").innerHTML = cd[0];
    };
    document.getElementById('baron').onclick = function() {

	var cd = ret_CDsec(PassSec, 150);
	document.getElementById("baron_time").innerHTML = cd[0];
    };
}

// 繰り返し処理の開始
function startShowing() {
    PassSec = 60; // カウンタのリセット
    PassageID = setInterval('showPassage()',1000); // タイマーをセット(1000ms間隔)
    document.getElementById("Start").disabled = true; // 開始ボタンの無効化
}

function ret_CDsec(ps, sec) {

    var normal = ps + sec;
    var boots = ps + Math.floor(sec * 0.9);
    var insight = ps + Math.floor(sec * 0.85);
    var both = ps + Math.floor(sec * 0.75);

    var str_normal = trans(normal);
    var str_boots = trans(boots);
    var str_insight = trans(insight);
    var str_both = trans(both);

    var CDend = [str_normal, str_boots, str_insight, str_both];
    return CDend;
}

function trans(time) {

    var min = Math.floor(time / 60);
    var sec = time % 60;

    var str_min = min;
    var str_sec = sec;

    if(min < 10) str_min = "0" + min;
    if(sec < 10) str_sec = "0" + sec;

    var msg = str_min + "'" + str_sec; // 表示文作成
    return msg;
}
