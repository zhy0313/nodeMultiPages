# node.js+express+mysql+Webpack+Vue+es6进行多页面开发 v.1.0.1

---

## 前言
这是基于node.js的一套全栈网站开发系统，可以用于移动端，也可以用于PC端。整个架构分两部分，一部分是后端部分，主要利用node.js+express+mysql为前端提供API接口；另一部分是前端部分，主要是利用Webpack+Vue+axios，调用后端提供的API接口，进行页面的渲染。与传统的单页面开发不同，此套系统是多页面的开发模式，前端的开发目录source文件夹，仿照小程序的目录结构，利用vue的单文件，进行组件式开发。同时，此套系统利用node.js+express，从后端直接进行页面渲染，克服了传统ajax数据请求，搜索引擎不能抓取页面数据的缺陷。


## v.1.0.1版本说明
由于之前webpack采用的是1.x的版本，在有些操作系统会出现了一些莫名奇怪的问题，跟踪发现是由于webpack版本过低造成的，所以此次对package.json里面的依赖包进行升级，webpack.config.js文件也进行了相应的改写，另外在更目录下添加了.babelrc文件，如果安装的时候没有此文件，创建一个.babelrc文件，手动添加代码为：
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": ["transform-runtime"],
  "comments": false 
}



## 项目目录结构

    ├─webpages (build构建完后的html文件存放目录，放入服务器相应目录即可访问)
    │     └─index (生成的一个模块）
    │         ├─index.html (同一模块的模板放在一个模块目录下)
    │        
    ├─webstatics (build构建完后的静态资源文件目录)
    │  ├─css
    │  ├─imgs
    │  ├─js
    │  └─...
    │─routers（后端路由文件夹）
    │─views （后端渲染模板文件夹，存放静态资源如html、ejs等模板文件）
    └─source (前端开发目录，此目录主要用于vue单文件组件开发)
        ├─components (vue公用组件目录)
        │  ├─A
        │  │ ├─A.vue
        │  │      
        │  └─B
        │    ├─B.vue
        │          
        └─index (一个业务模块,每个业务下可能有多个页面)
            ├─index
            │  ├─app.vue(单文件组件)
            │  ├─index.html(html模板文件，主要用于build构建时候，生成一个静态的html文件，一般此文件不需要编写)
            │  ├─index.js（本页面的入口文件）
            │  └─static(本页面资源文件，比如可以存放图片等)


###### 页面文件说明

1、source文件夹为开发目录，发布到线上的时候，此目录无需发布

2、source里的 index文件夹
index文件夹，必须包含app.vue、index.html、index.js这三个文件。一个文件夹，其实就是一个页面，所需的资源文件也都放在这个文件夹下，不需要这个页面时，也只需要删除这个文件夹。

3、webpages/index 下的index.html文件

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>index - Vue Webpack Example</title>
    
  <link href="/webstatics/css/vendors.css" rel="stylesheet"><link href="/webstatics/css/index/index.css" rel="stylesheet"></head>
  <body>
    <app></app>
    
  <script src="/webstatics/js/vendors.91e0fac1fd8493060c99.js"></script><script src="/webstatics/js/index/index.91e0fac1fd8493060c99.js"></script></body>
</html>

```

venders.css和venders.js文件是webpack插件帮我们自动生成的公共样式模块和公共js模块。打开页面，还能看到其他资源文件也都被正确处理了。

4、目前后端我们使用的是3000端口，前端使用的是8080端口，开发者可以根据项目需要修改端口号；前端修改是在webpack.webconfig.js文件里；后端是在app.js文件里，app.js我们只是简单搭建了一个服务启动文件，若进行大型项目开发，还需自己配置文件，比如错误处理、日志打印等；

###### 使用步骤
1、git clone https://github.com/liujianping520/nodeMultiPages

2、安装依赖：npm install

3、安装依赖：npm run build （先进行build，主要是为了先展示一个demo）

4、开发环境：cd 到项目目录执行命令 npm run dev ；可以通过浏览器访问 localhost:8080/index/index.html 

5、开发环境：cd 到项目目录执行命令 npm start app.js （如果你安装了PM2 可以 pm2 start app; 如果安装了supervisor 可以 supervisor app）

======到这一步，整个项目就完全跑起来了，接下来你就可以进行你的开发工作了=============

【最后】编译发布：执行命令 npm run build ；然后把webstatics 与 webpages复制到相应的服务器目录下即可通过 http://项目域名 访问；


备注：
此项目我们将持续维护，进行版本的更新升级

