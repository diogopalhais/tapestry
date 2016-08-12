# Grid

## Variables

| Variable                     | property      | value                       | desc.                                                                      |
|------------------------------|---------------|-----------------------------|----------------------------------------------------------------------------|
| ** $grid-column-number **    | number        | `12`                        | grid column number                                                         |
| ** $grid-responsive-range ** | map           | `(phablet, tablet, laptop)` | devices to generate responsive grid systems, matches with $breakpoints map |
| ** $grid-gutter-width **     | size          | `r(4)`                      | gutter width                                                               |



```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--3">3</div>
  <div class="Grid-cell Grid-cell--3">3</div>
  <div class="Grid-cell Grid-cell--3">3</div>
  <div class="Grid-cell Grid-cell--3">3</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--5">5</div>
  <div class="Grid-cell Grid-cell--7">7</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--6">6</div>
  <div class="Grid-cell Grid-cell--6">6</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--7">7</div>
  <div class="Grid-cell Grid-cell--5">5</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--8">8</div>
  <div class="Grid-cell Grid-cell--4">4</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--9">9</div>
  <div class="Grid-cell Grid-cell--3">3</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--10">10</div>
  <div class="Grid-cell Grid-cell--2">2</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--11">11</div>
  <div class="Grid-cell Grid-cell--1">1</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--12">12</div>
</div>
```



## Grid with gutters

```html
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
</div>
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--9">9</div>
  <div class="Grid-cell Grid-cell--3">3</div>
</div>
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
</div>
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--5">5</div>
  <div class="Grid-cell Grid-cell--7">7</div>
</div>
```



## Centered Grid

```html
<div class="Grid Grid--centered">
  <div class="Grid-cell Grid-cell--1">1 centered</div>
  <div class="Grid-cell Grid-cell--3">3 centered</div>
</div>
<div class="Grid Grid--centered">
  <div class="Grid-cell Grid-cell--6">6 centered</div>
</div>
```



## Flexible Grid-cells

.Grid-cell--fr uses the remaining space. Grid-cells can be set with fixed and fluid widths.
```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--fr">Remaining space</div>
  <div class="Grid-cell" style="width: 100px;">100px</div>
</div>
```



## Stretched Grid-cells

.Grid-cell--stretched allow a cell to be as high as the highest cell of the row. Standard and stretched cells can be mixed up.
```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--1 Grid-cell--stretched">Lorem ipsum</div>
  <div class="Grid-cell Grid-cell--4 Grid-cell--stretched">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  <div class="Grid-cell Grid-cell--4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
  <div class="Grid-cell Grid-cell--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
</div>
<div class="Grid Grid--centered">
  <div class="Grid-cell Grid-cell--1">Lorem ipsum</div>
  <div class="Grid-cell Grid-cell--4 Grid-cell--stretched">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
  <div class="Grid-cell Grid-cell--3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
</div>
```



## Centered Grid-cells

.Grid-cell--centered centers itself thanks to flex.
```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--4 Grid-cell--centered">Remaining space</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--3 Grid-cell--centered">3 centered</div>
  <div class="Grid-cell Grid-cell--3 Grid-cell--centered">3 centered</div>
</div>
```



## Responsive Grid-cells
Grid-cells width can change according to viewport. Use .Grid-cell--n@phablet for viewport greater than 414px, .Grid-cell--n@tablet for viewport greater than 768px and .Grid-cell--n@laptop for viewport greater than 1024px.
```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--12 Grid-cell--6@tablet Grid-cell--2@laptop">2 | 6@tablet | 12@laptop</div>
  <div class="Grid-cell Grid-cell--12 Grid-cell--6@tablet Grid-cell--2@laptop">2 | 6@tablet | 12@laptop</div>
  <div class="Grid-cell Grid-cell--12 Grid-cell--12@tablet Grid-cell--4@laptop">4 | 12@tablet | 12@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
</div>
```
