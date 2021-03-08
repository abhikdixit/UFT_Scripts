Dim obj,n,i
  Set obj = WpfWindow("HPE MyFlight Sample Applicatio").ChildObjects
    n = obj.Count
    ReDim ObjArr(n)
    MsgBox "Total Object=" & n
    
    '--------------------This the Method to assign decscription(Properties) to object
	Set EditDesc = Description.Create()
	EditDesc("micclass").value = "WpfEdit"
	'EditDesc("devname").value = "agentName"
	'------------------------------------------------------------------------
	Set Eobj=WpfWindow("HPE MyFlight Sample Applicatio").ChildObjects(EditDesc)
	en=Eobj.Count
	MsgBox "Total Object=" & en
    For i = 0 to en-1
	  Eobj(i).set "abhi"
	Next
Set obj = Nothing







