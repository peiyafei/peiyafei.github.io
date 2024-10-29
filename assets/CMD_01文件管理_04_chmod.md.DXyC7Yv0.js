import{_ as e,c as t,a0 as s,o}from"./chunks/framework.CGHvQLJz.js";const u=JSON.parse('{"title":"cat 命令","description":"","frontmatter":{},"headers":[],"relativePath":"CMD/01文件管理/04_chmod.md","filePath":"CMD/01文件管理/04_chmod.md"}'),p={name:"CMD/01文件管理/04_chmod.md"};function i(l,a,n,r,c,d){return o(),t("div",null,a[0]||(a[0]=[s('<h1 id="cat-命令" tabindex="-1">cat 命令 <a class="header-anchor" href="#cat-命令" aria-label="Permalink to &quot;cat 命令&quot;">​</a></h1><p>chmod（英文全拼：change mode）命令是控制用户对文件的权限的命令</p><p>Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）</p><p><strong>使用权限 :</strong> 所有使用者</p><p><strong>语法</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>chmod [-cfvR] [--help] [--version] mode file...</span></span></code></pre></div><p><strong>参数说明</strong></p><p>mode : 权限设定字串，格式如下 :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[ugoa...][[+-=][rwxX]...][,...]</span></span></code></pre></div><p>其中：</p><ul><li><p>u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是。</p></li><li><p>+表示增加权限、- 表示取消权限、= 表示唯一设定权限。</p></li><li><p>r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该文件是个子目录或者该文件已经被设定过为可执行。</p></li></ul><p>其他参数说明：</p><ul><li>-c : 若该文件权限确实已经更改，才显示其更改动作</li><li>-f : 若该文件权限无法被更改也不要显示错误讯息</li><li>-v : 显示权限变更的详细资料</li><li>-R : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)</li><li>--help : 显示辅助说明</li><li>--version : 显示版本</li></ul><p><strong>符号模式</strong></p><p>使用符号模式可以设置多个项目：who（用户类型），operator（操作符）和 permission（权限），每个项目的设置可以用逗号隔开。 命令 chmod 将修改 who 指定的用户类型对文件的访问权限，用户类型由一个或者多个字母在 who 的位置来说明，如 who 的符号模式表所示:</p>',15)]))}const g=e(p,[["render",i]]);export{u as __pageData,g as default};
