
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Los Angeles" @@ hightlight id_;_1983500256_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_1983501312_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate "6-Jun-2018"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1983490896_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "3" @@ hightlight id_;_1983502176_;_script infofile_;_ZIP::ssf11.xml_;_

'--Getting Text using GetROProperty----Comparing using If and Else-------------
FindFlight_Act=WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").GetROProperty("text")
FindFlight_Exp="FIND FLIGHTS"

If FindFlight_Act=FindFlight_Exp Then
	Reporter.ReportEvent micPass,"Find Flight is ","Visible="&FindFlight_Act
	else
	Reporter.ReportEvent micFail,"Find Flight is Not","Visible="&FindFlight_Act
End If
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1983502800_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 4,1 @@ hightlight id_;_1937056224_;_script infofile_;_ZIP::ssf21.xml_;_
wait(5)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1983503856_;_script infofile_;_ZIP::ssf14.xml_;_

