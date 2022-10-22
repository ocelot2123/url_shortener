from graphene_federation import build_schema
from url_shortener.models.url.graphql.queries import UrlQueries


class Query(UrlQueries):
    pass


schema = build_schema(Query)