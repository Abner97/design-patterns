# Guía de Enseñanza — Pokédex Next.js

Orden recomendado para explicar la creación del proyecto a estudiantes. El principio es siempre el mismo: **de lo más abstracto y sin dependencias hacia lo más concreto y compuesto**.

---

## Diagrama de dependencias

```
types.ts
    └── PokeApiClient (Singleton)
            └── PokemonFacade (Facade)
                    ├── API Routes  →  pages (Client)
                    └── page detalle (SSR directo)

FavoritesStore (Observer)
    └── FavoritesContext (puente React)
            └── layout.tsx (Provider)
                    ├── Navbar
                    ├── PokemonCard
                    ├── FavoriteButton
                    └── favorites/page.tsx
```

---

## Paso 1 — Contexto y setup (5 min)

- Qué vamos a construir y por qué
- Qué tres patrones se van a aplicar y dónde vive cada uno
- Crear el proyecto:

```bash
npx create-next-app@latest pokedex-patterns \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --yes

cd pokedex-patterns
```

- Configurar `next.config.ts` para permitir imágenes de la PokéAPI:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "raw.githubusercontent.com",
      pathname: "/PokeAPI/**",
    }],
  },
};
```

---

## Paso 2 — Tipos compartidos (5 min)

**Archivo:** `lib/types.ts`

Empieza siempre por los tipos. Sin ellos no puedes explicar ninguna clase ni componente con sentido. Los estudiantes necesitan ver la forma del dato antes de ver cómo se fetcha o se renderiza.

Puntos a explicar:
- `PokemonDetail` — la forma completa de un Pokémon
- `PokemonListResponse` — la respuesta paginada de la API
- Por qué separar los tipos en su propio archivo (Single Responsibility)

---

## Paso 3 — Patrones de diseño (25 min)

El núcleo del proyecto. Explicar el patrón teóricamente **antes** de mostrar el código en cada caso.

### 3a. Singleton — `lib/patterns/PokeApiClient.ts`

Es independiente, no importa nada del proyecto. El punto de partida natural.

Puntos a explicar:
- Constructor privado — nadie puede hacer `new PokeApiClient()`
- Campo estático `instance` — dónde vive la única instancia
- `getInstance()` — el único punto de acceso
- Por qué centralizar el `baseUrl` y el `revalidate: 3600` aquí

```
Primera llamada  →  crea la instancia  →  la guarda en el campo estático
Todas las siguientes  →  devuelven la misma instancia
```

### 3b. Facade — `lib/patterns/PokemonFacade.ts`

Depende del Singleton. Mostrar cómo lo consume sin instanciarlo directamente.

Puntos a explicar:
- Qué endpoints de la PokéAPI oculta
- Por qué los consumidores no deben conocer las URLs directamente
```
PokemonFacade
  ├── getList(limit, offset)   →  GET /pokemon?limit=&offset=
  └── getDetail(nameOrId)      →  GET /pokemon/:name
```

### 3c. Observer — `lib/patterns/FavoritesStore.ts`

Independiente de los dos anteriores. Explicar el ciclo completo antes del código.

Puntos a explicar:
- La interfaz `FavoritesObserver` — el contrato que deben cumplir los suscriptores
- `subscribe` / `unsubscribe` — gestión del array de observadores
- `notify` privado — se llama solo desde `toggle`, nunca desde afuera
- Por qué también es Singleton — una sola fuente de verdad para los favoritos
- Persistencia en `localStorage` dentro del mismo `notify`

```
toggle(name)
  → modifica el Set interno
  → llama notify()
    → recorre observers[]
      → llama onFavoritesChange(lista) en cada uno
```

---

## Paso 4 — Puente React ↔ Observer (10 min)

**Archivo:** `lib/FavoritesContext.tsx`

Este es el momento de explicar por qué los patrones de diseño clásicos necesitan un adaptador para funcionar con el sistema de estado de React.

Puntos a explicar:
- `FavoritesProvider` se suscribe al store en `useEffect` y se desuscribe al desmontar — ciclo de vida correcto
- `useState` recibe las notificaciones del Observer y dispara el re-render
- `useFavorites` — hook personalizado que encapsula el acceso al contexto
- Por qué el contexto no reemplaza al Observer sino que lo envuelve

```
FavoritesStore.notify()
  → onFavoritesChange(lista)
    → setFavorites(lista)       ← useState de React
      → re-render de todos los consumidores del contexto
