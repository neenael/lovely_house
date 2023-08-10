from django.shortcuts import render
from .forms import FeedbackForm
from .models import Feedback

def main_page_view(request):
    if request.method == 'POST':
        print(request.POST)
        name = request.POST.get('name')
        if request.POST.get('fst'):
            rating = request.POST.get('fst')
        else:
            rating = 5
        text = request.POST.get('text')
        new_feedback = Feedback.objects.create(name=name, rating=rating, text=text)
        new_feedback.save()
    feedbacks = Feedback.objects.all().order_by('-rating', '-created_at')
    return render(request, "main_app/index.html", {"feedbacks": feedbacks})
