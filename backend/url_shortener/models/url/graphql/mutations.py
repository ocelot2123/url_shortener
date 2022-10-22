import graphene
from ..models import Url
from .types import UrlType


class GenerateUrl(graphene.Mutation):
    url = graphene.Field(UrlType)
    class Arguments:
        url = graphene.String()

    class Meta:
        description = (
            "Generates a Url model based on input link")
    
    def mutate(self, info, url):
        url = Url(original_link=url)
        url.save()

        return GenerateUrl(url=url)

class UrlMutations(graphene.ObjectType):
    generate_url = GenerateUrl.Field()
