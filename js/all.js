document.getElementById("countId").onclick = function () {
  //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容
  var hamPrice = 30;
  var cokePrice = 30;
  var heiPrice = 100;
  var topPrice = 100;
  var higPrice = 100;
  //定義變數的內容
  var hamNum = parseInt(document.getElementById("hamNumId").value) * hamPrice;
  var cokeNum =
    parseInt(document.getElementById("cokeNumId").value) * cokePrice;
  var heiNum = parseInt(document.getElementById("heiNumId").value) * heiPrice;
  var topNum = parseInt(document.getElementById("topNumId").value) * topPrice;
  var higNum = parseInt(document.getElementById("higNumId").value) * higPrice;
  //命名變數為抓取 input 裡面的數值
  //將要在 id 所得到的值用 parseInt 語法轉換成數字。
  document.getElementById("totalId").textContent =
    hamNum + cokeNum + heiNum + topNum + higNum;
  //最終結算的結果
};
