''--------------Find the length of a given string--------------
'Dim str,lengthString
'str=inputbox("Please enter the string")
'lengthString = len(str)
'print("Length of string "& str & " is " & Cstr(lengthString))

'----------Find occurrences of a specific character in a string---------------
'
'Dim str, noOfOccurrences,LengthString,ch,inch
'str=inputbox("Please enter the string")
'inch=inputbox("Please enter the character")
'lengthString = len(str)
'noOfOccurrences=0
'for i=1 to lengthString
'ch = mid(str,i,1)
'if ch =inch Then
'noOfOccurrences=  noOfOccurrences+1
'End If
'Next
'Print("Number of Occurrences of characters in " & str & " is " & noOfOccurrences)


'-------------Find how many alpha characters are present in a string----------
Dim str, noOfAlphaChars,LengthString,ch
str=inputbox("Please enter the string")
lengthString = len(str)
noOfAlphaChars =0
for i=1 to lengthString

if not isnumeric (mid(str,i,1)) Then

noOfAlphaChars =  noOfAlphaChars+1
End If
Next
Print("Number of Alpha characters in " & str &  " is " & noOfAlphaChars )
