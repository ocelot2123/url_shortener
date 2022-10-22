# url_shortener

https://user-images.githubusercontent.com/15928184/197339571-709843a9-2d0b-48dc-a624-8112e71de493.mp4

## Built with
### Frontend
1. [React](https://reactjs.org/)
2. [Graphql](https://github.com/graphql/graphql-js)
3. [react-hook-form](https://react-hook-form.com/)
4. [react-router-dom](https://reactrouter.com/en/main)
5. [urql](https://formidable.com/open-source/urql/)
6. [tailwind](https://tailwindcss.com/)

### Backend
1. [Django](https://www.djangoproject.com/)
2. [graphene-django](https://docs.graphene-python.org/projects/django/en/latest/)
3. [django-cors-headers](https://pypi.org/project/django-cors-headers/)
4. [dj-database-url](https://pypi.org/project/dj-database-url/)
5. [django-graphql-playground](https://github.com/jaydenwindle/django-graphql-playground)
6. [graphene-federation](https://pypi.org/project/graphene-federation/)


## Requirements
1. [Docker](https://docs.docker.com/install/)

## How to run it?
1. Clone the repository:

```
git clone git@github.com:ocelot2123/url_shortener.git
```

2. Go to the cloned directory:
```
cd url_shortener
```

3. Update .env variables to run on your desired domain

4. Build the application:
```
docker compose build
```

5. Apply Django migrations:
```
docker compose run --rm url-shortener-backend python3 manage.py migrate
```

6. Run npm ci on frontend
```
docker compose run --rm url-shortener-frontend npm ci
```

7. Run the application:
```
docker compose up
```

## Where is the application running?
- Graphql - http://localhost:5000/graphql/
- Graphql Playground - http://localhost:5000/playground/
- Frontend App - http://localhost:5001/
