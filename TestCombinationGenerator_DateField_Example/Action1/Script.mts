WpfWindow("HPE MyFlight Sample Applicatio").Activate
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "London"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris" @@ hightlight id_;_1956354080_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate DataTable("FlyDates")
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("BACK").Click

