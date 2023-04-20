---
slug: 如何管理React 应用状态
title: 如何管理 React 应用状态
authors: kenanyah
tags: [study, react]
---

某些数据如果能从已有的的State 中计算得到，不应该存在state中，这样才能简化状态处理逻辑

## React 思想：状态驱动UI

> 考虑功能有哪几个状态

example:

+ 列表数据
+ 查询条件（用户输入）
+ 搜索结果

> 搜索结果取决去列表原始数据和查询条件，此时在使用useMemo 对搜索结果进行缓存优化

## 尽可能避免中间状态

URL与State同步问题, 将用户输入的查询条件更新到state，并保存到URL中，其实这个就是多了state这个中间状态，好的处理方式应该是**直接让URL和输入框同步，输入直接修改URL，不使用state做中转**
