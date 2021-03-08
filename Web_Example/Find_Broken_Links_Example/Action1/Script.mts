set IE= CreateObject("InternetExplorer.Application")
IE.Visible = True
IE.Navigate "http://newtours.demoaut.com/mercurywelcome.php"
'This is the main page
Browser("name:=Welcome: Mercury Tours").Page("title:=Welcome: Mercury Tours").link("name:=SIGN-ON").Click

''Find out all the links in the page using ChildObjects
'Set MyObjLink = Description.Create()
'MyObjLink("micclass").value = "Link"
'MyObjLink("html tag").value = "A"
'Set objLinks = Browser("name:=Welcome: Mercury Tours").page("title:=Welcome: Mercury Tours").ChildObjects(MyObjLink)
'
''Find out the count of links
'iTotalLinks = oAllLinks.Count
'
''Loop through all the links to find if the link is broken or not
'For i=0 to iTotalLinks - 1
'
'  'Find out the url for the link
'  sURL = oAllLinks(i).GetROProperty("url")
'
'  'Create a WinHTTP Request using the link's URL
'  Set objWinHTTP = CreateObject("WinHttp.WinHttpRequest.5.1")
'  objWinHTTP.Open "GET", sURL, False
'  objWinHTTP.SetRequestHeader "User-Agent", "Mozilla/4.0 (compatible; MyApp 1.0; Windows NT 5.1)"
'
'  'Send the Request to the Server and capture the response
'  objWinHTTP.Send
'  iReturnVal = objWinHTTP.Status
'
'  'Find out if the Link exists or is broken
'  If iReturnVal = 200 Then
'	msgbox "Link - " & sURL & " Exists"
'  ElseIf iReturnVal = 404 Then
'	msgbox "Link - " & sURL & " is Broken"
'  Else
'    msgbox "Code" - iReturnVal
'  End If
'
'  Set objWinHTTP = Nothing
'  Next
