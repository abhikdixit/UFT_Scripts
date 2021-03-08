invokeapplication "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("devname:=HPE MyFlight Sample Application").Activate
WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=agentName").Set "john"
WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=password").Set "hp"
WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("devname:=okButton").click

