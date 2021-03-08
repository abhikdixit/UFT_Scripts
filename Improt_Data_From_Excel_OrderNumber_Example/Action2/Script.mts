Environment.LoadFromFile("D:\E drive\QTP_Training_Data\Capgemini Training\Env.xml")
uname=Environment.Value("ADMINUSER")
pass1=Environment.Value("ADMINPASSWORD")
app1=Environment.Value("appfile")
invokeapplication app1
'uname=inputbox("Enter the Agent Name")
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set uname @@ hightlight id_;_1983492288_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set pass1 @@ hightlight id_;_1983495504_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("text:=OK").Click @@ hightlight id_;_1983494880_;_script infofile_;_ZIP::ssf3.xml_;_
rem WpfWindow("HPE MyFlight Sample Applicatio").Close
'WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Los Angeles" @@ hightlight id_;_1983500256_;_script infofile_;_ZIP::ssf5.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_1983501312_;_script infofile_;_ZIP::ssf7.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1983490896_;_script infofile_;_ZIP::ssf9.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "3" @@ hightlight id_;_1983502176_;_script infofile_;_ZIP::ssf11.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1983502800_;_script infofile_;_ZIP::ssf12.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,2 @@ hightlight id_;_1983503088_;_script infofile_;_ZIP::ssf13.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1983503856_;_script infofile_;_ZIP::ssf14.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Test" @@ hightlight id_;_1983502416_;_script infofile_;_ZIP::ssf15.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1983504768_;_script infofile_;_ZIP::ssf16.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_133576_;_script infofile_;_ZIP::ssf20.xml_;_
