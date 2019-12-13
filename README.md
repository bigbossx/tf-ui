# tf-ui

🌚 a Stupid ui Library
https://visonm.github.io/tf-ui/

## develop guide
##### 1.script
```
    npm run test //测试
    npm start //本地开发
    npm run build //打包lib
    npm run docs:build //构建静态文档
    git remote set-url origin git@github.com:VisonM/tf-ui.git && git push origin master //上线github
    npm run build && npm login && npm publish .//发布npm 
```

##### 2.结构说明
组件均放在component下并且需要 <code>.js</code>, <code>.md</code> ,<code>.test.js</code>文件（feature：引入typescript）。可参考Button组件
> 文档工具 https://github.com/styleguidist/react-styleguidist
css in js库 https://github.com/emotion-js/emotion

##### 2.测试组件是否可用
```
    yarn link //cd tf-ui project
    yarn link tf-ui //cd other react project,and test import {Button} from "tf-ui"
```

## 📦Install
```
    npm install tf-ui
    yarn add tf-ui
```

## 🔨 Usage

```
    import { Button } from "antd";
    ReactDOM.render(<Button text={"hey"}/>, mountNode);
```


