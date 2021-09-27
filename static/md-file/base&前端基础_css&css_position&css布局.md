# CSS垂直居中
## 没有设置子元素width和height
### html代码
```
<div class="parents parent">
    <div class="child">content</div>
</div>
```
### css代码
```
.parents{
    height: 800px;
    border: 1px solid red;
}
```

1. flex布局
    ```
    .parent{
        display: flex;
    }
    .child{
        justify-content: center;
        align-items: center;
    }
    ```
2. transform布局
    ```
    .parent{
        position: relative;
    }
    .child{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    ```
3. position布局
    ```
    .parent{
        position: relative;
    }
    .child{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    ```
## 设置了子元素width和height
### css代码
4. position: absolute加margin布局
    ```
    .parent{
        postion: relative;
    }
    .child{
        postion: absolute;
        top: 50%;
        left: 50%;
        height: 100px;
        width: 200px;
        margin-left: -100px;
        margin-top: -50px;
    }
    ```

