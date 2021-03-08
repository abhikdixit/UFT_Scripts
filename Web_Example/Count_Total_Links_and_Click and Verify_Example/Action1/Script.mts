set IE= CreateObject("InternetExplorer.Application")
IE.Visible = True
IE.Navigate "http://newtours.demoaut.com/mercurywelcome.php"

'SystemUtil.Run "chrome.exe", "http://newtours.demoaut.com/mercurywelcome.php" 'opens Mercury Tours in Internet Explorer browser

'---------------------------Count total # of Radio Button and Selected Random---------------------------------------------------

Set MyObjLink = Description.Create()
MyObjLink("micclass").value = "Link"
MyObjLink("html tag").value = "A"
Set objLinks = Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").ChildObjects(MyObjLink)

LinkCount = objLinks.Count
Reporter.ReportEvent micPass,"Total No. of ","Links"&LinkCount

For i = 0 to LinkCount-1
HrefTag=objLinks(cint(i)).GetRoProperty("href")
Reporter.ReportEvent micPass,"The Name of the","Link"&HrefTag
IE.Navigate HrefTag
Next
 @@ script infofile_;_ZIP::ssf11.xml_;_
