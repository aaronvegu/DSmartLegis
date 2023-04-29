from django.shortcuts import render
from django.http import HttpResponse

def render_index(request):
    return render(request, 'contracts/index.html')

# View: routes contrato-trabajo page to the url
def contrato_trabajo(request):
    return render(request, 'contracts/contrato-trabajo.html')

# View: process form data from contrato-trabajo.html
def handle_form_submission(request):
    try:
        if request.method == 'POST':
            contractDate = request.POST.get('contractDate')
            city = request.POST.get('city')
            state = request.POST.get('state')

            return render(request, 'contracts/contrato-trabajo.html', {
                "success_message": "Todo bien"
            })
    except(KeyError):
        return render(request, 'contracts/contrato-trabajo.html', {
            "error_message": "La informacion no pudo ser enviada"
        })