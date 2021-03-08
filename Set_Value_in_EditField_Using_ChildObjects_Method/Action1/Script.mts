   Dim obj,n,i
  Set obj = Wpfwindow("devname:=HPE MyFlight Sample Application").ChildObjects
    n = obj.Count
    ReDim ObjArr(n)
    MsgBox "Total Object=" & n
' Below Scripts will display how many Edit Box in the page
	
	Set EditDesc = Description.Create()
	EditDesc("wpftypename").value = "edit"
	Set Eobj = Wpfwindow("devname:=HPE MyFlight Sample Application").ChildObjects(EditDesc)
	en=Eobj.count
	MsgBox "Total Object=" & en
    For i = 0 to en-1
	  Eobj(i).set "john"
	Next
Set obj = Nothing
