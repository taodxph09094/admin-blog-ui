class Typing {
  constructor(opts) {
    this.opts = opts || {};
    this.source = opts.source;
    this.output = opts.output;
    this.delay = opts.delay || 120;
    this.chain = {
      parent: null,
      dom: this.output,
      val: [],
    };
    if (!(typeof this.opts.done === "function"))
      this.opts.done = function () {};
  }

  init() {
    //Tạo
    this.chain.val = this.convert(this.source, this.chain.val);
  }

  convert(dom, arr) {
    //Chuyển đổi cấc nút con trong mảng
    let children = Array.from(dom.childNodes);
    for (let i = 0; i < children.length; i++) {
      let node = children[i];
      if (node.nodeType === 3) {
        arr = arr.concat(node.nodeValue.split("")); //Chuyển đổi chuỗi thành một mảng chuỗi và in từng cái một khi in sau
      } else if (node.nodeType === 1) {
        let val = [];
        val = this.convert(node, val);
        arr.push({
          dom: node,
          val: val,
        });
      }
    }
    return arr;
  }

  print(dom, val, callback) {
    setTimeout(function () {
      dom.appendChild(document.createTextNode(val));
      callback();
    }, this.delay);
  }

  play(ele) {
    // Khi ký tự cuối cùng được in, hoạt ảnh được thực hiện và hoàn thành
    if (!ele.val.length) {
      if (ele.parent) this.play(ele.parent);
      else this.opts.done();
      return;
    }
    let current = ele.val.shift(); //Lấy phần tử đầu tiên trong khi xóa phần tử đầu tiên trong mảng
    if (typeof current === "string") {
      this.print(ele.dom, current, () => {
        this.play(ele); //Tiếp tục in ký tự tiếp theo
      });
    } else {
      let dom = current.dom.cloneNode(); //克隆节点，不克隆节点的子节点，所以不用加参数true
      ele.dom.appendChild(dom);
      this.play({
        parent: ele,
        dom,
        val: current.val,
      });
    }
  }

  start() {
    this.init();
    this.play(this.chain);
  }
}

export default Typing;
