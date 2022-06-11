# i=1
# sum=0
# while i<=10:
#     num=int(input("Enter the number"))
#     sum=sum+num
#     print(sum)



# n = int(input("Enter the value of n: "))
# sum = 0

# for i in range(n + 1) :
#     fact = 1
#     for j in range(1, i) :
#         fact *= j
#     term = 1 / fact
#     sum += term

# print("Sum =", sum)


# sum=0
# i=0
# while i<n+1:
#     fact=1
#     j=0
#     while j<1:
#         fact=fact*j
#         term=j/fact
#         sum=sum+term
#         j=j+1
#     i=i+1
# print(sum)



# i=1
# while i<=10:
#     if i==7:
#         continue
#     print(i)
#     i=i+1

# n = int(input("Enter value of n : "))
# x = int(input("Enter value of x : "))
# f = 1
# for i in range(1,n+1):
#     f = f * i
#     print(f)
# sum = 1
# i = 1
# while(i < n):
#     sum = sum + x**i/(i)
#     i = i + 1
# print(sum)

# i=0
# a=1
# while i<=10:
#     num=int(input("enter the number"))
#     if num>a:
#         print(a)
#     i=i+1

# // concatenation operator
# console.log('hello' + 'world');

# let a = 'JavaScript';

# a += ' tutorial';  // a = a + ' tutorial';
# console.log(a)


# name=input('enter the name')
# name=['gayatri kajal neha']
# string=''
# i=1
# d=[]
# while i<=len(name):
#     if name[i]!=''
    

#     # d.append(name[-i])
#     i=i+1
# print(name)



# name = ['Snowball', 'Chewy', 'Bubbles', 'Gruff']
# animal = ['Cat', 'Dog', 'Fish', 'Goat']
# age = [1, 2, 2, 6]
# z = zip(name, animal, age)
# z #=> <zip at 0x111081e48>
# for name,animal,age in z:
#     print("%s the %s is %s" % (name, animal, age))
    
#=> Snowball the Cat is 1
#=> Chewy the Dog is 2
#=> Bubbles the Fish is 2
#=> Gruff the Goat is 6

# for i in range(len(name)):
#     print(name[i])

# x = lambda a : a + 10
# print(x(5))



# a=[2,9,3,10,0]
# i=0
# num=int(input('enter the number'));
# if num in  a:
#     print('ok')
# else:
#     print('no')




# dict1={
#     'name':'gayatri',
#     'age':19

# }
# key=input('enter the text')
# if key in dict1 :
#     del dict1[key]
# else:
#     dict1["name"]=key
# print(dict1)


# list1=[[1,2,3,4],[2,3,4],[1,2,3,4,4,5],[1,2]]
# i=0
# temp=0
# while i<len(list1):
#     j=0
#     while j<len(list1):
#         if list1[i]<list1[j]:
#             temp=list1[i]
#             list1[i]=list1[i]
#             list1[j]=temp
#         j=j+1
#     i=i+1
#     print(list1)



# list1=[[1,2,3,4],[2,3,4],[1,2,3,4,4,5],[1,2]]
# i=0
# l=len(list1)
# while i<l:
#     j=0
#     while j<l-1:
#         if a[j]>a[j+1]:
#             a[j],a[j+1]=a[j+1],a[j]
    
# i=0
# k=[]
# while i<len(list1):
#     j=0
#     s=0
#     while j<len(list1):
#         if list1[i]>list1[j]:
#             s=s+list1[i][j]
#             k.append(s)
#             j+=1
#     i+=1

# print(k)

# n1=[1,2,3,4,2,3]
# s1=set(n1)
# print (s1)
#Output:{1, 2, 3, 4}



# dict1={'C1': [10, 20, 30], 'C2': [20, 30, 40], 'C3': [12, 34]}

# for i in dict1:
#     dict1[i].clear()
# print(dict1)



# Q41.Write a Python program to filter the height and width of students, which are stored in a dictionary. 
# Original Dictionary:
# dict1={'Cierra Vega': (6.2, 70), 'Alden Cantrell': (5.9, 65), 'Kierra Gentry': (6.0, 68), 'Pierre Cox': (5.8, 66)}
# if dict1 Height > 6ft and Weight> 70kg:
# {'Cierra Vega': (6.2, 70)}





# def test(dictionary):
#     for key in dictionary:
#         dictionary[key].clear()
#     return dictionary

# dictionary = { 
#                'C1' : [10,20,30], 
#                'C2' : [20,30,40],
#                'C3' : [12,34]
#              }
# print(test(dictionary)) 



# import json

# # some JSON:
# x =  '{ "name":"John", "age":30, "city":"New York"}'

# # parse x:
# y = json.loads(x)

# # the result is a Python dictionary:
# print(y)





i=0
while i<10:
  j=0
  while j<100:
    print(j,end='')
    j=j+10
  # print('')
i=i+1