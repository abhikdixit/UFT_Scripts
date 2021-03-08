'Creating a description object
LaunchApp("C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")

'Login "HPE MyFlight Sample Application","agentName","password","okButton","john","hp"

EnterTextValue "devname","HPE MyFlight Sample Application","devname","agentName","john"
EnterTextValue "devname","HPE MyFlight Sample Application","devname","password","hp"
'ClickButton "devname","HPE MyFlight Sample Application","devname","okButton"
'ClickButton "devname","HPE MyFlight Sample Application","devname","FIND FLIGHTS"
ClickButton "HPE MyFlight Sample Application","Login Failed","","WinButton","text","OK"


