import graphene
from ..models import Url
from .types import UrlType
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError


class GenerateUrl(graphene.Mutation):
    url = graphene.Field(UrlType)
    class Arguments:
        url = graphene.String()

    class Meta:
        description = (
            "Generates a Url model based on input link")
    
    def mutate(self, info, url):
        validate = URLValidator()
        if not url.startswith("http"):
            url = "http://" + url
        validate(url)
        url = Url(original_link=url)
        url.save()

        return GenerateUrl(url=url)

class UrlMutations(graphene.ObjectType):
    generate_url = GenerateUrl.Field()
