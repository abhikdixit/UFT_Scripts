   Dim fso, MyFile
   Set fso = CreateObject("Scripting.FileSystemObject")
   Set MyFile = fso.CreateTextFile("D:\E drive\QTP_Training_Data\Capgemini Training\FileSystemObject\testfile.txt", True)
	Const ForReading = 1, ForWriting = 2, ForAppending = 8

Window("Flight Reservation").WinMenu("Menu").Select "File;New Order"
Window("Flight Reservation").WinObject("Date of Flight:").Type "111111" @@ hightlight id_;_590860_;_script infofile_;_ZIP::ssf16.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "London" @@ hightlight id_;_1704900_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Los Angeles" @@ hightlight id_;_1115132_;_script infofile_;_ZIP::ssf3.xml_;_
Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_1311728_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinButton("OK").Click @@ hightlight id_;_2163172_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").Activate @@ hightlight id_;_1573856_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "abhi" @@ hightlight id_;_1115110_;_script infofile_;_ZIP::ssf7.xml_;_
Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_1311622_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").WinButton("Update Order").WaitProperty "enabled", True, 10000 @@ hightlight id_;_590674_;_script infofile_;_ZIP::ssf18.xml_;_
a=Window("Flight Reservation").WinEdit("Order No:").GetROProperty("text")

   MyFile.WriteLine a
  Set MyFile = fso.OpenTextFile("c:\testfile.txt", ForReading, True)
   x=MyFile.ReadAll
   MyFile.Close
 @@ hightlight id_;_1573856_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinMenu("Menu").Select "File;Open Order..."
Window("Flight Reservation").Dialog("Open Order").WinCheckBox("Order No.").Set "ON" @@ hightlight id_;_590898_;_script infofile_;_ZIP::ssf10.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinEdit("Edit").Set x @@ hightlight id_;_590900_;_script infofile_;_ZIP::ssf11.xml_;_
Window("Flight Reservation").Dialog("Open Order").WinButton("OK").Click @@ hightlight id_;_1311744_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Flight Reservation").Activate @@ hightlight id_;_1573856_;_script infofile_;_ZIP::ssf13.xml_;_







