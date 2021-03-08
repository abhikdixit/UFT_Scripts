WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_1985855480_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_2077243680_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("byNumberWatermark").Set DataTable("Order_Number") @@ hightlight id_;_2089872080_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SEARCH").Click
If WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Error").Exist(2) Then
	WpfWindow("HPE MyFlight Sample Applicatio").Dialog("Error").WinButton("OK").Click
Else
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2089874096_;_script infofile_;_ZIP::ssf6.xml_;_
End If
