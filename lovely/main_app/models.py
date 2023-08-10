from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Feedback(models.Model):
    name = models.CharField(max_length=32)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    text = models.TextField()
    created_at = models.DateField(auto_now_add=True, null=True)

    def __str__(self):
        return "{name} - {rating} звёз.".format(name=self.name, rating=self.rating)