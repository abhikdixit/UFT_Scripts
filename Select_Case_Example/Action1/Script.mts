Dim CardType

CardType="Visa"

Select Case CardType
	Case "MasterCard"
		Msgbox "Processing Your Payment using Master Card"
	Case "Visa"
		Msgbox "Processing Your Payment using Visa"
	Case "American Express"
		Msgbox "Processing Your Payment using American Express"
	Case "Discover"
		Msgbox "Processing Your Payment using Discover"
	Case else
		Msgbox "Unknown Card"			
End Select
