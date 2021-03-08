On Error Resume Next

InvokeApplication "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1983492288_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK") @@ hightlight id_;_1987159424_;_script infofile_;_ZIP::ssf22.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp" @@ hightlight id_;_1983495504_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK_2") @@ hightlight id_;_1931702888_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1983494880_;_script infofile_;_ZIP::ssf3.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set DataTable("order")
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click
VerifyNewSearchButton=WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").GetROProperty("text")
print VerifyNewSearchButton
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
WpfWindow("HPE MyFlight Sample Applicatio").Close
Err.raise

print ""&err.source
print ""&err.Description
print ""&err.number
print ""&err.clear
