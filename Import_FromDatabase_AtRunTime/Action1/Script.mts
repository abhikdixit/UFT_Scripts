Set cn = CreateObject("ADODB.Connection")
Set rrs = CreateObject("ADODB.Recordset")
'----------------------------------------
cn.Open "Flight_DB"
  rrs.open "SELECT * from orders", cn
nRow = 1
While rrs.EOF<> True

DataTable.GetSheet("Global").setCurrentRow nRow

If nRow = 1 Then
	DataTable.getSheet("Global").AddParameter "name",rrs.fields(1)
	DataTable.getSheet("Global").AddParameter "order",rrs.fields(0)

End if	
datatable.Value("name")= rrs.fields(1)
datatable.Value("order")= rrs.fields(0)
datatable.SetNextRow
rrs.movenext
nRow=nRow+1
Wend
datatable.Export "D:\E drive\QTP_Training_Data\Capgemini Training\Order_Name_TestData.xls"


