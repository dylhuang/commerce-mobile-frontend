1、class命名，使用横杠

```html
<div class="user-info"></div>
```

2、组件命名：首字母大写+驼峰

```
Component.vue
UserInfo.vue

使用
<Component />
```

3、资源文件命名：下划线

```
avatar_icon.png
```

4、方法名称：小驼峰+动词

```js
function fetchData() {}

function handleClick() {}
```



## Git 提交规范

```text
feat 增加新功能
fix 修复问题/BUG
style 代码风格相关无影响运行结果的
perf 优化/性能提升
refactor 重构
revert 撤销修改
test 测试相关
docs 文档/注释
chore 依赖更新/脚手架配置修改等
workflow 工作流改进
ci 持续集成
mod 不确定分类的修改
wip 开发中
types 类型修改
```
