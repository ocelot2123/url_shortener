from graphene_federation import build_schema
from url_shortener.models.url.graphql.queries import UrlQueries
from url_shortener.models.url.graphql.mutations import UrlMutations


class Query(UrlQueries):
    pass

class Mutation(UrlMutations):
    pass


schema = build_schema(Query, mutation=Mutation)