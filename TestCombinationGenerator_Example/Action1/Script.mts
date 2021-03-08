WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "London"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_1997476552_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set DataTable("Name")
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
wait(6)
Order_Number_Output=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 92 completed").GetROProperty("text") @@ hightlight id_;_2126150528_;_script infofile_;_ZIP::ssf4.xml_;_
Order_Number_Output=mid(Order_Number_Output,7,3)
Print Order_Number_Output
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click