```

---

## Paso 5 — Utilidades de UI (5 min)

**Archivo:** `lib/typeColors.ts`

Sin dependencias. Buen momento para un respiro antes de entrar a componentes.

Puntos a explicar:
- Mapeo de tipo de Pokémon a clase de Tailwind
- Por qué extraerlo en lugar de repetirlo en cada componente

---

## Paso 6 — Layout raíz (5 min)

**Archivo:** `app/layout.tsx`

Antes de cualquier página o componente. Sin el `FavoritesProvider` montado aquí, cualquier componente que llame `useFavorites` lanzaría un error.

Puntos a explicar:
- El `FavoritesProvider` envuelve toda la app — un solo lugar para montar el Observer
- El `Navbar` vive aquí porque es global
- `metadata` estático del proyecto

---

## Paso 7 — Componentes UI (20 min)

De menor a mayor complejidad. Cada componente introduce exactamente una cosa nueva.

### 7a. `components/StatBar.tsx`
- Sin dependencias externas, solo props
- Introduce el cálculo del porcentaje para la barra visual
- Buen ejemplo de componente puramente presentacional

### 7b. `components/FavoriteButton.tsx`
- Introduce `useFavorites` por primera vez
- Componente mínimo — ideal para mostrar el hook aislado

### 7c. `components/Navbar.tsx`
- Usa `useFavorites` para mostrar el badge con el conteo
- Demuestra en vivo que el Observer actualiza la UI: agregar un favorito en otra página actualiza el badge sin recargar

### 7d. `components/PokemonCard.tsx`
- El componente más completo: imagen, tipos, toggle de favorito, navegación
- Combina `useFavorites`, `typeColor`, `next/image` y `next/link`
- Buen momento para hablar de `"use client"` y por qué es necesario aquí

---

## Paso 8 — API Routes (10 min)

**Archivos:** `app/api/pokemon/route.ts` y `app/api/pokemon/[name]/route.ts`

Explicar que son el proxy entre el cliente y la PokéAPI.

Puntos a explicar:
- Usan la Facade directamente, no el Singleton
- Por qué pasar por una API Route en lugar de llamar la PokéAPI desde el cliente (CORS, caché centralizada, ocultar la URL externa)
- `NextRequest` / `NextResponse` — las primitivas de Next.js para API Routes
- Cómo leer query params con `req.nextUrl.searchParams`
- El parámetro dinámico `[name]` llega como `Promise<{ name: string }>` en Next.js 16

---

## Paso 9 — Páginas (20 min)

### 9a. `app/pokemon/[name]/page.tsx` — empieza por esta

Es un Server Component puro, más fácil de entender que la home.

Puntos a explicar:
- `async` Server Component — `await` directo en el cuerpo de la función
- Llama la Facade **directamente**, sin pasar por la API Route — este es el SSR real
- `generateMetadata` — metadata dinámica por Pokémon
- `notFound()` — manejo de errores en SSR
- `FavoriteButton` es Client Component dentro de un Server Component — composición de ambos mundos

```
Request a /pokemon/pikachu
  → Next.js ejecuta el Server Component en el servidor
  → PokemonFacade.getDetail("pikachu")  ← sin salto HTTP extra
  → HTML completo enviado al cliente
```

### 9b. `app/page.tsx` — página principal

Contrastar con la página de detalle para que quede clara la diferencia.

Puntos a explicar:
- `"use client"` — necesario porque tiene estado de paginación
- Llama las API Routes (no la Facade directamente) — el cliente no puede llamar la Facade en el servidor
- `useCallback` para estabilizar `fetchPage` y evitar loops en `useEffect`
- Skeleton de carga con `animate-pulse` mientras llegan los datos
- Paginación con `offset` y `limit`

```
Cliente carga /
  → fetch /api/pokemon?limit=20&offset=0   ← API Route
    → PokemonFacade.getList()              ← en el servidor
  → fetch /api/pokemon/:name  ×20          ← en paralelo
  → setPokemon(details)  →  re-render
```

### 9c. `app/favorites/page.tsx` — cierre del ciclo Observer

El estudiante ya entiende todo el flujo en este punto. Esta página lo demuestra completo.

Puntos a explicar:
- `useFavorites` trae la lista reactiva del Observer
- `useEffect` con `[favorites]` como dependencia — se re-ejecuta cada vez que el Observer notifica un cambio
- Estado vacío con call-to-action — buena práctica de UX
- El grid se actualiza en tiempo real si el usuario agrega o quita favoritos desde otra pestaña

---

## Resumen de tiempos

| Paso | Tema | Tiempo |
|---|---|---|
| 1 | Setup y contexto | 5 min |
| 2 | Tipos compartidos | 5 min |
| 3 | Patrones (Singleton, Facade, Observer) | 25 min |
| 4 | FavoritesContext — puente React | 10 min |
| 5 | typeColors | 5 min |
| 6 | Layout raíz | 5 min |
| 7 | Componentes UI (×4) | 20 min |
| 8 | API Routes | 10 min |
| 9 | Páginas (×3) | 20 min |
| **Total** | | **~105 min** |
