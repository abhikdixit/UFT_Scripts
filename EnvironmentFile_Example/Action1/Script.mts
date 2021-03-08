'-------Environment File ----Use to get Common data of Application-----------------

Environment.LoadFromFile("D:\E drive\QTP_Training_Data\Capgemini Training\Env.xml")
uname=Environment.Value("ADMINUSER")
pass1=Environment.Value("ADMINPASSWORD")
app1=Environment.Value("appfile")

invokeapplication app1


WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set uname @@ hightlight id_;_1983492288_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set pass1 @@ hightlight id_;_1983495504_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1983494880_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").Close


