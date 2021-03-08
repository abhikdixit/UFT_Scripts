LaunchApp("C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")
'EnterTextValue "HPE MyFlight Sample Application","","","agentName","john","","",""
'EnterTextValue "HPE MyFlight Sample Application","","","password","5b17e42454265f68cb0e","","","YES"
'ClickButton "HPE MyFlight Sample Application","","","Cancel","",""
'VerifyObjectProperty "HPE MyFlight Sample Application","","","WpfButton","devname","FIND FLIGHTS","enabled","True"
'SelectDropDownItem "HPE MyFlight Sample Application","","","fromCity","","","Zurich"
'SelectDropDownItem "HPE MyFlight Sample Application","","","numOfTickets","","","3"
'CloseApp "HPE MyFlight Sample Application","","","",""
EnterTextValue "HPE MyFlight Sample Application","","","agentName","john","","",""
EnterTextValue "HPE MyFlight Sample Application","","","password","5b1a17918a707bb39440","","","YeS"
'ClickButton "HPE MyFlight Sample Application","Login Failed","","WinButton","text","OK"
ClickButton "HPE MyFlight Sample Application","","","WpfButton","devname","okButton"

