class Student():
    def __init__(self,name,age,course) -> None:
        self.name = name
        self.age = age
        self.course = course
    
    def age_from_tenth(self):
        return "age from mature : {} ".format(self.age - 15)




my_student = Student("Nithin", 19, "Msc")
print(my_student.age_from_tenth())
print("-------------------------------\n")
my_func = my_student.age_from_tenth
print("function is : {}".format(my_func))
print(my_func())


