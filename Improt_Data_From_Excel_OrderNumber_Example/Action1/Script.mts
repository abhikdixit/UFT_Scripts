RunAction "Copy of Action1", oneIteration

DataTable.ImportSheet "D:\E drive\QTP_Training_Data\Capgemini Training\Order_Number_Data.xls","Sheet1","Action1"
nRow=DataTable.GetSheet("Action1").GetRowCount
For i=1 to nRow

WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_2101505752_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2108806032_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set DataTable("Order") @@ hightlight id_;_2101511512_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click @@ hightlight id_;_2101510648_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2101510072_;_script infofile_;_ZIP::ssf5.xml_;_

DataTable.SetNextRow
Next
