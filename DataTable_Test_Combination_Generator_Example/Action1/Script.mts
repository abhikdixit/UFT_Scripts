InvokeApplication "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

'------------------------------------Login---------------------------------
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1983492288_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp" @@ hightlight id_;_1983495504_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1983494880_;_script infofile_;_ZIP::ssf3.xml_;_
'-------------------------------Book Flight-----------------------------
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity") @@ hightlight id_;_1983500256_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity") @@ hightlight id_;_1983501312_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate DataTable("Date")
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1983490896_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "3" @@ hightlight id_;_1983502176_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1983502800_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,1 @@ hightlight id_;_1937056224_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1983503856_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Test" @@ hightlight id_;_1983502416_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1983504768_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").Close

