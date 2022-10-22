import graphene

from ..models import Url
from .types import UrlType


class UrlQueries(graphene.ObjectType):
    urls = graphene.List(UrlType)

    def resolve_urls(root, info):
        return Url.objects.all()