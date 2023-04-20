顺序与覆盖
在@layer中定义的样式如果在应用中没有用到则编译后被删除

同时安装上面的导入顺序,现在的样式覆盖顺序如下

## 指令

### @tailwind

用于导入tailwind核心文件

### @layer

用于在一个层(如@layer components)中修改一些框架内部类或添加一些自定义的新类,使用方法如下

```css
@layer base {
  h1 {
      @apply xxx;
  } 
}

@layer components {
 .btn-primary {
      @apply xxxx xxx;
  }
}
```

### @apply

关联class，将多个tw class 组合

```css
.foo {
  color: red;
}
.select-btn {
  @apply foo rounded-b-lg bg-red-600;
}
```
