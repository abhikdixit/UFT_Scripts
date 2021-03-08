'Open and Write data into a xls sheet

'Dim objXL,objWrkBk,objWrkSht
'Create excel object

Set objXL=CreateObject("Excel.Application")

'open workbook
Set objWrkBk=objXL.Workbooks.Open("D:\E drive\QTP_Training_Data\Capgemini Training\Test.xls")

'Open excel sheet
Set objWrkSht=objXL.ActiveWorkbook.Worksheets("Sheet1")

objWrkSht.cells(1,1)="Testing"
test1=objWrkSht.cells(1,1)
msgbox test1
'Release objects
objWrkBk.Save
objXL.Quit
Set objWrkSht=Nothing
Set objWrkBk=Nothing
Set objXL=Nothing



