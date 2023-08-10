from django import forms
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.safestring import mark_safe


class FeedbackForm(forms.Form):
    name = forms.CharField(label='Имя')
    # rating = forms.IntegerField(label='Рейтинг', validators=[
    #         MinValueValidator(0, message='Рейтинг не может быть меньше 0.'),
    #         MaxValueValidator(5, message='Рейтинг не может быть больше 5.'),
    #     ])

    # rating = forms.IntegerField(
    #     label='Выберите значение:',
    #     widget=forms.NumberInput(attrs={'type': 'range', 'min': 0, 'max': 5, 'step': 1})
    # )
    #
    # star1 = forms.BooleanField(label=mark_safe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'), required=False, widget=forms.CheckboxInput(attrs={'class': 'your-class','id': 'your-id',}))
    # star2 = forms.BooleanField(label='Чекбокс 2', required=False)
    # star3 = forms.BooleanField(label='Чекбокс 3', required=False)
    # star4 = forms.BooleanField(label='Чекбокс 4', required=False)
    # star5 = forms.BooleanField(label='Чекбокс 5', required=False)
    text = forms.CharField(label='Сообщение', widget=forms.Textarea)