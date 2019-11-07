// console.log("145");
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载JS失败");
      }
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    // console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        // 找到标签名为warning的第一个元素，获取它的文本内容
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim()); //.trim()方法删除字符串两端的空格
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  // 下面的onreadystatechange函数用到了“回调”，当readyState码变为4时浏览器会回头调用这个函数，得到服务器响应内容：request.response
  request.onreadystatechange = () => {
    // console.log(request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(typeof request.response);
      // console.log(request.response);
      // JSON.parse()方法把会把一个JSON字符串转换成JS的数值或是物件：
      const bool = JSON.parse(request.response);
      // console.log(typeof bool);
      // console.log(bool);
    }
  };
  request.send();
  // 发送请求后立即打印出响应内容是空的，因为异步，此时收不到响应：
  console.log(request.response);
  // 2s后会收到响应，此时才能打印出响应内容；也可以把这行代码放到onreadystatechange函数里面：
  setTimeout(() => {
    console.log(request.response);
  }, 2000);
};

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  if (n <= 2) {
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
      }
    };
    request.send();
    n += 1;
  } else {
    alert("没有更多页面，请知悉");
  }
};
