---
title: Day4 链表 | LeetCode 24.两两交换链表中的节点 19.删除链表的倒数第N个节点 面试题 02.07. 链表相交 142.环形链表II
shortTitle: Day4 链表
date: 2022-11-29
category:
  - 算法
tag:
  - 代码随想录
excerpt: '<br>'
order: 4
prev: day3
next: 
---

::: tip 本文目录

[[toc]]

:::

## 24.两两交换链表中的节点

> [力扣题目链接](https://leetcode.cn/problems/swap-nodes-in-pairs/)

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

::: code-tabs#txt

@tab:active 示例 1：

```txt
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

@tab 示例 2：

```txt
输入：head = []
输出：[]
```

@tab 示例 3：

```txt
输入：head = [1]
输出：[1]
```

:::

<!-- more -->

### 思路

### python代码

```python

```

## 19.删除链表的倒数第 N 个结点

> [力扣题目链接](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

::: code-tabs#txt

@tab:active 示例 1：

```txt
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

@tab 示例 2：

```txt
输入：head = [1], n = 1
输出：[]
```

@tab 示例 3：

```txt
输入：head = [1,2], n = 1
输出：[1]
```

:::

### 思路

### python代码

```python

```

## 面试题 02.07. 链表相交 

> [力扣题目链接](https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/)

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

::: code-tabs#txt

@tab:active 示例 1：

```txt
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

@tab 示例 2：

```txt
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

:::

### 思路

### python代码

```python

```

## 142.环形链表II

> [力扣题目链接](https://leetcode.cn/problems/linked-list-cycle-ii/)

给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。**注意：pos 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改**链表。

::: code-tabs#txt

@tab:active 示例 1：

```txt
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

@tab 示例 2：

```txt
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

:::

### 思路

### python代码

```python

```
