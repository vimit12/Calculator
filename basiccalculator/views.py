from django.shortcuts import render,render_to_response
from django.shortcuts import HttpResponse
from bokeh.plotting import figure,output_file,show
from bokeh.embed import components
import numpy as np
from bokeh.layouts import gridplot
import re,math
import json,random
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
