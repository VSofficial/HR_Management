from rest_framework import serializers
from django.db.models import F
from django.http import HttpResponse
from rest_framework.response import Response
from .models import Assignment, Question, Choice, GradedAssignment, User


class PersonalInfoSerializer(serializers.ModelSerializer):
    #questions = serializers.SerializerMethodField()
    #teacher = StringSerializer(many=False)

    class Meta:
        #model = PersonalInfo
        model = User
       # model = Assignment
        fields = ('__all__')

    def create(self, request):
        data = request.data

        #info = PersonalInfo()
        info = User()     
        info.first_name = data['first_name']
        #assignment.title = data['title']
        info.last_name = data['last_name']
        info.username = data['username']
        info.email = data['email']
        #info.date_joined = data['date_joined']
        info.phone = data['phone']
        info.role = data['role']
        info.gender = data['gender']
        info.dob = data['dob']
        info.salary = data['salary']
        info.team = data['team']
         
        info.save()
   
        return info
    
    

  
class CountSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('__all__')

# Seperation Line


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class LeaveSerializer(serializers.ModelSerializer):
    #username = StringSerializer(many=True)

    class Meta:
        model = User
        fields = ('date_from','date_to','email')
        #fields = ('__all__')


    def create(self, request):
        data = request.data

        leaveinfo = User()
        user = User.objects.get(email=data['email'])
        #datafile = request.data['email']
        #usernaAme = User.objects.filter(username=user).get()
        '''
        datefrom = User.objects.filter(username=user).get(date_from=data['date_from'])
        dateto = User.objects.filter(username=user).get(date_too=data['date_to'])
        '''
        
        task1 = User.objects.filter(email=user).update(date_from=F('date_from'))
        task2 = User.objects.filter(email=user).update(date_to=F('date_to'))

        #leaveinfo.username = user
       # assignment.title = data['title']
      #  leaveinfo.save()

        #return leaveinfo
        return Response({'email': user})

class AssignmentSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField()
    teacher = StringSerializer(many=False)

    class Meta:
        model = Assignment
        fields = ('__all__')

    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many=True).data
        return questions

    def create(self, request):
        data = request.data

        assignment = Assignment()
        teacher = User.objects.get(username=data['teacher'])
        assignment.teacher = teacher
        assignment.title = data['title']
        assignment.save()

        order = 1
        for q in data['questions']:
            newQ = Question()
            newQ.question = q['title']
            newQ.order = order
            newQ.save()

            for c in q['choices']:
                newC = Choice()
                newC.title = c
                newC.save()
                newQ.choices.add(newC)

            newQ.answer = Choice.objects.get(title=q['answer'])
            newQ.assignment = assignment
            newQ.save()
            order += 1
        return assignment


class GradedAssignmentSerializer(serializers.ModelSerializer):
    student = StringSerializer(many=False)

    class Meta:
        model = GradedAssignment
        fields = ('__all__')

    def create(self, request):
        data = request.data
        print(data)

        assignment = Assignment.objects.get(id=data['asntId'])
        student = User.objects.get(username=data['username'])

        graded_asnt = GradedAssignment()
        graded_asnt.assignment = assignment
        graded_asnt.student = student

        questions = [q for q in assignment.questions.all()]
        answers = [data['answers'][a] for a in data['answers']]

        answered_correct_count = 0
        for i in range(len(questions)):
            if questions[i].answer.title == answers[i]:
                answered_correct_count += 1
            i += 1

        grade = answered_correct_count / len(questions) * 100
        graded_asnt.grade = grade
        graded_asnt.save()
        return graded_asnt
