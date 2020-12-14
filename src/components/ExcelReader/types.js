export const SheetJSFT = ["xlsx", "xls"]
  .map(function(x) {
    return "." + x;
  })
  .join(",");

// "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"