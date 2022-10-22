---
title: Git基本操作
description: git创建仓库、提交代码流程、分支操作、代码回滚等操作
---

# Git基本操作

### 创建仓库
初始化一个文件为本地仓库

```javascript
git init
```

从现有的仓库中拷贝项目

```javascript
git clone 地址
```

### 提交流程
从远端拉取代码

```javascript
git pull

// 将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并。
git pull origin master:brantest

// 如果远程分支是与当前分支合并，则冒号后面的部分可以省略。
git pull origin master
```

将修改提交至暂存区

```javascript
// 提交修改文件和新增文件（不包括删除文件）
git add .

// 提交已经被add的文件（修改文件和删除文件）不包括新增文件
git add -u

// 提交所有的修改
git add -A
```

查看仓库当前的状态，显示有变更的文件。

```javascript
git status
```

提交暂存区到本地仓库中

```javascript
git commit -m "message"
```

查看提交日志

```javascript
git log
```

将代码推送至远端

```javascript
git push
```
临时存储

```javascript
// 将修改临时存储
git stash

// 恢复工作目录
git stash pop

// 查看stash了哪些存储
git stash list

// 删除所有stash
git stash clear
```

### 分支操作
查看分支

```javascript
// 查看分支
git branch

// 查看远程分支
git branch -r

// 查看所有分支
git branch -a
```
操作分支
```javascript
// 切换分支
git checkout 分支名

// 创建分支
git branch 分支名

// 创建并切换分支
git checkout -b 分支名

// 将分支推送到远程
git push origin 分支名

// 将本地分支与远程分支关联（关联后才可进行 git pull 和 git push 操作）
git push --set-upstream origin 分支名

// 将远程分支同步到本地（在此之前需要 git pull 拉取远程仓库最新分支信息）
git checkout origin/分支名 --track

// 合并分支
git merge 分支名

// 删除本地分支
git branch -d 分支名

// 删除远程分支
git push origin --delete 分支名
```

### 代码回滚

```javascript
// 撤回最近一次的commit(撤销commit，不撤销git add)
git reset --soft HEAD~1

// 撤回最近一次的commit(撤销commit，撤销git add)
git reset --mixed HEAD~1

// 撤回最近一次的commit(撤销commit，撤销git add,还原改动的代码)
git reset --hard HEAD~1

// 执行 git log ，获取到 commit id
git reset [commit id]
```

### commit提交规范

| 类型     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| ci       | 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交 |
| docs     | 文档更新                                                     |
| feat     | 新增功能                                                     |
| fix      | bug 修复                                                     |
| perf     | 性能, 体验优化                                               |
| refactor | 重构代码(既没有新增功能，也没有修复 bug)                     |
| revert   | 回滚某个更早之前的提交                                       |
| style    | 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑) |
| test     | 新增测试用例或是更新现有测试                                 |
| chore    | 不属于以上类型的其他类型                                     |
| build    | 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交 |
