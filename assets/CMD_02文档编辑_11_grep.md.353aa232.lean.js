import{_ as t,c as o,o as s,b as e,d as n}from"./app.af30e130.js";const R=JSON.parse('{"title":"col命令","description":"","frontmatter":{},"headers":[],"relativePath":"CMD/02文档编辑/11_grep.md"}'),a={name:"CMD/02文档编辑/11_grep.md"},c=e("h1",{id:"col命令",tabindex:"-1"},[n("col命令 "),e("a",{class:"header-anchor",href:"#col命令","aria-hidden":"true"},"#")],-1),l=e("p",null,"用于过滤控制字符。",-1),r=e("p",null,'在许多UNIX说明文件里，都有RLF控制字符。当我们运用shell特殊字符">"和">>"，把说明文件的内容输出成纯文本文件时，控制字符会变成乱码，col指令则能有效滤除这些控制字符。',-1),_=e("p",null,"...",-1),d=e("p",null,[e("strong",null,"参数：")],-1),i=e("p",null,"-b 过滤掉所有的控制字符，包括RLF和HRLF。 -f 滤除RLF字符，但允许将HRLF字符呈现出来。 -x 以多个空格字符来表示跳格字符。 -l<缓冲区列数> 预设的内存缓冲区有128列，您可以自行指定缓冲区的大小。",-1),p=[c,l,r,_,d,i];function h(u,f,m,x,g,F){return s(),o("div",null,p)}const N=t(a,[["render",h]]);export{R as __pageData,N as default};
