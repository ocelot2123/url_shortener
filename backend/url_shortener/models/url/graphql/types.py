from graphene_django import DjangoObjectType
from ..models import Url


class UrlType(DjangoObjectType):
    class Meta:
        model = Url