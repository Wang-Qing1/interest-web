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

### div内文字居中
使用table和table-cell来完成：
```javascript
  <div className={'parent'}>
        <div className={'child'}>
          <span>这里什么都没有~(￣▽￣)~</span>
        </div>
      </div>
```
```css
.parent {
    display: table;
    width: 100%;
    height: 100%;
}

.child {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
```