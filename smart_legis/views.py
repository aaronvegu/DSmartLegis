from django.shortcuts import render

def render_index(request):
    return render(request, 'smart_legis/index.html')

def contratos(request):
    return render(request, 'smart_legis/contratos.html')

def contrato_trabajo(request):
    return render(request, 'smart_legis/contrato-trabajo.html')