from django.shortcuts import render,render_to_response
from django.shortcuts import HttpResponse
import numpy as np
import re,math
import json,random
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail, mail_admins
from calculator import settings

# Create your views here.

def index(request):
    return render(request,'index.html')

def basic_cal(request):
    # print(request.POST.get('result'))
    return render(request,'basiccalculator.html', context = {'status':1})

def draw_graph(request):
    N=200
    x=[]
    y=[]
    graph_type=''
    r = random.randrange(0,256)
    g = random.randrange(0,256)
    b = random.randrange(0,256)
    color = f"rgba({r},{g},{b})"
    if request.is_ajax():
        param = request.GET.get('param', None)
        try:
            degree = eval(re.findall(r'(\d+(?:\.\d+)?)', param)[0])
        except:
            degree = 0
        try:
            if re.search(r'sin',param,re.I):
                for i in range(math.ceil(degree)):
                    x.append(i)
                    y.append(np.sin(i * np.pi/180))
                    graph_type = "Sin Graph"
                return HttpResponse(json.dumps({'xaxis':x,'yaxis':y,'graph':graph_type,'color':color}), content_type="application/json")
            elif re.search(r'cosec',param,re.I):
                for i in range(math.ceil(degree)):
                    if i == 0 or not (i%180):
                        continue
                    x.append(i)
                    cosec_val = 1/np.sin(i * np.pi/180)
                    y.append(cosec_val)
                    graph_type = "Cosec Graph"
                return HttpResponse(json.dumps({'xaxis':x,'yaxis':y,'graph':graph_type,'color':color}), content_type="application/json")
            elif re.search(r'cos',param,re.I):
                for i in range(math.ceil(degree)):
                    x.append(i)
                    y.append(np.cos(i * np.pi/180))
                    graph_type = "Cos Graph"
                return HttpResponse(json.dumps({'xaxis':x,'yaxis':y,'graph':graph_type,'color':color}), content_type="application/json")
            elif re.search(r'sec',param,re.I):
                for i in range(math.ceil(degree)):
                    if i == 90 or not (i%90):
                        continue
                    x.append(i)
                    sec_val = 1/np.cos(i * np.pi/180)
                    y.append(sec_val)
                    graph_type = "Sec Graph"
                return HttpResponse(json.dumps({'xaxis':x,'yaxis':y,'graph':graph_type,'color':color}), content_type="application/json")
            elif re.search(r'tan',param,re.I):
                for i in range(math.ceil(degree)):
                    if i == 90 or not (i%90):
                        continue
                    x.append(i)
                    y.append(np.tan(i * np.pi/180))
                    graph_type = "Tan Graph"
                return HttpResponse(json.dumps({'xaxis':x,'yaxis':y,'graph':graph_type,'color':color}), content_type="application/json")
            elif re.search(r'cot',param,re.I):
                for i in range(math.ceil(degree)):
                    if i == 0 or not (i%180):
                        continue
                    x.append(i)
                    cot_val = 1/np.tan(i * np.pi/180)
                    y.append(cot_val)
                    graph_type = "Cot Graph"
                return HttpResponse(json.dumps({'xaxis':x,'yaxis':y,'graph':graph_type,'color':color}), content_type="application/json")
            elif degree == 0:
                return HttpResponse(json.dumps({}), content_type="application/json")
        except Exception as e:
            pass

    return render(request,'graph.html')

def area(request):
    print("*"*50)
    if request.is_ajax():
        print("@@@@@@@hey in this part@@@@@@@@@@@@@")
        param = request.GET.get('param', None)
        print(param)
    return render(request,'area.html', context = {'status':1})

def kids_section(request):
    return render(request,'kids.html', context = {'status':1})
def body_part(request):
    return render(request,'body.html', context = {'status':1})
def fruits(request):
    return render(request,'fruits.html', context = {'status':1})
def vehicle(request):
    return render(request,'vehicle.html', context = {'status':1})
def animal(request):
    return render(request,'animal.html', context = {'status':1})

def convert(request):
    return render(request,'convert.html', context = {'status':1})

@csrf_exempt
def email(request):
    sent = False
    if request.method=='POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        name_error,email_error = (None,)*2
        #validation on forms

        if not re.findall(r'[A-z]+', name) and not re.findall(r'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$', email):
            name_error = "Please Provive Valid Name."
            email_error = "Please Provive Valid Email Address."
            return render(request,'email.html', context = {'name':name_error,'email':email_error})
        elif not re.findall(r'[A-z]+', name):
            name_error = "Please Provive Valid Name."
            return render(request,'email.html', context = {'name':name_error})
        elif not re.findall(r'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$', email):
            email_error = "Please Provive Valid Email Address."
            return render(request,'email.html', context = {'email':email_error})
        else:
            # res = mail_admins(subject, message, fail_silently=False)
            # print(mail_admins(subject, message, fail_silently=False))
            msg = f'''Dear Admin,\n{message}.\n\nThanks & Regards,\n{name}\n{email}'''
            res = send_mail(subject, msg, email, ['vim.python.dj@gmail.com'])
            # res=0
            if res:
                msg = f'''Dear {name},\nThank you for your valuable time and giving feedback, we will get back to you soon.\n\nThanks & Regards,\nVimit\n {settings.ADMIN[0][1]}'''
                send_mail(subject, msg, settings.ADMIN[0][1], [email])
                print("#"*50)
                return render(request,'success.html', context = {'sent':True})
            else:
                return render(request,'success.html', context = {'sent':False})

        return render(request,'email.html', context = {'name':name_error,'email':email_error})
    return render(request,'email.html', context = {'sent':sent})

# @csrf_exempt
# def success(request):
#     return render(request,'success.html', context = {})
