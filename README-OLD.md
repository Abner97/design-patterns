# Curso de Patrones de Diseño en TypeScript (8 horas)

## 📋 Estructura del Curso

### Módulo 1: Patrones Creacionales (2.5 horas)
- **Singleton** (50 min)
- **Factory Method** (50 min)
- **Builder** (50 min)

### Módulo 2: Patrones Estructurales (2.5 horas)
- **Adapter** (50 min)
- **Decorator** (50 min)
- **Facade** (50 min)

### Módulo 3: Patrones de Comportamiento (3 horas)
- **Strategy** (60 min)
- **Observer** (60 min)
- **Command** (60 min)

---

## 🎯 Guía para el Instructor

### Módulo 1: Patrones Creacionales

#### 1.1 Singleton (50 minutos)
**Objetivo:** Garantizar que una clase tenga una única instancia y proporcionar un punto de acceso global.

**Tiempo sugerido:**
- Teoría y explicación: 15 min
- Demo del ejemplo: 10 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Cuándo usar Singleton (configuración, logging, conexiones DB)
- Problemas de testing y acoplamiento
- Implementación thread-safe en TypeScript

**Archivos:**
- `src/creational/singleton/example.ts` - Ejemplo de DatabaseConnection
- `src/creational/singleton/exercise.ts` - Ejercicio: Implementar ConfigManager

---

#### 1.2 Factory Method (50 minutos)
**Objetivo:** Definir una interfaz para crear objetos, permitiendo a las subclases decidir qué clase instanciar.

**Tiempo sugerido:**
- Teoría y explicación: 15 min
- Demo del ejemplo: 10 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Diferencia entre Factory Method y Abstract Factory
- Ventajas de desacoplar la creación de objetos
- Uso en frameworks modernos

**Archivos:**
- `src/creational/factory/example.ts` - Ejemplo de NotificationFactory
- `src/creational/factory/exercise.ts` - Ejercicio: Sistema de pagos

---

#### 1.3 Builder (50 minutos)
**Objetivo:** Separar la construcción de un objeto complejo de su representación.

**Tiempo sugerido:**
- Teoría y explicación: 15 min
- Demo del ejemplo: 10 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Cuándo usar Builder vs constructor
- Fluent interface pattern
- Inmutabilidad y validación

**Archivos:**
- `src/creational/builder/example.ts` - Ejemplo de QueryBuilder
- `src/creational/builder/exercise.ts` - Ejercicio: EmailBuilder

---

### Módulo 2: Patrones Estructurales

#### 2.1 Adapter (50 minutos)
**Objetivo:** Convertir la interfaz de una clase en otra interfaz que los clientes esperan.

**Tiempo sugerido:**
- Teoría y explicación: 15 min
- Demo del ejemplo: 10 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Integración con APIs de terceros
- Object Adapter vs Class Adapter
- Casos de uso reales

**Archivos:**
- `src/structural/adapter/example.ts` - Ejemplo de PaymentAdapter
- `src/structural/adapter/exercise.ts` - Ejercicio: LoggerAdapter

---

#### 2.2 Decorator (50 minutos)
**Objetivo:** Añadir responsabilidades adicionales a un objeto dinámicamente.

**Tiempo sugerido:**
- Teoría y explicación: 15 min
- Demo del ejemplo: 10 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Diferencia con herencia
- Composición sobre herencia
- Decoradores en TypeScript (experimental)

**Archivos:**
- `src/structural/decorator/example.ts` - Ejemplo de Coffee decorators
- `src/structural/decorator/exercise.ts` - Ejercicio: Text formatters

---

#### 2.3 Facade (50 minutos)
**Objetivo:** Proporcionar una interfaz unificada para un conjunto de interfaces en un subsistema.

**Tiempo sugerido:**
- Teoría y explicación: 15 min
- Demo del ejemplo: 10 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Simplificación de sistemas complejos
- Reducción de dependencias
- Uso en arquitecturas de microservicios

**Archivos:**
- `src/structural/facade/example.ts` - Ejemplo de OrderFacade
- `src/structural/facade/exercise.ts` - Ejercicio: HomeTheaterFacade

---

### Módulo 3: Patrones de Comportamiento

#### 3.1 Strategy (60 minutos)
**Objetivo:** Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables.

**Tiempo sugerido:**
- Teoría y explicación: 20 min
- Demo del ejemplo: 15 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Eliminación de condicionales complejos
- Open/Closed Principle
- Inyección de dependencias

**Archivos:**
- `src/behavioral/strategy/example.ts` - Ejemplo de SortingStrategy
- `src/behavioral/strategy/exercise.ts` - Ejercicio: CompressionStrategy

---

#### 3.2 Observer (60 minutos)
**Objetivo:** Definir una dependencia uno-a-muchos entre objetos.

**Tiempo sugerido:**
- Teoría y explicación: 20 min
- Demo del ejemplo: 15 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Event-driven architecture
- Pub/Sub pattern
- Memory leaks y unsubscribe

**Archivos:**
- `src/behavioral/observer/example.ts` - Ejemplo de StockMarket
- `src/behavioral/observer/exercise.ts` - Ejercicio: WeatherStation

---

#### 3.3 Command (60 minutos)
**Objetivo:** Encapsular una petición como un objeto.

**Tiempo sugerido:**
- Teoría y explicación: 20 min
- Demo del ejemplo: 15 min
- Ejercicio práctico: 20 min
- Revisión y preguntas: 5 min

**Puntos clave a explicar:**
- Undo/Redo functionality
- Queue de comandos
- Macro commands

**Archivos:**
- `src/behavioral/command/example.ts` - Ejemplo de TextEditor
- `src/behavioral/command/exercise.ts` - Ejercicio: RemoteControl

---

## 🚀 Instrucciones de Ejecución

### Configuración inicial
```bash
npm install
npm run build
```

### Ejecutar ejemplos
```bash
# Singleton
npm run example:singleton

# Factory Method
npm run example:factory

# Builder
npm run example:builder

# Adapter
npm run example:adapter

# Decorator
npm run example:decorator

# Facade
npm run example:facade

# Strategy
npm run example:strategy

# Observer
npm run example:observer

# Command
npm run example:command
```

### Ejecutar ejercicios (soluciones)
```bash
npm run exercise:singleton
npm run exercise:factory
# ... etc
```

---

## 💡 Consejos para el Instructor

1. **Inicio de cada patrón:** Presenta un problema real antes de mostrar la solución
2. **Ejemplos:** Usa casos del mundo real que los estudiantes puedan relacionar
3. **Ejercicios:** Deja que los estudiantes trabajen en parejas (pair programming)
4. **Preguntas frecuentes:** Prepárate para explicar cuándo NO usar cada patrón
5. **Breaks:** Toma un descanso de 10 minutos cada 90 minutos

## 📚 Recursos Adicionales

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

## ✅ Checklist del Instructor

Antes del curso:
- [ ] Verificar que todos los ejemplos compilan
- [ ] Preparar el entorno de desarrollo
- [ ] Revisar las soluciones de los ejercicios
- [ ] Preparar diagramas UML (opcional)

Durante el curso:
- [ ] Compartir el repositorio con los estudiantes
- [ ] Asegurar que todos pueden ejecutar los ejemplos
- [ ] Tomar notas de preguntas frecuentes
- [ ] Recoger feedback al final de cada módulo
