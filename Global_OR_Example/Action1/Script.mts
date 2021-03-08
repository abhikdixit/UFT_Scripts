SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").SetSecure "5b150125b92d499ea7c9"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click



