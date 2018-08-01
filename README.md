# Sheet, a Google Sheet library for gas-include

```
$ npm i -g google-apps-script
$ gas new myProject && cd myProject
$ gas i -s sheet
$ gas push
```
## Functions

Retrieve the value from a given cell in a given sheet
```
sheet_getValue(row, column, sheet);
```

Set the value of a given cell in a given sheet
```
sheet_setValue(row, column, sheet, value);
```

Set cell the background color of a given cell in a given sheet
```
sheet_setBackgroundColor(row, column, sheet, backgroundcolor);
```
Set the font color of a given cell in a given sheet
```
sheet_setFontColor(row, column, sheet, fontcolor);
```
