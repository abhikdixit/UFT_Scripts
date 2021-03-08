WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity",dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("BACK").Click

