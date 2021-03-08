WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_1964674608_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Abhi"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
wait(6)
Order_Number_Output=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 92 completed").GetROProperty("text") @@ hightlight id_;_2126150528_;_script infofile_;_ZIP::ssf4.xml_;_
Order_Number_Output=mid(Order_Number_Output,7,3)

DataTable.Value("Order_Number")=Order_Number_Output
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click

