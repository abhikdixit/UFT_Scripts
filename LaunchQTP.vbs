Set obj = CreateObject("QuickTest.Application") 'Creates an instance of the QTP
obj.Launch
obj.Visible = True
obj.WindowState = "Maximized" 'Maximizes the application window of the QTP
obj.ActivateView "ExpertView" 'Displays the Expert View of the QTP
obj.open "D:\E drive\QTP_Training_Data\Capgemini Training\Improt_Data_From_Excel_OrderNumber_Example", False 'Opens the script from C:\ ExpertQTP in an editable mode
obj.Test.Run 'Runs the script
obj.Quit 'Quits the QTP application
