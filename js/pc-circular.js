// 导航标题 链接
let menuss = [
  {
    title: "巡虎V2",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-xunhu-uat.runjian.com:19000" },
      }
    ],
  },
  {
    title: "护校平台",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-huxiao-uat.runjian.com:19000" },
      },
    ],
  },
  {
    title: "智慧安防小区",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-collect-zhsq-uat.runjian.com:19000/#/login" },
      },
    ],
  },
  {
    title: "治安要素采集平台",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-collect-uat.runjian.com:19000/" },
      },
    ],
  },
  {
    title: "河池水洞社区",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-collect-zhsq-uat.runjian.com:19000/" },
      },
    ],
  },
  {
    title: "涉案停车场",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-sacldj-uat.runjian.com:19000/" },
      },
    ],
  },
  {
    title: "智慧社区",
    menus: [
      {
        title: "演 示 环 境",
        href: { url: "https://ga-community-test.runjian.com:19000/user.html#/pages/frame/login" },
      }
    ],
  },
  {
    title: "检查站",
    menus: [
      {
        title: "暂 无 环 境",
        href: { url: "" },
      }
    ],
  },
  {
    title: "其他",
    menus: [
      {
        title: "暂 无 环 境",
        href: { url: "" },
      }
    ],
  },
]

// 移动端导航
let loveStr = "";
menuss.forEach(e => {
  let urls = "";
  let titles = "";
  e.menus.map(element => {
    return urls = `${element.href.url}`, titles = `${element.title}`
  }).join('')
  loveStr += `<li class="menu-link sub">
                <a onclick="return false" href="#" class="text-item">${e.title}<span class="icon"></span></a>
                <ul class="submenu">
                  <li class="sub-item">
                    <a onclick="return false" href="${urls}">${titles}</a>
                  </li>
                  <div class='wrapper'><button class="btn" data-clipboard-text="${urls}">复制链接</button></div>
                  <span class="tips">点击按钮复制超链接,粘贴到电脑端打开。</span>
                </ul>
              </li>`
})
document.getElementById("LoveID").innerHTML = loveStr;


// PC端
var ele = document.querySelector("#circle-menu1")
var bk = document.querySelector(".biankuang")
let Num = (document.body.offsetWidth / 1920) * 670 || (document.body.offsetWidth / 2560) * 900
let Num1 = (document.body.offsetWidth / 1920) * 480 || (document.body.offsetWidth / 2560) * 660
bk.style.width = Num1 + "px"
bk.style.height = Num1 + "px"
var cmenu = CMenu(ele).config({
  totalAngle: 360, //deg,
  spaceDeg: 1.5, //deg 间隔
  background: "#17396e", // 导航背景色
  backgroundHover: "#2698F8", // 导航鼠标移入时的背景色
  pageBackground: "transparent", //边框
  percent: 0.55, //% 高
  diameter: Num, //px 整体的大小
  horizontal: true,
  start: -45, //deg
  animation: "into",
  menus: menuss,
})

// 显示导航的时间
setTimeout(function () {
  cmenu
    .styles({
      //top: '200px',
      //left: '600px'
    })
    .show()
}, 150)

// 版权时间
let datatime = new Date();
let nowtime = datatime.getFullYear()
document.getElementById("nowtimes").innerText = nowtime

// 链接跳转的时候打开新的页面
window.onload = function () { var as = document.links; for (var i = 0; i < as.length; i++) { as[i].target = "_blank"; } }