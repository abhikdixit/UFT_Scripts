SystemUtil.Run "chrome.exe", "http://newtours.demoaut.com/mercurywelcome.php" 'opens Mercury Tours in Internet Explorer browser
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("SIGN-ON").Click
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("userName").Set "dixit"
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").WebEdit("password").Set "dixit"
Browser("Welcome: Mercury Tours").Page("Sign-on: Mercury Tours").Image("Login").Click

Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount").Select "2" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").Select "London" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").Select "New York" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "First" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights").Click @@ script infofile_;_ZIP::ssf7.xml_;_

'---------------------------Count total # of Radio Button and Selected Random---------------------------------------------------
Browser("Select a Flight: Mercury").Page("Select a Flight: Mercury").Check CheckPoint("Select a Flight: Mercury Tours") @@ script infofile_;_ZIP::ssf8.xml_;_
Dim variable2
Set desc=description.Create()
desc("name").value="outFlight"
Set radio=Browser("Select a Flight: Mercury").Page("Select a Flight: Mercury").ChildObjects(desc)
radiocount=radio.count
msgbox radiocount
For i=o to radiocount-1
itemcount=radio.item(i).GetRoProperty("items count")
msgbox "item count:" & itemcount
Next
variable2=RandomNumber(0,(itemcount-1))
randselection="#" & variable2

Browser("Select a Flight: Mercury").Page("Select a Flight: Mercury").WebRadioGroup("outFlight").Select randselection @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Select a Flight: Mercury").Page("Select a Flight: Mercury").WebRadioGroup("inFlight").Select "#3" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Select a Flight: Mercury").Page("Select a Flight: Mercury").Image("reserveFlights").Click @@ script infofile_;_ZIP::ssf11.xml_;_
