import React from 'react';
import './guide.style.scss';

export default function Guide() {

  return (
    <div className="guide-content">
      <div className="guide-title">翻译小技巧</div>
      <ul className="guide-ul">
        <li className="guide-li">➡️ 实用工具多合一：内置<span>权威词典</span>、支持多种查词方式；
          <span>10+ 语种丰富音色</span>
          免费开放，练听力练跟读；
          对照阅读模式、个人术语库，更多功能等你挖掘！
        </li>
        <li className="guide-li">
          ❇️ xx<span>「xx翻译」</span>小程序，使用图片翻译、语音同传等更多能力
        </li>
        <li className="guide-li">
          🗂 安装「xx翻译」<span className="guide-li-click">浏览器插件</span>，外语网页一键翻译、划取查词
        </li>
      </ul>
      <img className="guide-ip" src="//p3-scmimg.bytescm.com/tos-cn-i-rn3s1tazwm/lab/mt-portal/mt-portal-fe/static/image/ip.b395334f.gif" />
    </div>
  )
}
