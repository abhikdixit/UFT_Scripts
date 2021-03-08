
RunAction "Copy of Action1", oneIteration

RunAction "Action1 [Search_Flight_Action_Example]", oneIteration

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Test" @@ hightlight id_;_1983502416_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1983504768_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").WaitProperty "visible", False, 10000 @@ hightlight id_;_1926835064_;_script infofile_;_ZIP::ssf29.xml_;_
Order_Number=WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 216 completed").GetROProperty("text")
Reporter.ReportEvent micPass,"",""&Order_Number

