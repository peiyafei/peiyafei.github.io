import{_ as t,c as o,o as s,b as e,d as n}from"./app.af30e130.js";const N=JSON.parse('{"title":"col命令","description":"","frontmatter":{},"headers":[],"relativePath":"CMD/02文档编辑/09_fmt.md"}'),a={name:"CMD/02文档编辑/09_fmt.md"},c=e("h1",{id:"col命令",tabindex:"-1"},[n("col命令 "),e("a",{class:"header-anchor",href:"#col命令","aria-hidden":"true"},"#")],-1),l=e("p",null,"用于过滤控制字符。",-1),_=e("p",null,'在许多UNIX说明文件里，都有RLF控制字符。当我们运用shell特殊字符">"和">>"，把说明文件的内容输出成纯文本文件时，控制字符会变成乱码，col指令则能有效滤除这些控制字符。',-1),r=e("p",null,"...",-1),d=e("p",null,[e("strong",null,"参数：")],-1),i=e("p",null,"-b 过滤掉所有的控制字符，包括RLF和HRLF。 -f 滤除RLF字符，但允许将HRLF字符呈现出来。 -x 以多个空格字符来表示跳格字符。 -l<缓冲区列数> 预设的内存缓冲区有128列，您可以自行指定缓冲区的大小。",-1),h=[c,l,_,r,d,i];function p(f,u,m,x,F,L){return s(),o("div",null,h)}const $=t(a,[["render",p]]);export{N as __pageData,$ as default};
