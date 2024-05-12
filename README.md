<p align="center">
  <img src="./apps/frontend/public/assets/icon/logo192.svg" width="150">
</p>

<h1 align="center">Akial Chain</h1>

## Getting Started

1. Clone this repository :

```bash
git clone https://github.com/saeidpy/akila-chain-main
```

2. Change directory

```bash
cd Akilawebsite
```

3. Install dependences

```bash
yarn install
```

4. Add .env file

```
NEXT_PUBLIC_API_URL_CLIENT=http://<your client server ip>:1337 //it can change
NEXT_PUBLIC_API_URL_SERVER=http://<your server ip>:1337 //it can change

```

5. Run in develop mode

```bash
yarn dev
```

## Build

To build all apps, run the following command after install dependences (in the project root):

```bash
yarn build
```

## Develop with docker

To develop all apps and packages, run the following command (in the project root):

```bash
docker-compose up -d
```

## Credits

- [strapi-dockerize](https://github.com/kevinadhiguna/strapi-dockerize)
- [nextjs-strapi-boilerplate](https://github.com/kevinadhiguna/strapi-dockerize)
