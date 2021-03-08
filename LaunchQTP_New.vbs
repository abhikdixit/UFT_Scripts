Dim App 'As Application
Set App = CreateObject("QuickTest.Application")
App.Launch
App.Visible = True

RepositoriesCollection.Add "D:\E drive\QTP_Training_Data\Capgemini Training\Flight_App.tsr"

InvokeApplication "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK")

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set "hp"

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK_2")

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
