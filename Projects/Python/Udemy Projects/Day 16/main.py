# import another_module
#
# # import  turtle
# # tim = turtle.Turtle()
#
# from turtle import Turtle, Screen
#
# timmy = Turtle()
# my_screen = Screen()
#
# print(another_module.another_variable)
# timmy.color("DarkRed")
# print(timmy.shape("turtle"))
# print(my_screen.canvheight)
#
# timmy.forward(100)
#
# my_screen.exitonclick()
#

from prettytable import PrettyTable

table = PrettyTable()

table.add_column("Pokemon Name", ["a", "b", "c"])
table.add_column("Type", ["d", "e", "f"])
table.align = "l"
print(table)