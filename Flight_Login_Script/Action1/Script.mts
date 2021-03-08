If WpfWindow("HPE MyFlight Sample Applicatio").Exist(2) Then
	Else
SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"	
End If
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").Close


