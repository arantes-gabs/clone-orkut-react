## Como utilizar o boilerplate

Você pode clonar esse repo e só dar yarn, ou se preferir pode partir de qualquer boilerplate de [gatsby](https://www.gatsbyjs.org/docs/quick-start/) e usar esses plugins e arquiteturas a seguir:

- Style: [sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/)
- Meta tags, scripts: [helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet)
- Prevent React imports: [provide-react](https://www.gatsbyjs.org/packages/gatsby-plugin-provide-react/?=gatsby-plugin-provide-react)
- [Alias imports](https://www.gatsbyjs.org/packages/gatsby-alias-imports/?=gatsby-alias-imports)
- [env-variables](https://www.gatsbyjs.org/packages/gatsby-env-variables/?=gatsby-env-variables)
- Safe access object properties: [optional-chaining](https://www.gatsbyjs.org/packages/gatsby-optional-chaining/?=gatsby-optional-chaining)
- Dynamic routing based on environment: [dynamic routes](https://www.gatsbyjs.org/packages/gatsby-plugin-dynamic-routes/?=gatsby-plugin-dynamic-routes)

## Evolução gradual do código

A essência dessa filosofia é não criarmos rotinas burocráticas em lógicas simples, mas continuar tendo soluções robustas para lógicas mais elaboradas. Faremos isso tendo uma abordagem diferente para cada caso, a hora de virar essa chave ou não fica a cargo do nosso bom-senso em cada caso particular, levando sempre em consideração a componentização no geral.

## Organização de components

Components locais deverão permanecer dentro da própria `page/`, deixando a pasta `components/` para apenas os que forem utilizados em mais de um local.

```
pages/
  └── About/
    ├── components/
      └── Modal/
        └── hooks/
    ├── hooks/
    └── index.js
components/
  └── Header
    ├── hooks/
    └── index.js
services/
  ├── index.js
  └── auth.js
hooks/
  └── cards.js
styles
  └── mixins.scss
```

## Services

Requests que necessitarem de mapeamento de dados ou forem reutilizáveis deverão ser colocadas dentro de `services/`. Requests simples poderão ser realizados dentro da própria lógica dos components.
