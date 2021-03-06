const Inputbox = {
  /**
   * component를 렌더링 합니다.
   */
  render: async (resource, verb, id) => {
    let isverb = verb === "new" ? "block" : "none";
    let htmlstream = ``;

    if (resource === "alarm" && verb) {
      htmlstream = `
        <div style="display: ${isverb};" class = "inputbox">
            <select id="morningnight" class = "selectbox" title="오전/오후 설정">
                <option value="오전" selected="selected">오전</option>
                <option value="오후">오후</option>
            </select>
            <select id="hour" class = "selectbox" title="시 설정">
                <option value="01" selected="selected">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
            시
            <select id="minute" class = "selectbox" title="분 설정">
                <option value="00" selected="selected">00</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
            분
            <button type="button" class="btn" id="btn-save">저장</button>
        </div>
        `;
    } else if (resource === "memo") {
      htmlstream = `
        <div style="display: ${isverb};" class = "inputbox">
            <textarea class="memobox input" id="memo" name="memo" rows="4" cols="50" placeholder="메모를 입력하세요\n(띄어쓰기 : Shift + Enter)\n(입력 : Enter)"></textarea>
        </div>
        `;
    }
    return htmlstream;
  },

  after_render: async () => {
    const btnElement = document.getElementById("btn-save");
    const textElement = document.getElementById("memo");
    if (btnElement) {
      btnElement.addEventListener("click", function (e) {
        const morningnight = document.getElementById("morningnight").value;
        const hour = document.getElementById("hour").value;
        const minute = document.getElementById("minute").value;
        const newvalue = {
          moon: morningnight,
          hour: hour,
          minute: minute,
        };
        let alarms = JSON.parse(localStorage.getItem("alarm")) || [];
        alarms = [newvalue, ...alarms];
        localStorage.setItem("alarm", JSON.stringify(alarms));
        location.href = `/#/alarm`;
      });
    }
    function getCaret(el) {
      if (el.selectionStart) {
        return el.selectionStart;
      } else if (document.selection) {
        el.focus();
        var r = document.selection.createRange();
        if (r == null) {
          return 0;
        }
        var re = el.createTextRange(),
          rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint("EndToStart", re);
        return rc.text.length;
      }
      return 0;
    }
    if (textElement) {
      textElement.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          const content = this.value;
          const caret = getCaret(this);
          if (e.shiftKey) {
            this.value =
              content.substring(0, caret) +
              content.substring(caret, content.length);
            e.stopPropagation();
          } else {
            let memos = JSON.parse(localStorage.getItem("memo")) || [];
            memos = [this.value, ...memos];
            localStorage.setItem("memo", JSON.stringify(memos));
            location.href = `/#/memo`;
          }
        }
      });
    }
  },
};

export default Inputbox;
