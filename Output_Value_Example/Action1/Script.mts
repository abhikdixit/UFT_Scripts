WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_1964674608_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Abhi"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
wait(10)
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 92 completed").Output CheckPoint("Order 99 completed") @@ hightlight id_;_2126150528_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click

