from .views import bookAPIView, bookRUDView
from django.urls import path

app_name = 'api-books'

urlpatterns = [
    path('', bookAPIView.as_view(), name='book-create'),
    path('<int:id>', bookRUDView.as_view(), name='book-rud')
]
