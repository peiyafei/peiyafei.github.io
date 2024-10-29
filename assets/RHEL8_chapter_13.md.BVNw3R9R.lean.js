import{_ as a,c as i,a0 as e,o as t}from"./chunks/framework.CGHvQLJz.js";const r=JSON.parse('{"title":"一、将SMABA设置为独立服务器","description":"","frontmatter":{},"headers":[],"relativePath":"RHEL8/chapter_13.md","filePath":"RHEL8/chapter_13.md"}'),l={name:"RHEL8/chapter_13.md"};function n(p,s,h,d,k,c){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="一、将smaba设置为独立服务器" tabindex="-1">一、将SMABA设置为独立服务器 <a class="header-anchor" href="#一、将smaba设置为独立服务器" aria-label="Permalink to &quot;一、将SMABA设置为独立服务器&quot;">​</a></h1><h2 id="环境介绍" tabindex="-1">环境介绍 <a class="header-anchor" href="#环境介绍" aria-label="Permalink to &quot;环境介绍&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">角色</th><th style="text-align:center;">操作系统</th><th style="text-align:center;">IP地址</th><th style="text-align:center;">DNS</th></tr></thead><tbody><tr><td style="text-align:center;">服务器</td><td style="text-align:center;">RHEL 8.10</td><td style="text-align:center;">192.168.100.254</td><td style="text-align:center;">223.5.5.5</td></tr><tr><td style="text-align:center;">客户端</td><td style="text-align:center;">Windows 7</td><td style="text-align:center;">192.168.100.2</td><td style="text-align:center;">223.5.5.5</td></tr></tbody></table><h2 id="_1-1-基础配置" tabindex="-1">1.1 基础配置 <a class="header-anchor" href="#_1-1-基础配置" aria-label="Permalink to &quot;1.1 基础配置&quot;">​</a></h2><ol><li>设置静态 <code>IP</code> 和 <code>DNS</code></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nmtui</span></span></code></pre></div><ol start="2"><li><p>设置主机名</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hostnamectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-hostname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 主机名</span></span></code></pre></div></li><li><p>设置chronyd服务与NTP服务器同步时间</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chronyd</span></span></code></pre></div><p>查询系统时区和系统同步时间状态</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timedatectl</span></span></code></pre></div></li><li><p>配置本地YUM源</p><ol><li><p>利用 <code>SecureFX</code> 软降将系统镜像上传到root的目录</p></li><li><p>新建挂载点</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/iso</span></span></code></pre></div></li><li><p>在 <code>/etc/fstab</code> 文件追加如下内容</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/root/rhel-8.10-x86_64-dvd.iso</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /mnt/iso</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iso9660</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> defaults</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div></li><li><p>重新加载配置文件，并使立即生效</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>mount -a</span></span></code></pre></div></li><li><p>配置 <code>yum</code> 源文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vim /etc/yum.repos.d/rhel8.repo</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[BaseOS]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">BaseOS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseurl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file:///mnt/iso/BaseOS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpgcheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[AppStream]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AppStream</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baseurl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file:///mnt/iso/AppStream</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gpgcheck</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span></code></pre></div></li><li><p>安装 <code>samba</code> 相关组件服务进行验证配置正确性</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba-client</span></span></code></pre></div></li></ol></li></ol><h2 id="_1-2-用户与用户组" tabindex="-1">1.2 用户与用户组 <a class="header-anchor" href="#_1-2-用户与用户组" aria-label="Permalink to &quot;1.2 用户与用户组&quot;">​</a></h2><ol><li><p>新建本地用户组</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupadd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  JingDiao</span></span></code></pre></div></li><li><p>增加jd用户，不创建 <code>home</code>，不允许登录主机，添加到附加组<code>JingDiao</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /sbin/nologin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -G</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JingDiao</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jd</span></span></code></pre></div></li><li><p>将系统用户jd添加到samba数据库文件并设置密码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">smbpass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jd</span></span></code></pre></div></li></ol><h2 id="_1-3-共享文件夹所属组和权限" tabindex="-1">1.3 共享文件夹所属组和权限 <a class="header-anchor" href="#_1-3-共享文件夹所属组和权限" aria-label="Permalink to &quot;1.3 共享文件夹所属组和权限&quot;">​</a></h2><ol><li><p>新建 <code>JDShare</code> 文件夹并改变其所属组权限</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/JDShare</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> :JingDiao</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/JDShare</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 770</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/JDShare</span></span></code></pre></div></li></ol><h2 id="_1-4-安装及配置samba" tabindex="-1">1.4 安装及配置SAMBA <a class="header-anchor" href="#_1-4-安装及配置samba" aria-label="Permalink to &quot;1.4 安装及配置SAMBA&quot;">​</a></h2><ol><li><p>安装 <code>SAMBA</code> 软件包（如果前面已安装，此处忽略）</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba-common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba-client</span></span></code></pre></div></li><li><p>在 <code>/etc/samba/smb.conf</code> 文件追加以下配置参数</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[JDShare]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        comment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JDFileShareServer</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/JDShare</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        browseable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        writable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        valid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> users</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  @JingDiao</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  @JingDiao</span></span></code></pre></div></li><li><p>验证 /etc/samba/smb.conf 文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testparm</span></span></code></pre></div></li><li><p>启用并启动smb服务</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> smb</span></span></code></pre></div></li></ol><h2 id="_1-5-防火墙配置" tabindex="-1">1.5 防火墙配置 <a class="header-anchor" href="#_1-5-防火墙配置" aria-label="Permalink to &quot;1.5 防火墙配置&quot;">​</a></h2><ol><li><p>打开所需的端口并使用firewall-cmd工具重新载入防火墙配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>firewall-cmd --permanent --add-service=samba</span></span>
<span class="line"><span>firewall-cmd --reload</span></span></code></pre></div></li><li><p>查看防火墙开放的服务</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-services</span></span></code></pre></div></li></ol><h2 id="_1-6-selinux配置" tabindex="-1">1.6 SELinux配置 <a class="header-anchor" href="#_1-6-selinux配置" aria-label="Permalink to &quot;1.6 SELinux配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">semanage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fcontext</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> samba_share_t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/JDShare</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">restorecon</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/JDShare</span></span></code></pre></div><h2 id="_1-7-客户端测试" tabindex="-1">1.7 客户端测试 <a class="header-anchor" href="#_1-7-客户端测试" aria-label="Permalink to &quot;1.7 客户端测试&quot;">​</a></h2><ol><li><p>Linux 客户端测试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># smblient -L 127.0.0.1 -U jd</span></span></code></pre></div></li><li><p>Windows 客户端测试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>\\\\192.168.100.254</span></span></code></pre></div></li></ol><h2 id="_1-8-格式化第二块硬盘并挂载作为数据备份盘" tabindex="-1">1.8 格式化第二块硬盘并挂载作为数据备份盘 <a class="header-anchor" href="#_1-8-格式化第二块硬盘并挂载作为数据备份盘" aria-label="Permalink to &quot;1.8 格式化第二块硬盘并挂载作为数据备份盘&quot;">​</a></h2><ol><li><p>列出磁盘信息</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parted</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre></div></li><li><p>配置第二块硬盘</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /dev/sdb</span></span></code></pre></div></li><li><p>查看帮助</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">help</span></span></code></pre></div></li><li><p>配置新的磁盘标签类型（双击Tab键列出所有）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mklabel</span></span>
<span class="line"><span>选择 gpt</span></span></code></pre></div></li><li><p>创建分区</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkpart</span></span>
<span class="line"><span>起始点为：1</span></span>
<span class="line"><span>结束点为：100%</span></span></code></pre></div></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ol>`,21)]))}const g=a(l,[["render",n]]);export{r as __pageData,g as default};