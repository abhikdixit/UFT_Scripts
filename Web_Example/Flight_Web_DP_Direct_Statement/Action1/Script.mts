'SystemUtil.Run "iexplore.exe","http://newtours.demoaut.com/mercurywelcome.php"
    Dim oIE
    Set oIE = CreateObject("InternetExplorer.Application")
    oIE.Visible = True
    oIE.Navigate2 "http://newtours.demoaut.com/"
Browser("name:=Welcome: Mercury Tours").page("title:=Welcome: Mercury Tours").link("name:=SIGN-ON").Click
Browser("opentitle:=Welcome: Mercury Tours").page("title:=Sign-on: Mercury Tours").WebEdit("name:=userName").Set "dixit"
Browser("opentitle:=Welcome: Mercury Tours").page("title:=Sign-on: Mercury Tours").WebEdit("name:=password").Set "dixit"
Browser("opentitle:=Welcome: Mercury Tours").page("title:=Sign-on: Mercury Tours").image("name:=login").Click


