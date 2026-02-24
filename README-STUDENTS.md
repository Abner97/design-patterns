# 🎓 Rama para Estudiantes - Patrones de Diseño

## 📚 Bienvenido

Esta es la **rama students** del curso de Patrones de Diseño. Aquí encontrarás todos los ejemplos funcionando, pero los ejercicios **NO tienen las soluciones**.

---

## 🚀 Configuración Inicial

```bash
# Asegúrate de estar en la rama students
git branch

# Instalar dependencias
npm install
```

---

## 📖 Cómo Usar Este Repositorio

### 1. Ejecuta los Ejemplos

Cada patrón tiene un ejemplo completo que puedes ejecutar:

```bash
# Patrones Creacionales
npm run example:singleton
npm run example:factory
npm run example:builder

# Patrones Estructurales
npm run example:adapter
npm run example:decorator
npm run example:facade

# Patrones de Comportamiento
npm run example:strategy
npm run example:observer
npm run example:command
```

### 2. Lee el Código de los Ejemplos

Navega por los archivos en `src/` para entender cómo funciona cada patrón:

```
src/
├── creational/
│   ├── singleton/
│   │   ├── classes/DatabaseConnection.ts    ← Lee esto
│   │   └── demo/example.ts                  ← Y esto
│   ├── factory/
│   └── builder/
├── structural/
│   ├── adapter/
│   ├── decorator/
│   └── facade/
└── behavioral/
    ├── strategy/
    ├── observer/
    └── command/
```

### 3. Resuelve los Ejercicios

Cada patrón tiene un archivo `exercise.ts` con instrucciones:

```
src/creational/singleton/exercise.ts
src/creational/factory/exercise.ts
src/creational/builder/exercise.ts
src/structural/adapter/exercise.ts
src/structural/decorator/exercise.ts
src/structural/facade/exercise.ts
src/behavioral/strategy/exercise.ts
src/behavioral/observer/exercise.ts
src/behavioral/command/exercise.ts
```

**Pasos para resolver un ejercicio:**

1. Abre el archivo `exercise.ts` del patrón
2. Lee las instrucciones en los comentarios
3. Implementa tu solución en la sección `// TODO`
4. Descomenta el código de prueba al final
5. Ejecuta tu solución:
   ```bash
   npm run exercise:singleton
   ```

---

## 🎯 Ejercicios Disponibles

### 🏗️ Patrones Creacionales

1. **Singleton** - Implementa un `ConfigManager`
   - Archivo: `src/creational/singleton/exercise.ts`
   - Ejecutar: `npm run exercise:singleton`

2. **Factory Method** - Implementa un sistema de pagos
   - Archivo: `src/creational/factory/exercise.ts`
   - Ejecutar: `npm run exercise:factory`

3. **Builder** - Implementa un `EmailBuilder`
   - Archivo: `src/creational/builder/exercise.ts`
   - Ejecutar: `npm run exercise:builder`

### 🔧 Patrones Estructurales

4. **Adapter** - Adapta sistemas de logging
   - Archivo: `src/structural/adapter/exercise.ts`
   - Ejecutar: `npm run exercise:adapter`

5. **Decorator** - Implementa decoradores de texto
   - Archivo: `src/structural/decorator/exercise.ts`
   - Ejecutar: `npm run exercise:decorator`

6. **Facade** - Implementa un `HomeTheaterFacade`
   - Archivo: `src/structural/facade/exercise.ts`
   - Ejecutar: `npm run exercise:facade`

### 🎭 Patrones de Comportamiento

7. **Strategy** - Implementa estrategias de compresión
   - Archivo: `src/behavioral/strategy/exercise.ts`
   - Ejecutar: `npm run exercise:strategy`

8. **Observer** - Implementa una estación meteorológica
   - Archivo: `src/behavioral/observer/exercise.ts`
   - Ejecutar: `npm run exercise:observer`

9. **Command** - Implementa un control remoto
   - Archivo: `src/behavioral/command/exercise.ts`
   - Ejecutar: `npm run exercise:command`

---

## 💡 Consejos para Resolver los Ejercicios

1. **Lee el ejemplo primero** - Cada patrón tiene un ejemplo completo en `demo/example.ts`
2. **Entiende el problema** - Lee las instrucciones del ejercicio cuidadosamente
3. **Empieza simple** - Implementa la funcionalidad básica primero
4. **Prueba frecuentemente** - Ejecuta tu código después de cada cambio
5. **Compara con el ejemplo** - Si te atascas, revisa cómo se implementó en el ejemplo
6. **Pregunta** - Si algo no tiene sentido, pregunta al instructor

---

## 📚 Documentación

- **STUDENT-GUIDE.md** - Guía completa con explicaciones de cada patrón
- **README.md** (rama main) - Guía para el instructor con soluciones

---

## 🔄 ¿Necesitas las Soluciones?

Las soluciones están en la rama `main`:

```bash
# Ver las soluciones (solo lectura)
git checkout main
cat src/creational/singleton/exercise.ts

# Volver a la rama students
git checkout students
```

**Nota:** Intenta resolver los ejercicios por tu cuenta antes de ver las soluciones. ¡Aprenderás mucho más!

---

## 🎓 Estructura del Curso

### Módulo 1: Patrones Creacionales (2.5 horas)
- Singleton (50 min)
- Factory Method (50 min)
- Builder (50 min)

### Módulo 2: Patrones Estructurales (2.5 horas)
- Adapter (50 min)
- Decorator (50 min)
- Facade (50 min)

### Módulo 3: Patrones de Comportamiento (3 horas)
- Strategy (60 min)
- Observer (60 min)
- Command (60 min)

---

## 🤝 ¿Necesitas Ayuda?

1. Revisa el ejemplo del patrón
2. Lee la guía del estudiante (STUDENT-GUIDE.md)
3. Ejecuta el ejemplo y observa la salida
4. Pregunta al instructor
5. Trabaja en parejas (pair programming)

---

## ✅ Checklist del Estudiante

- [ ] Configuré el proyecto (`npm install`)
- [ ] Ejecuté todos los ejemplos
- [ ] Leí la guía del estudiante
- [ ] Entiendo qué problema resuelve cada patrón
- [ ] Completé los ejercicios de Patrones Creacionales
- [ ] Completé los ejercicios de Patrones Estructurales
- [ ] Completé los ejercicios de Patrones de Comportamiento
- [ ] Puedo explicar cuándo usar cada patrón

---

**¡Buena suerte y feliz aprendizaje! 🚀**
