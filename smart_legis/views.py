from django.shortcuts import render
from django.http import HttpResponse

def render_index(request):
    return render(request, 'smart_legis/index.html')

def contratos(request):
    return render(request, 'smart_legis/contratos.html')

# View: routes contrato-trabajo page to the url
def contrato_trabajo(request):
    return render(request, 'smart_legis/contrato-trabajo.html')

# View: process form data from contrato-trabajo.html
def handle_form_submission(request):
    if request.method == 'POST':
        contractDate = request.POST.get('contractDate')
        city = request.POST.get('city')
        state = request.POST.get('state')

        print(contractDate, city, state)
        
        # Do something with the form data, such as saving it to the database
        
        return HttpResponse('Form submitted successfully')
    else:
        return HttpResponse('Invalid request method')