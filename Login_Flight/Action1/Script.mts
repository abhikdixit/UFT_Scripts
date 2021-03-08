

RepositoriesCollection.Add "D:\E drive\QTP_Training_Data\Capgemini Training\Flight_App.tsr"

Password=Crypt.Encrypt "hp"

InvokeApplication "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
'uname=inputbox("Enter the Agent Name")
wait(2)
'------------------------------Bitmap CheckPoint---------------------------------------


WpfWindow("HPE MyFlight Sample Applicatio").Check CheckPoint("HPE MyFlight Sample Application") @@ hightlight id_;_2295504_;_script infofile_;_ZIP::ssf31.xml_;_

'-------------------------------------------------------------------------------
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1983492288_;_script infofile_;_ZIP::ssf1.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK") @@ hightlight id_;_1987159424_;_script infofile_;_ZIP::ssf22.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure Password

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK_2") @@ hightlight id_;_1931702888_;_script infofile_;_ZIP::ssf23.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1983494880_;_script infofile_;_ZIP::ssf3.xml_;_

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
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Test" @@ hightlight id_;_1983502416_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1983504768_;_script infofile_;_ZIP::ssf16.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").WaitProperty "visible", False, 10000

'WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("WpfButton_3").WaitProperty "helptext", "Delete Order", 10000 @@ hightlight id_;_1906740176_;_script infofile_;_ZIP::ssf24.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("FLIGHT DETAILS").WaitProperty "name","ORDER DETAILS",10000
'WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("FLIGHT DETAILS").WaitProperty "name", "ORDER DETAILS", 10000 @@ hightlight id_;_2125058600_;_script infofile_;_ZIP::ssf25.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTicketsCombo").WaitProperty "devname","numOfTicketsCombo",10000
'wait(5)

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").WaitProperty "visible", False, 10000 @@ hightlight id_;_1926835064_;_script infofile_;_ZIP::ssf29.xml_;_
Order_Number=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 216 completed").GetROProperty("text")
'msgbox Order_Number
Reporter.ReportEvent micPass,"",""&Order_Number
'WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_133576_;_script infofile_;_ZIP::ssf20.xml_;_
