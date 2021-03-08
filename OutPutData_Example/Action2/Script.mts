'-------------------------------Book Flight-----------------------------
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity",dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity",dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate DataTable("Date",dtLocalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "3"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
FromCity=DataTable.Value("FromCity",dtLocalSheet)
ToCity=DataTable.Value("ToCity",dtLocalSheet)
If WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Exist Then
	

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,1
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Test"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
'----------------------Capture Order No. User Test Area Output Value----------
wait(5)
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 216 completed").Output CheckPoint("Order 288 completed") @@ hightlight id_;_2086591192_;_script infofile_;_ZIP::ssf1.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 216 completed").Output CheckPoint("Order 328 completed") @@ hightlight id_;_2045896688_;_script infofile_;_ZIP::ssf2.xml_;_
Order_Number=DataTable.Value("Order_No",dtLocalSheet)
'msgbox Order_Number
Order_Number=mid(Order_Number,7,3)
'msgbox Order_Number
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Click
Wpfwindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set Order_Number
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
'-------------------------------------------------------------------------------
Else
Reporter.ReportEvent micFail,"Data Not available for Particual City",""&FromCity&ToCity
End If
'DataTable.Export "D:\E drive\QTP_Training_Data\Capgemini Training\Order_Number_Data.xls"

