var settingsList = [
    {
        "name": "isResizeScreen",
        "description": "ウィンドウサイズに合わせて映像の端が切れないようにリサイズ",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isDblFullscreen",
        "description": "ダブルクリックで全画面表示に切り替え＆全画面ボタンをF11相当のフルスクリーンに割り当て(コメント欄を表示したまま全画面にできます。)",
        "instantDescription": "ダブルクリックで全画面表示に切り替え　※プレーヤーの全画面ボタンの割り当てには反映されません",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isEnterSubmit",
        "description": "エンターでコメント送信",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isHideOldComment",
        "description": "コメント欄のスクロールバーを非表示にする",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isMovingComment",
        "description": "新着コメントをあの動画サイトのように横に流す",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "movingCommentSecond",
        "description": "↑のコメントの速さ(コメントが画面を流れる秒数)",
        "type": "number",
        "isInstantChangable": true
    },
    {
        "name": "movingCommentLimit",
        "description": "↑のコメントの同時表示上限",
        "type": "number",
        "isInstantChangable": true
    },
    {
        "name": "isMoveByCSS",
        "description": "コメントをCSSのtransitionで流す(速度も変更できます。コメント流しが重い場合、これで軽減するかもしれません。)",
        "type": "boolean",
//        "isInstantChangable": false
        "isInstantChangable": true
    },
    {
        "name": "isComeNg",
        "description": "流れるコメントから規定の単語を除去(顔文字,連続する単語など)",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isComeDel",
        "description": "以下で設定した単語が含まれるコメントは流さない(1行1つ、/正規表現/、//コメント)",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "fullNg",
        "description": "",
        "type": "textarea",
        "isInstantChangable": true
    },
    {
        "name": "isInpWinBottom",
//        "description": "コメント入力欄の位置を下へ・コメント一覧を逆順・下へスクロール(コメ欄を常に表示しているときのみ)",
//        "description": "コメント入力欄の位置を下へ(コメント一覧の逆順・スクロール機能は一時廃止)",
        "description": "コメント入力欄と番組残り時間を下へ(コメント一覧は逆順・下スクロール)",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isCustomPostWin",
        "description": "投稿ボタン削除・入力欄1行化",
        "type": "boolean",
//        "isInstantChangable": false
        "isInstantChangable": true
    },
    {
        "name": "isCancelWheel",
        "description": "マウスホイールによる番組移動を禁止する",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isVolumeWheel",
        "description": "マウスホイールによる番組移動を音量操作へ変更する",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "changeMaxVolume",
        "description": "音量が最大(100)の場合は以下へ自動変更する",
        "type": "number",
        "isInstantChangable": true
    },
    {
        "name": "isTimeVisible",
//        "description": "コメント入力欄の近くに番組残り時間を表示",
        "description": "画面右上に番組残り時間を表示",
        "type": "boolean",
        "isInstantChangable": true
    },
    {
        "name": "isSureReadComment",
        "description": "常にコメント欄を表示する",
        "type": "boolean",
//        "isInstantChangable": false
        "isInstantChangable": true
    },
    {
        "name": "sureReadRefreshx",
//        "description": "読込済コメント数がx(101以上)を超えた時にコメ欄を閉じる(再度開く時に100以降の古いコメントが破棄される)",
        "description": "常にコメント欄を表示する場合で、読込済コメント数がx(101以上)を超えた時にコメ欄を閉じる(再度開く時に100以降の古いコメントが破棄される)",
        "type": "number",
        "isInstantChangable": true
    },
    {
        "name": "isAlwaysShowPanel",
        "description": "常に黒帯パネルを表示する",
        "type": "boolean",
//        "isInstantChangable": false
        "isInstantChangable": true
    },
    {
        "name": "isMovieResize",
        "description": "映像を枠に合わせて縮小する",
        "type": "boolean",
        "isInstantChangable": true
    }
    ];
var CMSettingList = [
        {
            "name": "isCMBlack",
            "description": "コメント数が表示されないとき画面真っ黒",
            "type": "boolean",
            "isInstantChangable": true
        },
        {
            "name": "isCMBkTrans",
            "description": "↑を下半分だけ少し透かす",
            "type": "boolean",
            "isInstantChangable": true
        },
        {
            "name": "isCMsoundoff",
            "description": "コメント数が表示されないとき音量ミュート",
            "type": "boolean",
            "isInstantChangable": true
        },
        {
            "name": "CMsmall",
//            "description": "コメント数が表示されないとき映像部分を1/xに縮小する",
            "description": "コメント数が表示されないとき映像部分を100%(縮小なし)～5%に縮小する",
            "type": "number",
            "isInstantChangable": true
        }
    ];
function getSettings(callback) {
    var res = {};
    
}
function generateOptionInput(settingsArr, isPermanent) {
    var inputHTML = "";
    var i = 0;
    var disabled;
    var description;
    var isNotChangable;
    for (i = 0; i < settingsArr.length; i += 1) {
        description = (!isPermanent && settingsArr[i].instantDescription) ? settingsArr[i].instantDescription : settingsArr[i].description;
        isNotChangable = !isPermanent && !settingsArr[i].isInstantChangable;
        disabled = isNotChangable ? " disabled" : "";
        if (settingsArr[i].type === "boolean") {
            inputHTML += '<input type="checkbox" id="' + settingsArr[i].name + '" ' + disabled + '>:' + description;
            inputHTML += isNotChangable ? "　※この設定はここで変更不可" : "";
        } else {
            inputHTML += description;
            inputHTML += isNotChangable ? "　※この設定はここで変更不可" : "" + ":";
            if (settingsArr[i].type === "number") {
                inputHTML += '<input type="number" id="' + settingsArr[i].name + '" ' + disabled + '>';
            } else if (settingsArr[i].type === "textarea") {
                inputHTML += '<textarea id="' + settingsArr[i].name + '" rows=3 cols=40 wrap=off ' + disabled + '></textarea>';
            }
        }
        inputHTML += "<br/>"
    }
    return inputHTML;
}
function generateOptionHTML(isPermanent) {
    var htmlstr = generateOptionInput(settingsList, isPermanent);
    htmlstr += '<div id="CommentMukouSettings">';
    htmlstr += generateOptionInput(CMSettingList, isPermanent);
    htmlstr += '</div>';
    return htmlstr;
}