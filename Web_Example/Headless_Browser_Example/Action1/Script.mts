    Dim oIE
    Set oIE = CreateObject("InternetExplorer.Application")
    oIE.Visible = False
    oIE.Navigate2 "http://newtours.demoaut.com/"
    Wait 4
    Set oIEDocument = oIE.Document
    Set oLinkCollection = oIEDocument.getElementsByTagName("A")
    iLinkCount = oLinkCollection.Length
    If iLinkCount > 0 Then
        For iCount = 0 To iLinkCount - 1
            Print oLinkCollection(iCount).Text
        Next
    End If  
    Set oIE = Nothing

