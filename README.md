TypeScript Webpack PreConfig as First Entry Demo
=======================================

在第一个entry里进行一些必须先进行的设置，后面的entry可以直接使用。

虽然是两个entry，每个都import了`./hello`，但是webpack处理时只会引入一份`./hello`，不会重复

```
npm install
npm run demo
```
