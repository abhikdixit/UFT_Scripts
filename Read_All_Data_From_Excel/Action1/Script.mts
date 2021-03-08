'###############################################
' Read complete data from an Excel Sheet content
'###############################################

'Create Excel Object 
Set excel=createobject("excel.application")

'Make it Visible  
excel.Visible=True  

'Open Excel File
Set workbook=excel.Workbooks.open("D:\E drive\QTP_Training_Data\Capgemini Training\Order_Export.xls")

'Get Control on Sheet
Set worksheet=excel.Worksheets.Item("Global")

'Get Used Row and Column Count
rc=worksheet.usedrange.rows.count
cc=worksheet.usedrange.columns.count

'Loop through Rows
For Row=1 to rc
 'Loop through Columns
 For Column=1 to cc
  'Get Cell Data
  RowData=RowData&worksheet.cells(Row,Column)&vbtab
 Next
RowData=RowData&vbcrlf
Next

'Display complete Data
msgbox RowData

'Close Work Book  
workbook.Close  

'Quit from Excel Application  
excel.Quit  
  
'Release Variables  
Set worksheet=Nothing
Set workbook=Nothing
Set excel=Nothing
