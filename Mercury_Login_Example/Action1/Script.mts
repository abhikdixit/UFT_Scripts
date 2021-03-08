SystemUtil.Run "chrome.exe", "http://newtours.demoaut.com/mercurywelcome.php" 'opens Mercury Tours in Internet Explorer browser
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("SIGN-ON").Click
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("userName").Set "dixit"
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("password").Set "dixit"
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").Image("Login").Click
Actaul_Result=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").GetROProperty("text")
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").Click
Browser("Welcome: Mercury Tours").Close
Expected_Result="SIGN-OFF"

If Expected_Result=Actaul_Result Then
	Reporter.ReportEvent micPass,"User has Successfully Logged In",""
	else
	Reporter.ReportEvent micFail,"User has Un-Successfully",""
End If
