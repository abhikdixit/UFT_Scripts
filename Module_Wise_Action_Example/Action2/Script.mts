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
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
Else
Reporter.ReportEvent micFail,"Data Not available for Particual City",""&FromCity&ToCity
End If

