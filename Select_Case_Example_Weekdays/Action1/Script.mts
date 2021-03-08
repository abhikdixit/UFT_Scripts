Dim X

x=weekday(date)

Select Case x
	Case 1
		x=Msgbox("Sunday")
	Case 2
		x=Msgbox("Monday")
	Case 3
		x=Msgbox("Tuesday")
	Case 4
		x=Msgbox("Wednesday")
	Case 5
		x=Msgbox("Thursday")
	Case 6
		x=Msgbox("Friday")
	Case else
		x=Msgbox("Saturday")		
End Select
