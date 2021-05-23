from django.urls import path
from .views import CardAPIView, HistoryAPIView, CardDetailsAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("api/card/", CardAPIView.as_view(), name="card_view"),
    path("api/history/", HistoryAPIView.as_view(), name="history_view"),
    path("api/card/<int:pk>/", CardDetailsAPIView.as_view(), name="card_details_view"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)