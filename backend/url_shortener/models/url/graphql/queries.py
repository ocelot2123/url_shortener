import graphene

from ..models import Url
from .types import UrlType


class UrlQueries(graphene.ObjectType):
    urls = graphene.List(UrlType)
    url = graphene.Field(UrlType, id=graphene.ID(description="Id of the URL", required=True))

    def resolve_urls(root, info):
        return Url.objects.all()

    def resolve_url(root, info, id):
        return Url.objects.get(id=id)