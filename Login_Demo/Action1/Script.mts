rem SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

InvokeApplication "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1982720800_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK1").Click @@ hightlight id_;_1982709904_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_264594_;_script infofile_;_ZIP::ssf5.xml_;_
