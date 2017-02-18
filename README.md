# How to setup

```npm install```

# How to start

```npm start```

# Procedure 

I built two components, `TestComponent1` and `TestComponent2` that are each 10 layers of nested `div`s. 
Both are the same, except that `TestComponent1` uses css module classes (`styles['layer2']`) and `TestComponent2`
uses global classes (`className='layer2'`) with `:global(.layer2)`.

## Output using css module classes (1.78 KB)
```
._3B8eR {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

._1Af9e {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

._3lnOK {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

._3wDUd {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

.kcDah {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

.DY6cC {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

._10m84 {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

._2Evtl {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

._13Etv {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }

.B0Txg {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }
```

## Output using global classes (2.9 KB)
```
.YU6pH {
  color: #000;
  display: block;
  font-family: Helvetica, sans-serif;
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
  height: auto;
  width: auto; }
  .YU6pH .layer2 {
    color: #000;
    display: block;
    font-family: Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
    line-height: 1;
    height: auto;
    width: auto; }
    .YU6pH .layer2 .layer3 {
      color: #000;
      display: block;
      font-family: Helvetica, sans-serif;
      font-size: 50px;
      font-weight: bold;
      line-height: 1;
      height: auto;
      width: auto; }
      .YU6pH .layer2 .layer3 .layer4 {
        color: #000;
        display: block;
        font-family: Helvetica, sans-serif;
        font-size: 50px;
        font-weight: bold;
        line-height: 1;
        height: auto;
        width: auto; }
        .YU6pH .layer2 .layer3 .layer4 .layer5 {
          color: #000;
          display: block;
          font-family: Helvetica, sans-serif;
          font-size: 50px;
          font-weight: bold;
          line-height: 1;
          height: auto;
          width: auto; }
          .YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 {
            color: #000;
            display: block;
            font-family: Helvetica, sans-serif;
            font-size: 50px;
            font-weight: bold;
            line-height: 1;
            height: auto;
            width: auto; }
            .YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 {
              color: #000;
              display: block;
              font-family: Helvetica, sans-serif;
              font-size: 50px;
              font-weight: bold;
              line-height: 1;
              height: auto;
              width: auto; }
              .YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 .layer8 {
                color: #000;
                display: block;
                font-family: Helvetica, sans-serif;
                font-size: 50px;
                font-weight: bold;
                line-height: 1;
                height: auto;
                width: auto; }
                .YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 .layer8 .layer9 {
                  color: #000;
                  display: block;
                  font-family: Helvetica, sans-serif;
                  font-size: 50px;
                  font-weight: bold;
                  line-height: 1;
                  height: auto;
                  width: auto; }
                  .YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 .layer8 .layer9 .layer10 {
                    color: #000;
                    display: block;
                    font-family: Helvetica, sans-serif;
                    font-size: 50px;
                    font-weight: bold;
                    line-height: 1;
                    height: auto;
                    width: auto; }
```

# Minifying

Using minification can reduce the size of each even more.

## Minify using css modules classes (203 B)

```
.B0Txg,.DY6cC,._10m84,._13Etv,._1Af9e,._2Evtl,._3B8eR,._3lnOK,._3wDUd,.kcDah{color:#000;display:block;font-family:Helvetica,sans-serif;font-size:50px;font-weight:700;line-height:1;height:auto;width:auto}
```

## Minify using global classes (557 B)

```
.YU6pH,.YU6pH .layer2,.YU6pH .layer2 .layer3,.YU6pH .layer2 .layer3 .layer4,.YU6pH .layer2 .layer3 .layer4 .layer5,.YU6pH .layer2 .layer3 .layer4 .layer5 .layer6,.YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7,.YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 .layer8,.YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 .layer8 .layer9,.YU6pH .layer2 .layer3 .layer4 .layer5 .layer6 .layer7 .layer8 .layer9 .layer10{color:#000;display:block;font-family:Helvetica,sans-serif;font-size:50px;font-weight:700;line-height:1;height:auto;width:auto}
```