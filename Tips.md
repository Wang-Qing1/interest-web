## Tips

### 有个容器，里面有上下两个元素。 上元素的高度固定(但未知)， 想让下元素充满余下的高度。
用Flex布局解决：
```css
  #外层的CSS {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  #内层 固定的div {
    height: 100px;
  }

  #内存 剩下的div {
    flex-grow : 1;
  }
```