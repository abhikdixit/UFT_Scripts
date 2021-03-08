Set ExcelSheet = CreateObject("Excel.Application")
ExcelSheet.DisplayAlerts = "False"
ExcelSheet.WorkBooks.add


'Excelsheet.WorkSheets("Sheet1").cells(3,6) = "Flight Reservation Login" 
Excelsheet.WorkSheets("Sheet1").cells(3,6) = gTCNAME
ExcelSheet.Worksheets("Sheet1").Range("F3:F3").Font.bold = true
ExcelSheet.Worksheets("Sheet1").range("F3:F3").Font.size = 10
Excelsheet.WorkSheets("Sheet1").Cells(3,6).Interior.ColorIndex = 28
Excelsheet.WorkSheets("Sheet1").Cells(3,7).Interior.ColorIndex = 28
'Excelsheet.WorkSheets("Sheet1").Cells(3,6).Interior.ColorIndex = 28
Excelsheet.Worksheets("Sheet1").Range("F3:F3").Borders.LineStyle = 1
Excelsheet.Worksheets("Sheet1").Range("G3:G3").Borders.LineStyle = 1

Excelsheet.WorkSheets("Sheet1").cells(5,6) = "Execution Date: " & date 
Excelsheet.WorkSheets("Sheet1").cells(5,8) = "Time:  " & time 
ExcelSheet.Worksheets("Sheet1").Range("F5:H5").Font.bold = true

Excelsheet.WorkSheets("Sheet1").cells(7,5) = "Step No"
Excelsheet.WorkSheets("Sheet1").cells(7,6) = "Description"
Excelsheet.WorkSheets("Sheet1").cells(7,7) = "Status"
Excelsheet.WorkSheets("Sheet1").cells(7,8) = "Details"
ExcelSheet.Worksheets("Sheet1").Range("E7:H7").Font.bold = true

Set objExcelRange = ExcelSheet.ActiveWorkBook.Worksheets("Sheet1")
rowscnt = objExcelRange.UsedRange.rows.count

Excelsheet.Worksheets("Sheet1").Range("E7:E9").Borders.LineStyle = 1
Excelsheet.Worksheets("Sheet1").Range("E7:H9").Borders.LineStyle = 1
Excelsheet.Worksheets("Sheet1").columns("F").columnwidth = 35
Excelsheet.Worksheets("Sheet1").columns("H").columnwidth = 50
Excelsheet.Worksheets("Sheet1").range("E7:H9").Wraptext = true

'test_name=Datatable.Value("Test_Assets","Global") & "\Test Results\" & tn & ".xls"
test_name= "D:\E drive\QTP_Training_Data\Capgemini Training\SResult.xls"
ExcelSheet.ActiveWorkbook.SaveAs  test_name
ExcelSheet.ActiveWorkBook.Save

ExcelSheet.ActiveWorkbook.Close
ExcelSheet.Application.Quit
Set objExcelRange=nothing
Set ExcelSheet = Nothing
