﻿WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_1964674608_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Abhi"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
Ticket=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("1").GetROProperty("text")
Price=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("$163.40").GetROProperty("text")
Total=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("$163.40_2").GetROProperty("text")
'Price=mid(Price,2)
Price=cdbl(Price)
'Total=mid(Total,2)
Total=cdbl(Total)
If Total=Ticket*Price Then
	reporter.ReportEvent micPass,"Total Price is","Correct"
	else
	reporter.ReportEvent micFail,"Total Price is","In-Correct"
End If
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click

