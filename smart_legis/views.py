from django.shortcuts import render

def render_index(request):
    return render(request, 'smart_legis/index.html')

def contratos(request):
    return render(request, 'smart_legis/contratos.html')